let Footer = ()=>{
    return (
            <footer className="bg-dark text-center text-white" style={{backgroundColor: "#1a1e21 !important"}}>
           
            <div className="container p-4" >
                {/* <!-- Section: Social media --> */}
                <section className="mb-4 social">
                    {/* <!-- Facebook --> */}
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fa fa-facebook-f"></i
                    ></a>
                    {/* <!-- Twitter --> */}
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fa fa-twitter"></i
                    ></a> 
                    {/* <!-- Instagram --> */}
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fa fa-instagram"></i
                    ></a> 
                </section> 
            </div>
           

            {/* <!-- Copyright --> */}
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                <span className="cpy">© 2021 - </span>
                <a className="text-white cpy" href="https://itsreactapp.herokuapp.com/">Cake Shop</a>
            </div>
            {/* <!-- Copyright --> */}
            </footer>
           
    )
}

export default Footer;