import {Link, withRouter} from 'react-router-dom';
import querystring from 'query-string';
import { useEffect, useState } from 'react';
import axios from 'axios'; 
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

function Search(props){
    //let token = localStorage.getItem('token')
    const searchString = querystring.parse(props.location.search);
    var apiurl = process.env.REACT_APP_BASE_URL+'/searchcakes?q='+searchString.q;
    var [items,getItems] = useState([]); //initialising items with an empty array
    var [length, getLength] = useState(0)
    var [isLoading,setLoading] = useState(true);
    useEffect(()=>{ 
        axios({
            method:"get",
            url:apiurl
        }).then((response)=>{
            const item = response.data.data;
            getLength(item.length)
            getItems(item) //passing item to items array 
            setLoading(false) //we are hiding loader after response come
            console.log('response>>>>> ', response.data.data)
        }, (error)=>{
            setLoading(false)
            console.log('list not found error:', error)
        })
    }, [searchString.q]) //if array empty then useEffect will execute onle once hence rencder will be called once
    //console.log(searchString);
    //=> {foo: 'bar'}
        return (
            <div className="container">
                <p className="pp">({length}) results found for: {searchString.q}</p>
                <div className="row cakelist">
                    {/* show loading till the time data loads */}
                    <HashLoader loading={isLoading} color="#FEBD69" css={css`display: block;margin: 0 auto;`} size={40} /> 
                    {  
                        items.length > 0 && //if length greather than 0 then map will execute
                        //before we were getting values from data component now we are getting from an API Url
                            items.map((each,index)=>{  
                                return( 
                                    <div className="cakes col">
                                        <Link to={'/cakeDetails/'+each.cakeid}><img src={each.image} className="card-img-top cakeImage" alt="..." /></Link>
                                        <p className="card-title">{each.name}</p>
                                        <i className="fa fa-inr">&nbsp;<span className="card-text">{each.price}</span></i> 
                                    </div>
                                )                                     
                            })
                    }
                    {/* if items is 0 then print no data found */}
                    { items.length <= 0 && <div className="col12"> No data found!</div> }
                </div>   
            </div>
        ) 
}

export default Search;