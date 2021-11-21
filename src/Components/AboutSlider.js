import { BrowserRouter as Router, Link} from 'react-router-dom';
import aboutGalleryMain from '../images/aboutGalleryMain.png';
import AboutImageSecond from '../images/AboutImageSecond.png';


const AboutSlider = () => {
    return (<>
        <section className="container-fluid" style={{overflow:'Hidden',background: "url('https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/1920x588/img1.jpg'"}}>
            <div className="hero row min-height-588 align-items-center" style={{height: '82vh'}}>
                <div className="col-lg-2"></div>
                <div className="col-lg-5 col-wd-5 animate__animated animate__fadeInTopLeft" >
                    <img className="img-fluid" alt="Rajpoot Books" src={aboutGalleryMain}  />
                </div>
                <div className="col-lg-5 col-wd-5 mb-4 mb-lg-0">
                    <div className="container">
                        <div className="media-body mr-wd-4 align-self-center mb-4 mb-md-0 ">
                            <p className="hero__pretitle text-uppercase font-weight-bold text-gray-400 mb-2 animate__animated animate__fadeInTopRight"  style={{color:'#beb4b4',fontWeight:'700',textTransform:'upperCase'}}  >since 1994</p>
                            <h2 className="hero__title font-size-14 mb-4  animate__animated animate__fadeInTopRight"  >
                                <span className="hero__title-line-1 font-weight-regular d-block mb-2  " style={{fontSize:'x-large'}}>Bigest Books Store</span>
                                <span className="hero__title-line-2  d-block mb-5  " style={{fontSize:'56px',fontWeight:'700'}}>Rajpoot Books</span>
                            </h2>
                            <Link to="/" className="btn btn-dark  rounded-0 hero__btn animate__animated animate__fadeInTopRight"  tabIndex="0" style={{padding:'0.7rem 3rem'}}>Contact Us</Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>

        <section className="container-fluid" style={{overflow:'Hidden',background: "linear-gradient(to right, #f8e9ec, #fff6f7, transparent)"}}>
        <div className="hero row min-height-588 align-items-center" style={{height: '100vh'}}>
                <div className="col-lg-1"></div>
                
                <div className="col-lg-5 col-wd-5 mb-4 mb-lg-0" data-aos="fade-down-left">
                    <div className="container">
                        <div className="media-body mr-wd-4 align-self-center mb-4 mb-md-0 ">
                            <p className="firstContent">
                                Welcome to Rajpoot Books, your number one source for all things . We're dedicated to giving you the very best of Stationary, with a focus on Costumer Service.
                            </p>
                            <p className="SecondContent">
                                 Founded in 1994 by Purushottam Singh Rajpoot, Rajpoot Books  has come a long way from its beginnings in Sharifnagar. When Purushottam Singh Rajpoot  first started out, his passion for helping in Education  drove him to, and gave him the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over [place, ie: the US, the world, the Austin area], and are thrilled to be a part of the [adjective, ie: quirky, eco-friendly, fair trade] wing of the [industry type, ie: fashion, baked goods, watches] industry.
                            </p>
                            <p className="Regards">
                                Sincerely,<br/>
                                Purushottam Singh Rajpoot,<br/>
                                (Founder)

                            </p>
                         
                        </div>
                    </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-5 col-wd-5 " data-aos="fade-down-right" >
                    <img className="img-fluid" alt="Rajpoot Books" src={AboutImageSecond}  />
                </div>
            </div>
        </section>
    </>);
}

export default AboutSlider;