import React from 'react';
import { Consumer } from "../../context";
import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from "../layout/TextInputGroup";
import axios from 'axios';

class EditContact extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    async componentDidMount() {
        let { id } = this.props.match.params;
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        let contact = res.data;

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = async (dispatch, e) => {
        e.preventDefault();

        let { name, email, phone } = this.state;

        //Check for errors
        if (name === '') {
            this.setState({ errors: { name: 'Name is required' }});
            return;
        }

        if (email === '') {
            this.setState({ errors: { email: 'Email is required' }});
            return;
        }

        let updateContact = {
            name,
            email,
            phone
        };

        let { id } = this.props.match.params;
        let res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact);

        dispatch({type: 'UPDATE_CONTACT', payload: res.data});

        if (phone === '') {
            this.setState({ errors: { phone: 'Phone is required' }});
            return;
        }

        //Clear State
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/');
    };

    render() {
        let bStyle = {
            fontWeight: 550
        };

        let { name, email, phone, errors } = this.state;

        return (
            <Consumer>
                { value => {
                    let { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header" style={bStyle}>Edit Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder="Enter Name..."
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter Email..."
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="Enter Phone..."
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />
                                    <input
                                        type="submit"
                                        style={bStyle, { border: '1px solid rgba(0,0,0,.125)'}}
                                        value="Update Contact"
                                        className="btn btn-light"
                                    />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );

    }
}

export default EditContact;