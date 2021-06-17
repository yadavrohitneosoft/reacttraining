import React from 'react'
import { Link } from 'react-router-dom'
import Cake from '../Cake/Cake'
import Loader from '../../includes/Loader'
import { useState, useEffect } from 'react' 
import axios from 'axios'
const Dashboard = (props)=>{
    var [cakes,getCakes] = useState([]) //initialising cakes with an empty array in usestate([])
    const [loading, setLoading] = useState(true) //if we want to show loader untill response come
    //useEffect() method will be called again when any state property gets changed/updated
    useEffect(()=>{ 
        axios({
            method:"get",
            url: process.env.REACT_APP_API_BASE_URL+'/allcakes'
        }).then((response)=>{
            const cakeList = response.data.data
            getCakes(cakeList)
            setLoading(false) //we are hiding loader after response come 
        }, (error)=>{
            setLoading(false)
            console.log('list not found error:', error)
        })
    }, []) //useEffect() will not get called on any value/property updated instead value given in an empty array 
    


    return (
        <div className="container" style={{marginTop: "20px"}}>
            <div className="row">
                <div className="col-xs-12">
                <h3>Welocome To Admin </h3> 
                <div className="d-flex align-items-start">
                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <Link to="/admin/dashboard" ><button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Cakes</button></Link>
                        <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Add Cake</button>
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        {loading ? <Loader></Loader> :
                   
                                //before we were getting values from data component now we are getting from an API Url
                                cakes.map((each,index)=>{ 
                                    return ( <Cake data={each} key={index} sendclass="dashboard" ></Cake> )
                                })
                        }
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard