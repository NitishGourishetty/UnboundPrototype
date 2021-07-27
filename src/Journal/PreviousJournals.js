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
                    <Card.Title>Summer Ughh</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Entry 3</Card.Subtitle>
                    <Card.Text>
                       Summer has been terrible recently. I had to take my whole test and I haven't been having the greatest time.
                        I need a break but my family doesn't let me have one and it makes me really sad. I don't know what to do,
                        but coding can make me happy!
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container>
    )

}

export default PreviousJournals;


