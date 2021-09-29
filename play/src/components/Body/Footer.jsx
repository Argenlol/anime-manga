import { ButtonBase } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Work</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careesrs</Link>
                        <Link to="/">Investors</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/sign-up">Submit Video</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencer</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact </h2>
                        <Link to="/sign-up">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Destinations</Link>
                        <Link to="/">Sponsorships</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social </h2>
                        <a href="https://www.instagram.com/argen_sh.py/" target="_blank">Insatagram</a>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Twiter</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">VK</Link>
                    </div>
                </div>
            </div>
        </div>

    );

};


export default Footer;

