import React from 'react'

function Newsletter() {
  return (
    <form class="form-inline" action="/action_page.php" style={{margin:'100px'} }>
 <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" />
  </div><br></br>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email"/>
  </div>
  <div class="form-group"><br></br>
    <label for="pwd">Room Number:</label>
    <input type="text" class="form-control" id="pwd"/>
  </div>
  <div class="checkbox"><br></br>
    <label><input type="checkbox"/> Subscribe</label>
  </div><br></br>
  <button type="submit" class="btn btn-default">Submit</button>
</form>
  )
}

export default Newsletter