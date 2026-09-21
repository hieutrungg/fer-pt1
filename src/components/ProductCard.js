import React from 'react'
import { Button, Card, Carousel, FormControl, InputGroup } from 'react-bootstrap';

export default function ProductCard() {
    return (
        <div className="bg-dark text-white" style={{ paddingBottom: '100px' }}>
            
            <div className="container mt-5">
                <h1>PRODUCTS</h1>
                <div className="d-flex gap-4">
                    
                   
                    <Card style={{ width: '19rem' }}>
                        <Card.Img src="Images/nam3.jpg" />
                        <Card.Body>
                            <Card.Title>Jacket</Card.Title>
                            <Card.Text>
                                650.000 VND
                            </Card.Text>
                            <Card.Text>
                                Available
                            </Card.Text>
                            <div className="text-center w-100">
                                <Button variant="success" className="w-75">Add to cart</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '19rem' }}>
                        <Card.Img src="Images/nam2.jpg" />
                        <Card.Body>
                            <Card.Title>Men's hoodie</Card.Title>
                            <Card.Text>
                                Available
                            </Card.Text>
                            <Card.Text>
                               
                            </Card.Text>
                            <div className="text-center w-100">
                                <Button variant="success" className="w-75">Add to cart</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '19rem' }}>
                        <Card.Img src="Images/nam2.jpg" />
                        <Card.Body>
                            <Card.Title>Men's hoodie</Card.Title>
                            <Card.Text>
                                Available
                            </Card.Text>
                            <Card.Text>
                               
                            </Card.Text>
                            <div className="text-center w-100">
                                <Button variant="success" className="w-75">Add to cart</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    
                    <Card style={{ width: '19rem' }}>
                        <Card.Img src="Images/nam3.jpg" />
                        <Card.Body>
                            <Card.Title>Jacket</Card.Title>
                            <Card.Text>
                                650.000 VND
                            </Card.Text>
                            <Card.Text>
                                Available
                            </Card.Text>
                            <div className="text-center w-100">
                                <Button variant="success" className="w-75">Add to cart</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '19rem' }}>
                        <Card.Img src="Images/nam2.jpg" />
                        <Card.Body>
                            <Card.Title>Men's hoodie</Card.Title>
                            <Card.Text>
                                Available
                            </Card.Text>
                            <Card.Text>
                               
                            </Card.Text>
                            <div className="text-center w-100">
                                <Button variant="success" className="w-75">Add to cart</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '19rem' }}>
                        <Card.Img src="Images/nam2.jpg" />
                        <Card.Body>
                            <Card.Title>Men's hoodie</Card.Title>
                            <Card.Text>
                                Available
                            </Card.Text>
                            <Card.Text>
                               
                            </Card.Text>
                            <div className="text-center w-100">
                                <Button variant="success" className="w-75">Add to cart</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
        </div>
    )
}
