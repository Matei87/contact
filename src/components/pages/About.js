import React from 'react';
import '../About.css'

class About extends React.Component {
    render() {
        return (
            <div className="about-page">
                <h1 className="display-4">About Contact Manager</h1>
                <p className="lead">Simple app to manage contacts</p>
                <p className="text-secondary">Version 1.0.0</p>
            </div>
        );
    }
}

export default About;