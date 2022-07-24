import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup style={{height:"500px"}}>
      <Card>
        <Card.Img variant="top" src="https://www.cnet.com/a/img/resize/ea47604312755da46dbf0dc63211d344ca3afe4a/2020/03/18/acf991c8-b2e3-489c-be87-d5425fe3ed53/screen-shot-2020-03-18-at-3-02-44-pm.png?auto=webp&fit=crop&height=675&width=1200" />
       
        <Card.Body>
          <Card.Title>Tanay Sahu : Gym</Card.Title>
          <Card.Text>
            I am a complete gym freak and love to work out at least once a day but due to rainy season I couldn't go to the gym so I had issued some of the home gymming equipments from here and they did their job I was able to have the experience of a great workout while being in my room
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="https://media.istockphoto.com/photos/musical-instruments-picture-id894058154?k=20&m=894058154&s=170667a&w=0&h=xAcy32UYrnS-IOtrp8HbFjofk8ivjDJHmrROyroLzAU=" />
        <Card.Body>
          <Card.Title>Anirudh Oza : Music</Card.Title>
          <Card.Text>
           I am happy to state that I have learnt guitar to a much advanced level and my whole training was on the guitar issued from this service I highly recommend anyone trying to get into music to give this service a shot
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.pngitem.com/pimgs/m/224-2245184_transparent-sports-equipment-png-physical-activity-and-sports.png" />
        <Card.Body>
          <Card.Title>Manav Desai : Sports</Card.Title>
          <Card.Text>
            I issue cricket equipments on a daily basis our team has fixed timings of playing and the staff is good enough to provide us the best available equipments and we enjoy a lot playing with them even the staff is very friendly
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
  );
}

export default GroupExample;