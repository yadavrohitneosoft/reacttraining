import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

let Loader = (props)=> { //props are readonly- we can't modify them
    return (
        <HashLoader loading={this.isLoading} color="#FEBD69" css={css`display: block;margin: 0 auto;`} size={40} />
    );
}

export default Loader;
