import React from 'react'
import {Form, Button, Container, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import './TextAreaPage.css'


const TextareaPage = () => {
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Card>
                            <Card.Body>Talk about how you've been doing today!!</Card.Body>
                        </Card>
                    <Form.Control as="textarea" rows={26} />
                </Form.Group>

                <Button variant="outline-info">Log</Button>{' '}
                <Button variant="outline-secondary">Data</Button>{' '}
                <Button variant="outline-primary" >
                    <Link className="link" to="/journal/previous">Previous Entries</Link>
                </Button>

            </Form>
        </Container>

    )
}


export default TextareaPage;