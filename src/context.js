import React from "react";
import axios from 'axios';

let Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
      case 'DELETE_CONTACT':
          return {
              ...state,
              contacts: state.contacts.filter( contact => contact.id !== action.payload)
          };
      case 'ADD_CONTACT':
          return {
              ...state,
              contacts: [action.payload, ...state.contacts]
          };
      case 'UPDATE_CONTACT':
          return {
            ...state,
              contacts: state.contacts.map( contact => contact.id === action.payload.id ? (contact = action.payload) : contact)
          };
      default:
          return state;
  }
};

export class Provider extends React.Component {
    state = {
        contacts: [],
        dispatch: action => this.setState( state => reducer(state, action))
    };
    async componentDidMount() {
        //FETCH VERSION
        //  fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(res => res.json())
        //     .then(data => this.setState({contacts: data}));

        //AXIOS VERSION
        let res = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({contacts: res.data});
            //.then(res => this.setState({contacts: res.data}))
    }

    render() {
        return (
                <Context.Provider value={this.state}>
                    {this.props.children}
                </Context.Provider>
        );
    }
}

export let Consumer = Context.Consumer;