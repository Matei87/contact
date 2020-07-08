import React from 'react';

class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    onSubmit = (e) => {
        e.preventDefault();
        let contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        };
        console.log(contact);
    };

    static defaultProps = {
        name: 'Fred Smith',
        email: 'smithf@gmail.com',
        phone: '777-777-7777'
    };

    render() {
        let bStyle = {
            fontWeight: 550
        };

        let { name, email, phone } = this.props;

        return (
            <div className="card mb-3">
                <div className="card-header" style={bStyle}>Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" style={bStyle}>Name</label>
                            <input
                                type="text"
                                name="name"
                                style={{ width: '100%', border: '1px solid #ced4da'}}
                                className="form-control form-control-lg bg-light"
                                placeholder="Enter Name..."
                                defaultValue={name}
                                ref={this.nameInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" style={bStyle}>Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control form-control-lg bg-light"
                                placeholder="Enter Email..."
                                defaultValue={email}
                                ref={this.emailInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" style={bStyle}>Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                className="form-control form-control-lg bg-light"
                                placeholder="Enter Phone..."
                                defaultValue={phone}
                                ref={this.phoneInput}
                            />
                        </div>
                        <input
                            type="submit"
                            style={bStyle}
                            value="Add Contact"
                            className="btn btn-light"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact;