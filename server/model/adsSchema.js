const mongoose = require('mongoose');

main().then(()=>{
    console.log('MongoDB connection is ready...')
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/adsDetails');

}

const adsSchema = new mongoose.Schema({
    _id: Number,
    companyId: Number,
    primaryText: String,
    headline: String,
    description: String,
    CTA: String,
    imageUrl: String
})

module.exports.Ads = mongoose.model('Ads', adsSchema);

const companiesSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    url: String
})

module.exports.Companies = mongoose.model('Companies', companiesSchema)



