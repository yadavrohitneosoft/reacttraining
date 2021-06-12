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
    var [ingredients,setIngred] = useState([])
    useEffect(()=>{
        axios({
            method:"get",
            url:apiurl
        }).then((response)=>{
            const cakeDetail = response.data.data
            getCakeDetail(cakeDetail)
            setIngred(response.data.data.ingredients)
            setLoading(false) //we are hiding loader after response come
            console.log('cake details response >>>>> ', response.data.data)
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
                    <div className="col-md-5 pd10 mb-4 mb-md-0"> 
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner"> 
                                        <div className="carousel-item active">
                                            <img className="d-block w-100 pddd" src={cake.image} alt="" />
                                        </div> 
                                    </div>
                            </div>

                    </div>
                    <div className="col-md-7 pd10">

                    <h5 className="new fs34">{cake.name}</h5> 
                    <p className="new fs18"><span className="mr-1 fs18"><strong><i className="fa fa-inr"></i> {cake.price}</strong></span></p>
                    <p className="new">{cake.description}</p>
                    
                    <hr/>
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">More Details</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Ingredients</a>
                        </li> 
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            {ingredients.map(item => (
                                 <li className="pdl" key={item}>{item}</li>
                            ))}
                        </div> 
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