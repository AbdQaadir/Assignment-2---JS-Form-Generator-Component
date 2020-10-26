import React from 'react';
import styled from 'styled-components';

const FormGroup = styled.div`
    margin: 0 auto 25px auto;
    text-align: left;
    label{
        font-size: 17px;
        text-align: left;
        width: 90%;
        padding-bottom: 4px;
    }
    input{
        margin-top: 5px;
        border-radius: 8px;
        width: 90%;
        padding: 10px;
        border: 1px solid rgba(0,0,0,.2);
        box-shadow: 1px 3px 6px 1px rgba(0,0,0,.3);
        outline: none;
    }
    select{
        border-radius: 8px;
        width: 95% !important;
        padding: 10px;
        background: transparent;
        border: 1px solid rgba(0,0,0,.2);
        box-shadow: 1px 3px 6px 1px rgba(0,0,0,.3);
    }
`
const InputElement = ({item}) => {
    const {type, validation, label, options} = item;
    return (
           <FormGroup>
               <label htmlFor="">{label}</label>
                {type !== "select" ? (<input type={type} {...validation}/>) 
                    : type === "select" ? <select>{options.map((option) => <option value={option} key={option}>{option}</option>)}</select>
                    : null
                }
            </FormGroup>
        ) 
    }

export default InputElement
