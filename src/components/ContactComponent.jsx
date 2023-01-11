import React, { useState, useEffect } from 'react';
import { Contacto } from '../models/contacto.class';
import Contact from './Container/Contact';
import ContactForm from './Container/Form/ContactForm';

const ContactComponent = () => {
    const DefaultContact = new Contacto('Jose', '809.000.00', 'example@gmail.com', false);
    const DefaultContact2 = new Contacto('armar', '809.100.00', 'example2@gmail.com', true);

    const [contacto, setContacto] = useState([DefaultContact, DefaultContact2]);

    useEffect(() => {
        console.log('Contact state has been modified')
        return () => {
            console.log('Contact state has been modified')
        };
    }, [contacto]);


    function deleteContact(contact) {
        console.log('Eliminado...')
        const index = contacto.indexOf(contact);
        const tempContact = [...contacto];
        tempContact.splice(index, 1);
        setContacto(tempContact);
    }
    function updateStateContact(contact) {
        const index = contacto.indexOf(contact);
        const tempContact = [...contacto];
        tempContact[index].state = !tempContact[index].state;
        setContacto(tempContact);
    }
    function addContact(contact) {
        const tempContact=[...contacto];
        tempContact.push(contact);
        setContacto(tempContact);
    }
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Contacts: </h5>
                    </div>
                    <ContactForm add={addContact}></ContactForm>
                </div>
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Phone</th>
                                <th scope='col'>Email</th>
                                <th scope='col'>State</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* for or map to list*/}
                            {contacto.map((contacto, index) => {
                                return (
                                    <Contact key={index} contact={contacto} updatestate={updateStateContact} deleteContact={deleteContact}></Contact>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ContactComponent;
