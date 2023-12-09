// FormInput.js
import React from 'react';
import '../../assets/css/modal.css'

const FormInput = ({ label, type, name, value, onChange, children, required, options }) => {
    return (
        <div className='modal-form-input'>
            <label className='modal-label'>
                {label}
            </label>
            {type === 'text' ? (
                <input className='modal-input'
                    type="text"
                    id={name}
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                />
            ) : type === 'email' ? (
                <input className='modal-input'
                    type="email"
                    id={name}
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                />
            ) : type === 'tel' ? (
                <input className='modal-input'
                    type="tel"
                    id={name}
                    name={name}
                    pattern="^\+254\d{9}$"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                />
            ) : type === 'date' ? (
                <input className='modal-input'
                    type="date"
                    id={name}
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                />
            ) : type === 'checkbox' ? (
                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        id={name}
                        name={name}
                        checked={value}
                        onChange={(e) => onChange(e.target.checked)}
                        required={required}
                    />
                    <label htmlFor={name}>{children}</label>
                </div>
            ) : type === 'select' ? (
                <select className='modal-input'
                    id={name}
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : type === 'textarea' ? (
                <textarea
                    className='modal-input textarea'
                    id={name}
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                    rows={10} // Specify the number of rows you want
                />
            ) : null}
        </div>
    );
};

export default FormInput;