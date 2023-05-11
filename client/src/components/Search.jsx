import React, { useEffect, useState } from 'react'
import axios from 'axios'
import _ from 'lodash'
import Card from './Card'

export default function Search() {

    const [adsData, setAdsData] = useState('')
    const [searchKeyword, setSearchKeyword] = useState()


    function handleSearch(event) {
        setAdsData('')     /// this line is to empty adsdata otherwise it will post response request during change of a search keyword also
        const query = event.target.value;
        setSearchKeyword(query);
    
        console.log("query onchange ", query);

    }


    console.log(searchKeyword)


    //////////////////////////// useEffect to send data of a search keyword to server to check if data matches ////////////////////////////////////////


    function handleClick(e) {
        e.preventDefault()

        console.log(searchKeyword);
        searchKeyword && (async function getData() {
            try {
                const data = { searchKeyword };
                const response = await axios.post('http://localhost:5000/adsdata', data);
                console.log('response.data', response.data)
                setAdsData(response.data)

                console.log('searchKeyword', searchKeyword)

            } catch (error) {
                console.error(error);
            }
        })()
    }


    console.log("adsData", adsData)

    ////////////////// code for search  and a matching card of a searchKeyword ///////////////////////////////

    return (
        <>
            <div className="container ">
                <br />
                <div className="row justify-content-center my-5">
                    <div className="col-12 col-md-10 col-lg-8">
                        <form className="card card-sm">
                            <div className="card-body row no-gutters align-items-center">
                                <div className="col-auto">
                                    <i className="fas fa-search h4 text-body"></i>
                                </div>
                                <div className="col">
                                    <input name="search" value={searchKeyword} onChange={handleSearch} className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search company or keywords" />
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-lg btn-success" onClick={handleClick} type="submit">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='row '>
                    {adsData && searchKeyword.length > 0 && adsData.map((data, index) => {
                        return (
                            <Card
                                companyName={data?.ads?.name}
                                adsImage={data?.imageUrl}
                                headline={data?.headline}
                                description={data?.description}
                                primaryText={data?.primaryText}
                            />
                        )
                    })
                    }

                </div>
            </div >

        </>
    )
}
