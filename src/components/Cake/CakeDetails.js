import {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { connect, useDispatch } from 'react-redux';
import Cake from './Cake';
import { addToCartMiddleware } from '../../reduxStore/Middlewares';
import { withRouter } from 'react-router-dom';
import Loader from '../../includes/Loader'

function CakeDetails(props){
    //getting cakeID
    const token = localStorage.token; 
    var params = useParams(); //1st method to get the params by useParams() hook in react.
    //console.log(params.cakeId)
    const qParam = props.match.params //2nd method to get the params, we are getting cake id through props.match.params
    //console.log('cakeId:', data.cakeId)
    var apiurl = process.env.REACT_APP_API_BASE_URL+"/cake/"+qParam.cakeId; //we can access static variables by process.env
    //const dispatch = useDispatch(); //we can also use dispatch like this way instead of this.props.dispath
    const [cake,getCakeDetail] = useState([]) //initialising cake with an empty array in usestate([])
    const [loading, setLoading] = useState(false) //if we want to show loader untill response come
    const [ingredients,setIngred] = useState([])
    const [isAddedCart, setAddedCart] = useState(false) //setting isAddedCart to false untill item added
    const [relatedCakes, getRelatedCakes] = useState([])
    const [similarCakeLength, setSimilarCakeLength] = useState(0)
    let cakeList = undefined 
    useEffect(()=>{
        axios({
            method:"get",
            url:apiurl
        }).then( response => {
            cakeList = response.data.data
            getCakeDetail(cakeList)
            setIngred(response.data.data.ingredients)
            setLoading(true) //we are hiding loader after response come 
        }, error => {
            setLoading(true)
            console.log('list not found error:', error)
        }).then(res => {
            axios({
                url: process.env.REACT_APP_API_BASE_URL +'/searchcakes?q='+cakeList.flavour,
                method: 'get'
            }).then( res => {
                const relatedCakesList = res.data.data
                setSimilarCakeLength(res.data.data.length)
                getRelatedCakes(relatedCakesList)
                setLoading(true)
            }, err => {} )
        })
    }, [qParam.cakeId])

    let addToCart = (data)=>{ 
        props.dispatch(addToCartMiddleware(data))
    }
    return(
        
        <div>
            {loading ? ('') : <Loader></Loader>}
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
                    {!isAddedCart && <button type="button" onClick={ () => addToCart(cake) } className="btn btn-dark btn-md mr-1 mb-2"><i
                        className="fa fa-shopping-cart pr-2"></i>Add to cart</button> }
                    {isAddedCart && <button type="button" className="btn btn-dark btn-md mr-1 mb-2">Adding to Cart...</button>}
                    </div>
                </div>
                {(similarCakeLength > 0 ) && 
                    <div className="row">
                        <h2>Similar Products</h2>
                        {
                            relatedCakes.map((each, index) => {
                                return (
                                    <Cake data={each} key={index} page="details"/>
                                )
                            })
                        }
                    </div>
                }
            </section>
        </div>
    )
}

CakeDetails = connect(function (state, props){
    if (state.CartReducer.success) {
        props.history.push('/cart')
        state.CartReducer.success = false
    }
})(CakeDetails);

export default withRouter(CakeDetails)