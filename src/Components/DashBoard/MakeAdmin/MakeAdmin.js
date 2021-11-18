// import axios from "axios";
// import React, { useState } from "react";
// import useAuth from "../../../hooks/useauth";

// const MakeAdmin = () => {
//     const [email, setEmail] = useState('');
//     const [success, setSuccess] = useState(false);
//     const { token } = useAuth();

//     const handleOnBlur = e => {
//         setEmail(e.target.value);
//     }
//     const handleAdminSubmit = e => {
//         const user = { email };
//         fetch('https://stark-caverns-04377.herokuapp.com/users/admin', {
//             method: 'PUT',
//             headers: {
//                 'authorization': `Bearer ${token}`,
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(user)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.modifiedCount) {
//                     console.log(data);
//                     setSuccess(true);
//                 }
//             })

//         e.preventDefault()
//     }
// const [email, setEmail] = useState("");
// const handleAdmin = () => {
//     axios
//         .put(`'https://mighty-scrubland-24638.herokuapp.com/users${email}`)
//         .then((res) => console.log(res.data))
//         .catch((err) => {
//             console.log(err);
//         });
// };
//     return (
//         <div>
//             <input
//                 type="email"
//                 placeholder="email"
//                 onChange={handleOnBlur}
//                 className="form-control"
//             />
//             <button className="btn btn-primary" onClick={handleAdminSubmit}>
//                 Make Admin
//             </button>
//         </div>
//     );
// };

// export default MakeAdmin;

import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
// import useAuth from './../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    // const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://mighty-scrubland-24638.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                // 'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())

            .then(data => {
                console.log(data);
                // if (data.modifiedCount) {
                //     console.log(data);
                //     setSuccess(true);
                // }
            })

        e.preventDefault()
    }

    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                {/* <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" /> */}
                <input
                    type="email"
                    placeholder="email"
                    onChange={handleOnBlur}

                />
                {/* <button className="btn btn-primary" onClick={handleAdminSubmit}>  Make Admin
                </button> */}

                <Button type="submit" >Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;