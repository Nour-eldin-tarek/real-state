import React from 'react'
import './Services.css'

function ServicesSection() {
    const ServicesData = [
        {
            title: 'Redfin Ranks The Most Competitive Neighborhoods of 2020',
            image: 'https://placehold.co/334x200'
        },
        {
            title: 'Why We Should All Support Clear Cooperation',
            image: 'https://placehold.co/334x200'
        },
        {
            title: 'Redfin Ranks The Most Competitive Neighborhoods of 2020',
            image: 'https://placehold.co/334x200'
        },
        {
            title: '12 Walkable Cities Where You Can LIve Affordably',
            image: 'https://placehold.co/334x200'
        },
        {
            title: 'Redfin Unveils The Best Canadian Cities for Biking',
            image: 'https://placehold.co/334x200'
        },
        {
            title: "You Can Buy The Piano Teacher's Home from Groundhog Day",
            image: 'https://placehold.co/334x200'
        },
        {
            title: 'Housing Markets That Changed The Most This Decade',
            image: 'https://placehold.co/334x200'
        },
        {
            title: 'Redfin Ranks The Most Competitive Neighborhoods of 2020',
            image: 'https://placehold.co/334x200'
        },
        {
            title: '12 Walkable Cities Where You Can Live Affordably',
            image: 'https://placehold.co/334x200'
        },
    ]


    return (
        <>
            <div className="container">
                {
                    ServicesData.map((services)=>
                    <div className="row">
                    <div className="col-lg-4">
                        <div className="service-card">
                            <img src={services.image} alt="Service" />
                            <p>{services.title}</p>
                        </div>
                    </div>
                    </div>
                    )
                }
            </div>
        </>
    )
}

export default ServicesSection