import React from 'react'
import {Form, Button, Container, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import './TextAreaPage.css'


const TextareaPage = () => {
    return (
        <Container>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 style={{fontWeight:"bold"}} className="pt-3">Journaling</h1>
                    <p className="lead">This is a place you can feel safe and log in anything that happened today.
                        Make sure you put everything and don't miss out any details. After you do that you can check
                        our scanners and we will show more of your emotions.</p>
                </div>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={15} />
                </Form.Group>

                <Button type="submit" variant="outline-info">Log</Button>{' '}
                <Button variant="outline-secondary">
                    <Link variant="outline-secondary" className="link colorgray" to="/data">Data</Link>
                </Button>{' '}
                <Button variant="outline-primary" >
                    <Link className="link" to="/journal/previous">Previous Entries</Link>
                </Button>

            </Form>
        </Container>

    )
}

export default TextareaPage;