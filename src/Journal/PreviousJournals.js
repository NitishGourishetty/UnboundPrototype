import React from "react";



import './PreviousJournals.css'
import {Container, Card, Col, Row} from "react-bootstrap";


const PreviousJournals = () => {
    return (
        <Container>
                {/*Make card seperate element*/}
                <Card style={{ width: '80rem' }} className="mt-3">
                    <Card.Body>
                        <Card.Title>School</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Entry 1</Card.Subtitle>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Tortor consequat id porta nibh venenatis cras sed felis eget. Nullam vehicula ipsum a arcu cursus vitae congue. Vel eros donec ac odio tempor orci dapibus ultrices. Dui accumsan sit amet nulla. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Proin nibh nisl condimentum id. Sed augue lacus viverra vitae congue. Sed elementum tempus egestas sed sed risus pretium. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Venenatis a condimentum vitae sapien pellentesque
                            habitant morbi tristique. Adipiscing bibendum est ultricies integer. Interdum velit laoreet id donec.
                        </Card.Text>
                    </Card.Body>
                </Card>

            <Card style={{ width: '80rem' }} className="mt-3">
                <Card.Body>
                    <Card.Title>Life At Home</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Entry 2</Card.Subtitle>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Tortor consequat id porta nibh venenatis cras sed felis eget. Nullam vehicula ipsum a arcu cursus vitae congue. Vel eros donec ac odio tempor orci dapibus ultrices. Dui accumsan sit amet nulla. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Proin nibh nisl condimentum id. Sed augue lacus viverra vitae congue. Sed elementum tempus egestas sed sed risus pretium. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Venenatis a condimentum vitae sapien pellentesque habitant
                        morbi tristique. Adipiscing bibendum est ultricies integer. Interdum velit laoreet id donec.
                    </Card.Text>

                </Card.Body>
            </Card>

            <Card style={{ width: '80rem' }} className="mt-3">
                <Card.Body>
                    <Card.Title>Summer!!!</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Entry 3</Card.Subtitle>
                    <Card.Text>
                        Summer has been going really good and I
                        am having a great time. Although I had to grind out my ACT,
                        I really had time to enjoy after and I am reaping the benefits of
                        having free time. I am so excited for school to start in the future as well.
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container>
    )

}

export default PreviousJournals;


