import logo from "../../assets/logo.svg"
import './header.css'
const Header = () => {
    return (
        <>
            <div className="position-sticky top-0 z-1 bg-light">
                <header className="d-flex justify-content-between align-items-center">
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
                        {/* <button data-bs-toggle="modal" data-bs-target="#modalbox">cart{state.count}</button> */}
                    </div>
                </header>
            </div>
            {/* <div className="modal fade" id="modalbox"> 
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            u have applied on {state.count} jobs
                        </div>
                        <div className="modal-body">
                            {state.cart.map(job=>(
                                <div>{job.jobTitle}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
export default Header;