import {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

function CakeDetails(props){
    //getting cakeID
    var params = useParams(); //1st method to get the params by useParams() hook in react.
    //console.log(params.cakeId)
    const data = props.match.params //1st method to get the params, we are getting cake id through props.match.params
    //console.log('cakeId:', data.cakeId)
    var apiurl = process.env.REACT_APP_BASE_URL+"/cake/"+data.cakeId; //we can access static variables by process.env
    var [cake,getCakeDetail] = useState([]) //initialising cake with an empty array in usestate([])
    var [isLoading,setLoading] = useState(true) //if we want to show loader untill response come
    useEffect(()=>{
        axios({
            method:"get",
            url:apiurl
        }).then((response)=>{
            const cakeDetail = response.data.data
            getCakeDetail(cakeDetail)
            setLoading(false) //we are hiding loader after response come
            console.log('response>>>>> ', response.data)
        }, (error)=>{
            setLoading(false)
            console.log('list not found error:', error)
        })
    }, [])
    return(
        <div>
            {isLoading && <div><img src="./assets/images/loader.gif" height="35"/></div>} 
            <section className="mb-3 mt-3">
                <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">

                    <div id="mdb-lightbox-ui"></div>

                    <div className="mdb-lightbox">

                        <div className="row product-gallery mx-1">

                        <div className="col-12 mb-0">
                            <figure className="view overlay rounded z-depth-1 main-img">
                            <a href="#"
                                data-size="500x560">
                                <img src={cake.image} className="img-fluid z-depth-1" />
                            </a>
                            </figure>
                             
                        </div>
                         
                        </div>

                    </div>

                    </div>
                    <div className="col-md-6">

                    <h5>{cake.name}</h5> 
                    <p><span className="mr-1"><strong><i className="fa fa-inr"></i> {cake.price}</strong></span></p>
                    <p className="pt-1">{cake.description}</p>
                    <div className="table-responsive">
                        <table className="table table-sm table-borderless mb-0">
                        <tbody>
                            <tr>
                            <th className="pl-0 w-25" scope="row"><strong>Flavour</strong></th>
                            <td>{cake.flavour}</td>
                            </tr>
                            <tr>
                            <th className="pl-0 w-25" scope="row"><strong>Type</strong></th>
                            <td>{cake.type}</td>
                            </tr>
                            <tr>
                            <th className="pl-0 w-25" scope="row"><strong>Eggless</strong></th>
                            {cake.eggless==true && <td>Yes</td> }
                            {cake.eggless==false && <td>No</td> }
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <hr/>
                     
                    <button type="button" className="btn btn-primary btn-md mr-1 mb-2">Buy now</button>
                    <button type="button" className="btn btn-light btn-md mr-1 mb-2"><i
                        className="fas fa-shopping-cart pr-2"></i>Add to cart</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CakeDetails