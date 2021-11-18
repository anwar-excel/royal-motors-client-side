import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StaffShow = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://mighty-scrubland-24638.herokuapp.com/allstaff")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div>
            <h1>Our Employ </h1>

            <div className="services">
                <div className="row container">
                    {services.slice(0, 3).map(staff => <div className="col-md-6 col-lg-4">
                        <div className="service p-3 border border m-2">
                            <div className="service-img">
                                <img className="w-75" src={staff?.image} alt="" />
                            </div>
                            <h4>{staff.name}</h4>
                            <p>{staff.position}</p>
                            <button className="btn btn-success">Staff Details</button>

                            {/* <Link to={`/services/${staff._id}`}>
                                {" "}
                               
                            </Link> */}
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default StaffShow;