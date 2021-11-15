import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesLoad = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://mighty-scrubland-24638.herokuapp.com/allServices")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    console.log(services);
    return (
        <div>
            <h1>Services</h1>
            <div className="services">
                <div className="row container">
                    {services?.map((pd, index) => (
                        <div className="col-md-6 col-lg-4">
                            <div className="service p-3 border border m-2">
                                <div className="service-img">
                                    <img className="w-75" src={pd?.image} alt="" />
                                </div>
                                <h4>{pd.name}</h4>
                                <p>{pd.description}</p>
                                <p>TK{pd.price}</p>
                                <Link to={`/services/${pd._id}`}>
                                    {" "}
                                    <button className="btn btn-success">Order Now</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesLoad;