import { BrowserRouter as Router, Link } from 'react-router-dom';
function Bredcrumb(props){
    return (<>
            <div className="container">
                <div className="d-md-flex justify-content-between align-items-center py-4">
                    <h1 className="page-title font-size-3 font-weight-medium m-0 text-lh-lg" style={{ fontSize: '25px' }}>{props.title}</h1>
                    <nav className="woocommerce-breadcrumb font-size-2">
                        <Link to="/" className="h-primary" style={{ textDecoration: 'none', color: 'black', fontWeight: '600' }}>{props.path}</Link>

                        <span className="breadcrumb-separator mx-1"><i className="fas fa-angle-right"></i></span>
                        <span style={{ fontWeight: '600' }}>{props.title}</span>
                    </nav>
                </div>
            </div>
    </>);
}

export default Bredcrumb;