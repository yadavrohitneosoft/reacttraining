function Cake (props){
    if(props.data){
        return ( 
            <div className="card" style={{width: "18rem"}}>
                <img height="100px" src={props.data.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.data.name}</h5>
                    <p className="card-text">{props.data.price}</p>
                  { props.data.discount && <p className="card-text">{props.data.discount}</p> }
                </div>
            </div>
        )
    }else{
        return null;
    }
}

export default Cake;