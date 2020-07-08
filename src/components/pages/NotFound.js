import React from 'react';

class NotFound extends React.Component {
    render() {

        let imgStyle = {
            height: '80%',
            width: '100%',
            marginBottom: '2rem',
            borderRadius: '.75rem'
        };
        let pStyle = {
            color: '#fff3cd',
            fontWeight: 600,
            fontFamily: 'Open Sans',
            fontSize: '1.75rem'
        };

        return (
            <div>
                <p className="text-center" style={pStyle}>Duude, wat are u searching fo ??!!</p>
                {/*<p className="lead">Sorry, that page does not exist.</p>*/}
                <img src={require ("../../img/notfound.png")} alt="Not Found" style={imgStyle} />
            </div>
        );
    }
}

export default NotFound;