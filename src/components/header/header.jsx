import logo from "../../assets/logo.svg"
import './header.css'
const Header = () => {
    return (
        <>
            <div className="position-sticky top-0 z-1 bg-light">
                <header className=" header-fullscreen ">
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="logo">
                            <img src={logo} style={{ width: "100%" }}></img>
                        </span>
                        <span className="logo-quote ms-5" >BRINGING YOU <b className="text-primary "> THE PERFECT JOB</b></span>
                    </div>
                    <div className="fw-bold ">
                        <span className="navbar-item">Jobs</span>
                        <span className="navbar-item">Active Employers</span>
                        <span className="navbar-item">Pricing</span>
                        <button className="btn jobseekerlogin text-dark mx-2 fw-bold">Jobseeker Login</button>
                        <button className="emplogin btn mx-2">Employer Login</button>
                    </div>
                </header>
                <header className="header-media">
                    <div className="row">
                        <span className="col-4 logo">
                            <img src={logo} style={{ width: "100%" }}></img>
                        </span>
                        <span className="col-7 text-center taglineheader fw-bold"><div>11,000+ </div><div>Active Jobs.</div></span>
                    </div>
                </header>
            </div>
        </>
    )
}
export default Header;