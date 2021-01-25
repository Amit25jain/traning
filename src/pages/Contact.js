import React from 'react';
import img from '../images/full.jpg';
import Contacts from './Contacts';
class Contact extends React.Component {
    render() {
        return (
            <>

                <img src={img} alt="description of image" aria-hidden="true" style={{ height: '250px', width: '100%' }} />

                <Contacts />
            </>
        )
    }
};
export default Contact;