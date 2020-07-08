import React from 'react';
import { Consumer } from "../../context";
import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from "../layout/TextInputGroup";
import axios from 'axios';

class AddContact extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

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

        if (phone === '') {
            this.setState({ errors: { phone: 'Phone is required' }});
            return;
        }


        let newContact = {
            //id: uuidv4(),
            name,
            email,
            phone
        };

        const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
        dispatch({type: 'ADD_CONTACT', payload: res.data});

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
                          <div className="card-header" style={bStyle}>Add Contact</div>
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
                                      value="Add Contact"
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

export default AddContact;