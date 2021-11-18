import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h2>Address</h2>
                <h4>Royal Motors</h4>
                <h5>Road:#11,Dhanmondi-11,Dhaka-####</h5>
            </div>
            <div>
                <h2>Call</h2>
                <h4>017########</h4>
                <h4>017########</h4>
                <h4>017########</h4>
                <h4>017########</h4>
            </div>
            <div>
                <h2>Branch</h2>
                <h5>Tangail</h5>
                <h5>Mymensing</h5>
                <h5>Jossore</h5>
            </div>
            <div>
                <h5>Please Subcribe</h5>
                <input type="email" name="" placeholder="Enter Your Email" id="" /> <br />
                <button className="btn">Submit</button>
            </div>


        </div>
    );
};

export default Footer;