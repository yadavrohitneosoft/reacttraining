import data from '../data';
import Cake from './Cake';

function Cakeslist (){
    return (
        <div className="row">
            {   
                data.map((each,index)=>{
                    return ( <Cake data={each} key={index} ></Cake> )
                })
            }      
        </div>
    )
}

export default Cakeslist;