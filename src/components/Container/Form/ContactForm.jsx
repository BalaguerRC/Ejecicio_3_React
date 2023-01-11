import React, { useRef } from 'react';
import PropTypes from 'prop-types'
import { Contacto } from '../../../models/contacto.class';

const ContactForm = ({ add }) => {
    const nameRef = useRef('');
    const phoneRef = useRef('');
    const emailRef = useRef('');

    function addContact(e) {
        e.preventDefault();
        const newContact = new Contacto(
            nameRef.current.value,
            phoneRef.current.value,
            emailRef.current.value,
            false
        )
        add(newContact);
        nameRef.current.value = '';
        phoneRef.current.value = '';
        emailRef.current.value = '';
    }
    return (

        <form onSubmit={addContact} style={{ background: 'grey', justifyContent: 'center', display: 'grid' }}>
            <div className='form-outline flex-fill'>
                <input required autoFocus ref={nameRef} id='inputName' type='text' placeholder='Name' />
                <input required autoFocus ref={phoneRef} id='inputDescription' type='text' placeholder='Phone' />
                <input required autoFocus ref={emailRef} id='inputDescription' type='text' placeholder='Email' />
            </div>
            <button type='submit'>Add</button>
        </form>
    );
}

ContactForm.protoTypes = {
    add: PropTypes.func.isRequired
}


export default ContactForm;
