import axios from "axios";
import React, { useState } from "react";

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const handleAdmin = () => {
        axios
            .put(`http://localhost:7000/users/${email}`)
            .then((res) => console.log(res.data))
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
            />
            <button className="btn btn-primary" onClick={handleAdmin}>
                Make Admin
            </button>
        </div>
    );
};

export default MakeAdmin;