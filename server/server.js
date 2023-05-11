const express = require("express")
const bodyParser = require("body-parser")
const { Ads, Companies } = require("./model/adsSchema")
const AdsData = require("./Data/AdsData")
const CompaniesData = require("./Data/CompaniesData")
const cors = require('cors')


const app = express()

app.use(cors())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: "true" }))

app.get('/', (req, res) => {
    res.send('hello world!')
})



//////////////////////// below is the code to add data in a collections /////////////////////////////////////////////////

Ads.find().then(res => {
    res.length < 1 && Ads.insertMany(AdsData).then(res => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}).catch(error => {
    console.log(error)
})


Companies.find().then(res => {
    res.length < 1 && Companies.insertMany(CompaniesData).then(res => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}).catch(error => {
    console.log(error)
})


///////////////////// below is the code for sending mathing keyword of collections feild to a client//////////////////////////////////////


app.post('/adsdata', async (req, res) => { // Define a route for handling POST requests to /adsdata
    const data = req?.body?.searchKeyword?.toString(); // Get the search keyword from the request body and convert it to a string
    console.log('data:', data); // Log the search keyword to the console
  
    try {
      const results = await Ads.aggregate(data && [ // this line  Ads collection to perform an aggregation
        {
          $lookup: { // this $lookup stage to join the Ads and Companies collections
            from: 'companies', 
            localField: 'companyId', 
            foreignField: '_id', 
            as: 'ads' 
          }
        },
        // {
        //   $match: { //  $match stage to filter documents that match the search keyword
        //     $or: [
        //       { primaryText: { $regex: data, $options: 'i' } }, 
        //       { headline: { $regex: data, $options: 'i' } }, 
        //       { description: { $regex: data, $options: 'i' } } 
        //     ]
        //   }
        // },
        {
          $unwind: '$ads' // se the $unwind stage to flatten the resulting array of matching documents from the Companies collection
        },
        {
          $match: { //  the $match stage to filter the documents based on the  keyword in the Company name field
            $or: [
                    { primaryText: { $regex: data, $options: 'i' } }, 
                    { headline: { $regex: data, $options: 'i' } }, 
                    { description: { $regex: data, $options: 'i' } },
                    {'ads.name': { $regex: data, $options: 'i' }}, // Mach documents where the Company name field contains the keyword 
                  ]
            
            
          }
        },
        {
          $project: { //  $project stage to specify which fields to include in the results
            _id: 1, 
            primaryText: 1, 
            headline: 1, 
            description: 1, 
            'ads.name': 1, 
            imageUrl:1
          }
        }
      ]);
    //   console.log(results)
      res.send(results); 
    } catch (error) {
      console.log(error); 
    }
  });
  



app.listen(5000, () => {
    console.log("server is running on port 5000")
})

