import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CustomTextInput = ({padding, inputName, type, placeholder, value, resetStyles, onChange}) => {


    return (
        <div
            style={{
                padding:`${padding}rem`
            }}
        >
            <span>{inputName}</span>
            <input 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange()}
                style={
                    resetStyles && (
                        {
                            background: '#eee',
                            border: 'dashed #FF0000 2px'
                        }
                    )
                }
            >
            
            </input>
        </div>
    )
}

CustomTextInput.propTypes = {
    padding: PropTypes.number,
    inputName: PropTypes.string,
    type: PropTypes.string,
    resetStyles: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired
}

CustomTextInput.defaultProps = {
    padding: 1,
    inputName: '',
    type: 'text',
    resetStyles: false,
    placeholder: 'Плейсхолдер'
}

export default CustomTextInput