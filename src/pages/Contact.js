import React from 'react'
import Form from 'react-bootstrap/Form';
import { Col, Container, Button } from 'react-bootstrap/';
import img from '../images/full.jpg';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Contacts from './Contacts';
class Contact extends React.Component {
    render() {
        return (
            <>

                <img src={img} style={{ height: '250px', width: '100%' }} />

                <Contacts />
            </>
        )
    }
};
export default Contact;