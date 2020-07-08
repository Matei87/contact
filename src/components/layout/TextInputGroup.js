import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

let TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error
}) => {
    let labelStyle = {
        fontWeight: 550
    };
    let inputStyle = {
      border: '1px solid rgba(0,0,0,.125)',
      width: '100%'
    };

        return (
            <div className="form-group">
                <label htmlFor={name} style={labelStyle}>{label}</label>
                <input
                    type={type}
                    name={name}
                    className={classnames('form-control form-control-lg bg-light', { 'is-invalid' : error })}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    style={inputStyle}
                />
                {error && <div className="invalid-feedback">{error}</div>}

            </div>
        );

};

TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};

TextInputGroup.defaultProps = {
    type: 'text'
};

export default TextInputGroup; 