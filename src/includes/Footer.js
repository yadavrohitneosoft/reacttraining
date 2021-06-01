let FooterNew = ()=>{
    return (
            <footer className="bg-dark text-center text-white">
            {/* <!-- Grid container --> */}
            <div className="container p-4">
                {/* <!-- Section: Social media --> */}
                <section className="mb-4">
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
                {/* <!-- Section: Social media --> */}

                {/* <!-- Section: Form --> */}
                <section className="">
                <form action="">
                    {/* <!--Grid row--> */}
                    <div className="row d-flex justify-content-center">
                    {/* <!--Grid column--> */}
                    <div className="col-auto">
                        <p className="pt-2">
                        <strong>Sign up for our newsletter</strong>
                        </p>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-md-5 col-12">
                        {/* <!-- Email input --> */}
                        <div className="form-outline form-white mb-4">
                        <input type="email" id="form5Example2" className="form-control" />
                        <label className="form-label" htmlFor="form5Example2">Email address</label>
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-auto">
                        {/* <!-- Submit button --> */}
                        <button type="submit" className="btn btn-outline-light mb-4">
                        Subscribe
                        </button>
                    </div>
                    {/* <!--Grid column--> */}
                    </div>
                    {/* <!--Grid row--> */}
                </form>
                </section>
                {/* <!-- Section: Form --> */}

                {/* <!-- Section: Text --> */}
                {/* <section className="mb-4">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                    repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                    eum harum corrupti dicta, aliquam sequi voluptate quas.
                </p>
                </section> */}
                {/* <!-- Section: Text --> */}

                {/* <!-- Section: Links --> */}
                <section className="">
                {/* <!--Grid row--> */}
                <div className="row">
                    {/* <!--Grid column--> */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    {/* <h5 className="text-uppercase">Links</h5> */}
                        <p>Cake shop is a plateform to order Cakes & Bakery products online at a reasonable price. </p>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Quick Links</h5>

                    <ul className="list-unstyled mb-0">
                        <li>
                        <a href="#!" className="text-white">Home</a>
                        </li>
                        <li>
                        <a href="#!" className="text-white">About Us</a>
                        </li> 
                    </ul>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Cakes</h5>

                    <ul className="list-unstyled mb-0">
                        <li>
                        <a href="#!" className="text-white">Chocolate</a>
                        </li>
                        <li>
                        <a href="#!" className="text-white">Vanilla</a>
                        </li>
                    </ul>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Pastries</h5>

                    <ul className="list-unstyled mb-0">
                        <li>
                        <a href="#!" className="text-white">Butter Scotch</a>
                        </li>
                        <li>
                        <a href="#!" className="text-white">Chocolate</a>
                        </li>
                    </ul>
                    </div>
                    {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
                </section>
                {/* <!-- Section: Links --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2021 Copyright:
                <a className="text-white" href="https://itsreactapp.herokuapp.com/"> My React App</a>
            </div>
            {/* <!-- Copyright --> */}
            </footer>
           
    )
}

export default FooterNew;