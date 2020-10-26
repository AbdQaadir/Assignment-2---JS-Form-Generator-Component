import React from 'react'
import styled from 'styled-components';
import InputElement from './InputElement';
const SubmitButton = styled.input`
    background: #000;
    color: #fff;
    padding: 10px 20px;
    font-weight: 500;
    width: 120px;
    font-size: 17px;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 10px;
`
const Form = styled.form`
    height: 500;
    padding: 20px 30px;
    margin: 80px auto;
    border-radius: 10px;
    box-shadow: 1px 3px 10px 2px rgba(0,0,0,.2);
    max-width: 450px;
    min-width: 300px;
`

function FormGenerator({form, submit}) {
    return (
        <Form onSubmit={() => submit()}>
            <h2>POLICE BRUTALITY REPORT FORM</h2>
            {form?.map((item, idx) => <InputElement item={item} key={idx} /> )}
            <SubmitButton type="submit" value="Submit" />
        </Form>
            )
        }
export default FormGenerator
