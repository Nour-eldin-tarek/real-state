import React from "react";
import './Property.css'; // Assuming you have the styles in a separate CSS file
import image from "../../../Images/Other/unnamed.png";
import image2 from "../../../Images/Other/World-Furniture-Online_77.jpg";
import image3 from "../../../Images/Other/Verona-Navy.jpg";

function PropertySection() {
    return (
        <div className="property_page">
            <div className="container">
                <h6>
                    <span className="text-home-color"> Home </span> / <span className="text-property-color"> property</span>
                </h6>
                <h1>Get all Properties</h1>

                <div className="row g-0">
                    <div className="col-12 col-md-3">
                        <div className="property_side_contant">
                            <div className="icon-container">
                                <input type="text" placeholder="Keyword" />
                                <i className="fas fa-search search-icon"></i>
                            </div>
                            <div className="icon-container">
                                <input type="text" placeholder="Location" />
                                <i className="fas fa-map-marker-alt search-icon"></i>
                            </div>
                            <div className="property_side_filter">
                                Status <span className="property_side_filter_arrwo"><i className="fas fa-chevron-down"></i></span>
                            </div>
                            <div className="property_side_filter">
                                Property Type <span className="property_side_filter_arrwo"><i className="fas fa-chevron-down"></i></span>
                            </div>
                            <div className="property_side_filter">
                                Price Range <span className="property_side_filter_arrwo"><i className="fas fa-chevron-down"></i></span>
                            </div>
                            <div className="property_side_filter">
                                Bathrooms <span className="property_side_filter_arrwo"><i className="fas fa-chevron-down"></i></span>
                            </div>
                            <div className="property_side_filter">
                                Bedrooms <span className="property_side_filter_arrwo"><i className="fas fa-chevron-down"></i></span>
                            </div>
                            <div className="property_side_filter">
                                Garages <span className="property_side_filter_arrwo"><i className="fas fa-chevron-down"></i></span>
                            </div>
                            <div className="property_side_filter">
                                Year built <span className="property_side_filter_arrwo"><i className="fas fa-chevron-down"></i></span>
                            </div>
                            <input type="text" placeholder="Min Area" className="property_area_input" />
                            <input type="text" placeholder="Max Area" className="property_area_input" />
                            <div className="fa-ellipsis-v-text">
                                <i className="fas fa-ellipsis-v"></i> Advanced features
                            </div>
                            <button>Clear Filters</button>
                        </div>

                        <div className="Featured_Propertiesr property_side_contant">
                            <h2>Featured Properties</h2>
                            <img src={image3} alt="Featured Properties" />
                            <button className="property_button_1">Featured</button>
                            <button className="property_button_2">For Sale</button>
                            <h3 className="property_price">$13000<span>/mo</span></h3>
                            <h3 className="property_desc">Luxury Family Home</h3>
                        </div>

                        <div className="Categories_Property property_side_contant">
                            <h1>Categories Property</h1>
                            <div className="row g-1">
                                <div className="col-6 col-md-6">
                                    <p><i className="fas fa-caret-right"></i> Apartment</p>
                                </div>
                                <div className="col-6 col-md-6 text-end">
                                    <p>6 properties</p>
                                </div>
                                <div className="col-6 col-md-6">
                                    <p><i class="fas fa-caret-right"></i> Condo</p>
                                </div>
                                <div className="col-6 col-md-6 text-end">
                                    <p>12 properties</p>
                                </div>
                                <div className="col-6 col-md-6">
                                    <p><i className="fas fa-caret-right"></i> Family House</p>
                                </div>
                                <div className="col-6 col-md-6 text-end">
                                    <p>8 properties</p>
                                </div>
                                <div className="col-6 col-md-6">
                                    <p><i className="fas fa-caret-right"></i> Modern Villa</p>
                                </div>
                                <div className="col-6 col-md-6 text-end">
                                    <p>26 properties</p>
                                </div>
                                <div className="col-6 col-md-6">
                                    <p><i className="fas fa-caret-right"></i> Town House</p>
                                </div>
                                <div className="col-6 col-md-6 text-end">
                                    <p>89 properties</p>
                                </div>
                            </div>
                        </div>

                        <div className="Recently_Viewed property_side_contant">
                            <h1>Recently Viewed</h1>
                            <div className="Recently_Viewed_container">
                                <img src={image2} alt="Recently Viewed img" />
                                <div className="Recently_Viewed_contant">
                                    <h1>Luxury Family Home</h1>
                                    <h2>$19000//mo</h2>
                                    <h3>Beds: 4 Baths: 2 SqFt: 52BO</h3>
                                </div>
                            </div>
                            {/* Repeat for other recently viewed properties... */}
                        </div>
                    </div>

                    <div className="col-12 col-md-8">
                        <div className="row property_main_contant property_first_row">
                            <div className="col-6 col-md-6">10 Search results</div>
                            <div className="col-6 col-md-3 text-center border-right">Status: All Status</div>
                            <div className="col-6 col-md-3 text-center">Sort by: Featured All</div>
                        </div>

                        <div className="row g-0">
                            <div className="col-6 col-md-6 property_cards">
                                <img src={image2} alt="" />
                                <button className="property_button_1">Featured</button>
                                <button className="property_button_2">Sale</button>
                                <h3 className="property_price">$13000<span>/mo</span></h3>
                                <p className="property_card_ctegory">Apartment</p>
                                <p className="property_card_tilte">Luxury Family Home</p>
                                <p className="property_card_location">
                                    <i className="fas fa-map-marker-alt"></i> 1421 San Pedro St. Los Angeles, CA 900015
                                </p>
                                <div className="row">
                                    <div className="col-4">
                                        <p className="property_card_code">Beds: 3</p>
                                    </div>
                                    <div className="col-4">
                                        <p className="property_card_code">Baths: 2</p>
                                    </div>
                                    <div className="col-4">
                                        <p className="property_card_code">sqFt: 3280</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-6 text-start">
                                        <img src={image} alt="profile picture" className="property_profile_picture_img" />
                                        <p className="property_card_footer">Ali Tufan</p>
                                    </div>
                                    <div className="col-6 text-end">
                                        <p className="property_card_footer">1 year ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 property_cards">
                                <img src={image2} alt="" />
                                <button className="property_button_1">Featured</button>
                                <button className="property_button_2">Sale</button>
                                <h3 className="property_price">$13000<span>/mo</span></h3>
                                <p className="property_card_ctegory">Apartment</p>
                                <p className="property_card_tilte">Luxury Family Home</p>
                                <p className="property_card_location">
                                    <i className="fas fa-map-marker-alt"></i> 1421 San Pedro St. Los Angeles, CA 900015
                                </p>
                                <div className="row">
                                    <div className="col-4">
                                        <p className="property_card_code">Beds: 3</p>
                                    </div>
                                    <div className="col-4">
                                        <p className="property_card_code">Baths: 2</p>
                                    </div>
                                    <div className="col-4">
                                        <p className="property_card_code">sqFt: 3280</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-6 text-start">
                                        <img src={image} alt="profile picture" className="property_profile_picture_img" />
                                        <p className="property_card_footer">Ali Tufan</p>
                                    </div>
                                    <div className="col-6 text-end">
                                        <p className="property_card_footer">1 year ago</p>
                                    </div>
                                </div>
                            </div>
                            {/* Repeat for other property cards... */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertySection;
