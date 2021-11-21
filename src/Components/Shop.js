import { BrowserRouter as Router, Link } from 'react-router-dom';
import Bredcrumb from './Bredcrumb';
import '../css/shop.css';

const Shop = () => {
    return (<>
        
        <Bredcrumb title="Shop" path={'Home'}/>
        <div className="container py-5">
            <div className="row ProductsRow">

                <div className="col-md-4 product border border-2" style={{ borderColor: '#a68cf136' }}>
                    <div className="product__inner overflow-hidden p-3 p-md-4d875">
                        <div className="woocommerce-LoopProduct-link woocommerce-loop-product__link d-block position-relative">
                            <div className="woocommerce-loop-product__thumbnail">
                                <Link to="../shop/single-product-v1.html" className="d-block">
                                    <img src="https://demo2.madrasthemes.com/bookworm-html/redesigned-octo-fiesta/assets/img/150x226/img1.jpg" className="img-fluid d-block mx-auto attachment-shop_catalog size-shop_catalog wp-post-image img-fluid" alt="image-description" />
                                </Link>
                            </div>
                            <div className="woocommerce-loop-product__body product__body pt-3 bg-white">
                                <div className="text-uppercase font-size-1 mb-1 text-truncate">
                                    <Link to="../shop/single-product-v1.html">Paperback</Link>
                                </div>
                                <h2 className="woocommerce-loop-product__title product__title h6 text-lh-md mb-1 text-height-2 crop-text-2 h-dark"><a href="../shop/single-product-v1.html">Think Like a Monk: Train Your Mind for Peace and Purpose Everyday</a></h2>
                                <div className="font-size-2  mb-1 text-truncate">
                                    <Link to="../others/authors-single.html" className="text-gray-700">Jay Shetty</Link>
                                </div>
                                <div className="price d-flex align-items-center font-weight-medium font-size-3">
                                    <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>29</span>
                                </div>
                            </div>
                            <div className="product__hover d-flex align-items-center">
                                <Link to="../shop/single-product-v1.html" className="text-uppercase text-dark h-dark font-weight-medium mr-auto" data-toggle="tooltip" data-placement="right" title="" data-original-title="ADD TO CART">
                                    <span className="product__add-to-cart">ADD TO CART</span>
                                    <span className="product__add-to-cart-icon font-size-4"><i className="flaticon-icon-126515"></i></span>
                                </Link>
                                <Link to="../shop/single-product-v1.html" className="mr-1 h-p-bg btn btn-outline-primary border-0">
                                    <i className="flaticon-switch"></i>
                                </Link>
                                <Link to="../shop/single-product-v1.html" className="h-p-bg btn btn-outline-primary border-0">
                                    <i className="flaticon-heart"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    </>);
}
export default Shop;


