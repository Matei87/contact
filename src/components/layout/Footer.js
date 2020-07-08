import React, {Component} from 'react';

class Footer extends Component {
    render() {
        let fStyle = {
            width: '100%',
            height: '80px',
            background: 'black',
            color: '#fff3cd',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 600,
            fontFamily: 'Modak, cursive'
        };
        let year = () => {
            return new Date().getFullYear();
        };

        return (
            <footer style={fStyle}>
                Made With <i className="fas fa-heart" style={ {color: 'darkred', margin: '0 5px'} }/> by MM &copy; {year()}
            </footer>
        );
    }
}

export default Footer;