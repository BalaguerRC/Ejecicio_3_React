import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'

const Contact = ({ contact, updatestate, deleteContact }) => {
    useEffect(() => {
        console.log("contact task")
        return () => {
            //
            console.log(`Contact: ${contact.name} is goint to unmount`)
        };
    }, [contact]);

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.name}</span>
            </th>
            <td className='align-middle'>
                <span >{contact.phone}</span>
            </td>
            <td className='align-middle'>
                <span >{contact.email}</span>
            </td>
            <td className='align-middle'>
                {contact.state ? (<p style={{background: 'green'}} onClick={()=>updatestate(contact)}>on</p>):(<p style={{background: 'tomato'}} onClick={()=>updatestate(contact)}>off</p>)}
                <button onClick={()=>deleteContact(contact)}>Delete</button>
            </td>
        </tr>
    )
}

Contact.propTypes = {
    contact: PropTypes.instanceOf(Contacto).isRequired,
    updatestate: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired
}

export default Contact
