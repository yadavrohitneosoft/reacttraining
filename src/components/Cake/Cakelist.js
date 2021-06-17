import data from '../data';
import Cake from './Cake';
import axios from 'axios';
import {useEffect, useState} from 'react'; 
import Loader from '../../includes/Loader'

function Cakelist (){
    var apiurl = process.env.REACT_APP_API_BASE_URL+'/allcakes';
    var [cakes,getCakes] = useState([]) //initialising cakes with an empty array in usestate([])
    const [loading, setLoading] = useState(true) //if we want to show loader untill response come
    //useEffect() method called when any state property gets changed/updated
    useEffect(()=>{ 
        axios({
            method:"get",
            url:apiurl
        }).then((response)=>{
            const cakeList = response.data.data
            getCakes(cakeList)
            setLoading(false) //we are hiding loader after response come
            //console.log('response>>>>> ', response.data.data)
        }, (error)=>{
            setLoading(false)
            console.log('list not found error:', error)
        })
    }, []) //useEffect() will not get called on any value/property updated instead value given in an empty array 
    return (
        <div className="container">
            <p className="pp">cakes</p>
            <div className="row cakelist">
                {/* show loading till the time data loads */}
                    {loading ? <Loader></Loader> :
                   
                    //before we were getting values from data component now we are getting from an API Url
                    cakes.map((each,index)=>{ 
                        return ( <Cake data={each} key={index} ></Cake> )
                    })
                }
            </div>   
        </div>
    )
}

export default Cakelist;