
let Dashboard = (props)=>{



    return (
        <div id="slide-out" className="side-nav fixed">
            <ul className="custom-scrollbar">
                <li>
                    <div className="logo-wrapper waves-light waves-effect waves-light">
                        <a className="navbar-brand d-flex justify-content-center align-items-center dark-blue-text" href="#">
                        <img id="MDB-logo"
                            src="https://z9t4u9f6.stackpathcdn.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
                            alt="MDB Logo" />
                        </a>
                    </div>
                </li> 
                <li>
                    <form className="search-form" role="search">
                        <div className="form-group md-form mt-0 mb-1 d-block">
                        <input type="text" className="form-control w-100" placeholder="Search" />
                        </div>
                    </form>
                </li>
        
                <li>
                    <ul className="collapsible collapsible-accordion">
                        <li>
                        <a className="collapsible-header navbar-link-2 waves-effect arrow-r d-flex align-items-center"><i
                            className="fas fa-gem dark-blue-text"></i> Single link
                        </a>
                        </li>
                        <li>
                        <a className="collapsible-header navbar-link-2 waves-effect arrow-r d-flex align-items-center">
                            <i className="fas fa-user dark-blue-text"></i>
                            Collapsible menu
                            <i className="fas fa-angle-down rotate-icon"></i>
                        </a>
                        <div className="collapsible-body">
                            <ul className="list-unstyled">
                            <li>
                                <a href="#" className="waves-effect">Single link</a>
                            </li>
                            <li>
                                <a href="#" className="waves-effect">Single link</a>
                            </li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                </li>
        
            </ul>
        </div>  
    )
}

export default Dashboard