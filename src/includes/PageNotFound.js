import React from "react";
import { Link } from "react-router-dom";

function PageNotFound(){
    return(
        //<div>
        <React.Fragment> 
            <h1>Page Not Found!</h1>
            <Link to="/"><button className="btn btn-success">Home</button></Link>
        </React.Fragment> 
        //</div>
        
    )
}

export default PageNotFound