import React from 'react'
import { Card } from 'react-bootstrap' 
import { CardGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'




export default function About() {
  return (
    <div className='home'>

<br></br>
    <br></br>
  <CardGroup>
  <Card >
   
    <Card.Body>
      
      <Card.Text>
      <h2>FOLLOW US !!</h2><br></br>
      <Button variant="link">Facebook</Button>
      <Button variant="link">Instagram</Button>
      <Button variant="link">Twitter</Button>
      <Button variant="link">Quora</Button>

      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
   
    <Card.Body>
     
      <Card.Text><h2>CONTACT US</h2><br></br>
        email : contact@tcs_inventory.co.in <br></br>
        phone : +91 18042032
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
   
    <Card.Body>
     
      <Card.Text>
      <h2>REACH OUT</h2><br></br>
        Address : TCS pvt LT,
        <br></br>
        building 48 , business arena,
        <br></br>
        orient mall road <br></br>
      Banglore - 400102
      
      </Card.Text>
    </Card.Body>
   
  </Card>
</CardGroup>

    </div>
  )
}