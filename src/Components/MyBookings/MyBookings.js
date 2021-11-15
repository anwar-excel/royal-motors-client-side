import React, { useEffect } from "react";
import useFirebase from "../../hooks/useFirebase";

const MyBookings = () => {
    const { user } = useFirebase();

    useEffect(() => {
        fetch(`https://mighty-scrubland-24638.herokuapp.com/myOrder/${user?.email}`)
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, [user?.email]);

    return (
        <div>
            <h1>MyBookings</h1>
        </div>
    );
};

export default MyBookings;