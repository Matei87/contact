import React from "react";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import '../Contact.css';

class Contact extends React.Component {
    // static propTypes = {
    //     name: PropTypes.string.isRequired,
    //     email: PropTypes.string.isRequired
    // };

    state = {
        showContactInfo: false
    };

    onDeleteClick = async (id, dispatch) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch( {type: 'DELETE_CONTACT', payload: id} );
        } catch (e) {
            dispatch( {type: 'DELETE_CONTACT', payload: id} );
            // console.log(e);
        }



    };

    render() {
        let { id, name, email, phone } = this.props.contact;
        let { showContactInfo } = this.state;
        let sortDownStyle = {
            cursor: 'pointer'
        };
        let xStyle = {
            float: 'right',
            color: 'red',
            cursor: 'pointer'
        };
        let estyle = {
            float: 'right',
            color: 'black',
            fontSize: '1.25rem',
            cursor: 'pointer',
            marginRight: '.5rem'
        };
        let cardStyle = {
            background: '#fff'
        };

        return (
            <Consumer>
                { value => {
                    const { dispatch } = value;

                    return (
                        <div className="card card-body mb-3" style={cardStyle}>
                            <h4>
                                {name}{' '}
                                <i
                                    onClick={ () =>
                                        this.setState({ showContactInfo:
                                                !this.state.showContactInfo })
                                    }
                                    className="fas fa-sort-down"
                                    style={sortDownStyle}
                                />
                                <i
                                    className="fas fa-times"
                                    style={xStyle}
                                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                />
                                <Link to={`contact/edit/${id}`} style={estyle}>
                                    <i

                                        className="fas fa-pencil-alt"
                                    />
                                </Link>
                            </h4>
                            { showContactInfo ? (<ul className="list-group">
                                <li className="list-group-item">Email: {email}</li>
                                <li className="list-group-item">Phone: {phone}</li>
                            </ul>) : null }
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;