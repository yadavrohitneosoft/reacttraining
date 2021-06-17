import { css } from "@emotion/react";
import * as ReactBootStrap from 'react-bootstrap';

let Loader = (props)=> { //props are readonly- we can't modify them
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: '9999' };
    return (
        <div className="loaderParent" style={{padding: '100px'}}>
            <div style={style} className="">
                <ReactBootStrap.Spinner animation="border" ></ReactBootStrap.Spinner>
            </div>
        </div>

    );
}
export default Loader;
