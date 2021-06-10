import { Link } from 'react-router-dom';

function Cake (props){
    if(props.data){ 
        return ( 
            // repeat the col div
            <div className="cakes col">
                <Link to={'/cakeDetails/'+props.data.cakeid}><img src={props.data.image} className="card-img-top cakeImage" alt="..." /></Link>
                <p className="card-title">{props.data.name}</p>
                <i className="fa fa-inr">&nbsp;<span className="card-text">{props.data.price}</span></i>
                { props.data.discount && <span className="card-text">{props.data.discount}</span> }
            </div>  
        )
    }else{
        return null;
    }
}

export default Cake;