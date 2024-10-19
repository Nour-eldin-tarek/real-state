import React from "react";

function Cities() {
  const cities = [
    {
      name: "Miami",
      propertiesCount: 24,
      imageUrl: "https://placehold.co/373x367",
      altText: "Miami",
    },
    {
      name: "Los Angeles",
      propertiesCount: 18,
      imageUrl: "https://placehold.co/773x367",
      altText: "Los Angeles",
    },
    {
      name: "New York",
      propertiesCount: 89,
      imageUrl: "https://placehold.co/773x367",
      altText: "New York",
    },
    {
      name: "Florida",
      propertiesCount: 47,
      imageUrl: "https://placehold.co/373x367",
      altText: "Florida",
    },
  ];

  return (
    <>
    <section className="find-properties">
      <div className="container my-5">
        <div className="cities-title mb-4">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-center">Find Properties in These Cities</h1>
              <p className="text-center text-muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>

        <div className="cities-images">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <a href="#">
                <div className="city-card">
                  <img src={cities[0].imageUrl} alt={cities[0].altText} />
                  <div className="city-card-overlay">
                    <h3>{cities[0].name}</h3>
                    <p>{cities[0].propertiesCount} Properties</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-8 mb-4">
              <a href="#">
                <div className="city-card">
                  <img src={cities[1].imageUrl} alt={cities[1].altText} />
                  <div className="city-card-overlay">
                    <h3>{cities[1].name}</h3>
                    <p>{cities[1].propertiesCount} Properties</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mb-4">
              <a href="#">
                <div className="city-card">
                  <img src={cities[2].imageUrl} alt={cities[2].altText} />
                  <div className="city-card-overlay">
                    <h3>{cities[2].name}</h3>
                    <p>{cities[2].propertiesCount} Properties</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 mb-4">
              <a href="#">
                <div className="city-card">
                  <img src={cities[3].imageUrl} alt={cities[3].altText} />
                  <div className="city-card-overlay">
                    <h3>{cities[3].name}</h3>
                    <p>{cities[3].propertiesCount} Properties</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
    

  );
}

export default Cities;
