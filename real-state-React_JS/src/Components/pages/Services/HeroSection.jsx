import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

function HeroSection() {
    const heroImage = "https://placehold.co/1349x352";


    return (
        <>
            <div className="container">
                <section className="overlayed-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="overlayed-image">
                                    <img src={heroImage} alt="Services" />
                                        <div className="image-overlay">
                                            <div className="overlay-text">
                                                <Link to= "/">Home /</Link><span> Service</span>
                                                <h2>Service</h2>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default HeroSection;