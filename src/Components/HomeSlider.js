import { BrowserRouter as Router, Link} from 'react-router-dom';



const HomeSlider = () => {
    return (<>
        <section className="container-fluid" style={{overflow:'Hidden',background: "url('https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/1920x588/img1.jpg'"}}>
            <div className="hero row min-height-588 align-items-center" style={{height: '82vh'}}>
                <div className="col-lg-7 col-wd-6 mb-4 mb-lg-0">
                    <div className="container">
                        <div className="media-body mr-wd-4 align-self-center mb-4 mb-md-0 ">
                            <p className="hero__pretitle text-uppercase font-weight-bold text-gray-400 mb-2 animate__animated animate__fadeInTopLeft"  style={{color:'#beb4b4',fontWeight:'700',textTransform:'upperCase'}}  >Rajpoot Books'</p>
                            <h2 className="hero__title font-size-14 mb-4 animated fadeInUp animate__animated animate__fadeInTopLeft"  >
                                <span className="hero__title-line-1 font-weight-regular d-block mb-2  " style={{fontSize:'xxx-large'}}>Featured Books of the</span>
                                <span className="hero__title-line-2  d-block mb-5  " style={{fontSize:'56px',fontWeight:'700'}}>November</span>
                            </h2>
                            <Link to="/products" className="btn btn-dark  rounded-0 hero__btn animate__animated animate__fadeInTopLeft"  tabIndex="0" style={{padding:'0.7rem 3rem'}}>See More</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-wd-6 animate__animated animate__fadeInTopRight" >
                    <img className="img-fluid" alt="Rajpoot Books" src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/800x420/img1.png"  />
                </div>
            </div>
        </section>
    </>);
}

export default HomeSlider;