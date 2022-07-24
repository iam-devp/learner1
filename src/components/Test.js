import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (

    <CardGroup style={{height:"500px"}}>
      <Card > 
        <Card.Img variant="top" src="https://www.thoughtco.com/thmb/OBQGSyiW1iC4rjRBGiUBR8cf6LA=/2005x1495/filters:no_upscale():max_bytes(150000):strip_icc()/Laboratoryglassware-5b57088f4cedfd00373a8eb5.jpg" />
        <Card.Body>
          <Card.Title>Kartik Jain : Lab</Card.Title>
          <Card.Text>
            I had issued five test tubes for an experiment and some titration solution and was successfully able to conduct my experiment and the service was pretty good the staff was also very friendly and they even raised zero objections for my late submission
          </Card.Text>
        </Card.Body>
        </Card>
      <Card>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/8169sLzD-jL._SL1500_.jpg" />
        <Card.Body>
          <Card.Title>Ayush Rao : Auto</Card.Title>
          <Card.Text>
           I had issued an electric bicycle for an entire day the product was very good and was almost brand-new it's battery life was also very good overall I had a great experience and would recommend this service to everyone who is reading this review.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-164230611.jpg" />
        <Card.Body>
          <Card.Title>Tanisha Aggarwal : Gadgets</Card.Title>
          <Card.Text>
            This service saved me a big time I had an important deadline to meet but my laptop ran out of battery and my charger was also broken I couldn't find any other means so I issued a laptop and was able to submit the assignment in time thanks a lot to the supportive staff
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
 
  );
}

export default GroupExample;