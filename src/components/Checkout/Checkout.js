import {Redirect, Route, Link} from 'react-router-dom';
import Summary from '../Summary/Summary';
import Address from '../Address/Address';
import Confirm from '../Confirm/Confirm';

function Checkout(props){
    return(
        <>
            <div className="row">
                <div className="col-4">
                    <Link to="/checkout/summary" >Summary</Link>
                    <Link to="/checkout/address" >Address</Link>
                    <Link to="/checkout/confirm" >Confirm</Link>  
                </div>
                <div className="col-8">yahan data
                    <Route path="/checkout/summary" component={Summary}></Route>
                    <Route path="/checkout/address" component={Address}></Route>
                    <Route path="/checkout/confirm" component={Confirm}></Route>
                </div> 
            </div>
        </> 
    )
}

export default Checkout