import { BrowserRouter as Router, Link} from 'react-router-dom';
const Header=()=>{
    return(<>
          
           <nav className="py-2 bg-light border-bottom">
            <div className="container d-flex flex-wrap">
                <ul className="nav me-auto">

                    <li className="nav-item"><Link to="/" className="nav-link link-dark px-2 active" aria-current="page">Home</Link></li>
                    <li className="nav-item"><Link to="/products" className="nav-link link-dark px-2">Products</Link></li>
                    <li className="nav-item"><Link to="/category" className="nav-link link-dark px-2">Category</Link></li>
                    <li className="nav-item"><Link to="/faq" className="nav-link link-dark px-2">FAQs</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link link-dark px-2">About</Link></li>
                </ul>
                <ul className="nav">
                    <li className="nav-item"><Link to="/login" className="nav-link link-dark px-2">Login</Link></li>
                    <li className="nav-item"><Link to="/sign-up" className="nav-link link-dark px-2">Sign up</Link></li>
                </ul>
                </div>
            </nav>


        <header className="py-3  border-bottom">
            <div className="container d-flex flex-wrap justify-content-center">
            <Link to="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                
                <span className="fs-4">Rajpoot Books</span>
            </Link>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0">
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
            </form>
            </div>
        </header>
        
    </>);
}

export default Header;