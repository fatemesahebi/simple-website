import {Col, Row,Form,Button} from "react-bootstrap";
import './contactus-styles.css'
import mapImage from './../../image/event-map.jpg'
import {useEffect} from "react";

function ContactUs({page,setPage}){
    useEffect(()=>{
        setPage(2)
    },[])
    return(
        <div className={'contactUsContainer'}>
            <div >
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label className={'formLabel'}>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label className={'formLabel'}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label className={'formLabel'}>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label className={'formLabel'}>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label className={'formLabel'}>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label className={'formLabel'}>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label className={'formLabel'}>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check className={'formLabel'} type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="outline-warning" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div>
                <img src={mapImage} alt={'location'}/>
            </div>
        </div>
    )
}
export default ContactUs