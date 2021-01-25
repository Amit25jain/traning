import React from 'react'
import Form from 'react-bootstrap/Form';
import { Col, Container, Button } from 'react-bootstrap/';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

class Contacts extends React.Component {
    render() {
        return (
            <>

               


                <Container className="mt-5 p-5 border border-dark">
                    <Breadcrumb>
                        <Breadcrumb.Item to="/">Home</Breadcrumb.Item>
                       
                        <Breadcrumb.Item >Contact</Breadcrumb.Item>
                    </Breadcrumb>
                    <Form>
                        <Form.Row className="">
                            <Col>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" />
                            </Col>

                        </Form.Row>
                        <Form.Row className="mt-2">
                            <Col>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" />
                            </Col>

                        </Form.Row>
                        <Form.Row className="mt-2">
                            <Col>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" />
                            </Col>

                        </Form.Row>
                        <Form.Row className="mt-2">
                            <Col>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" />
                            </Col>

                        </Form.Row>
                        <Form.Row className="mt-2">
                            <Col>
                                <Button className="btn btn-danger" name="submit">Submit</Button>
                            </Col>

                        </Form.Row>
                    </Form>
                </Container>
            </>
        )
    }
};
export default Contacts;