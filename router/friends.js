const express = require('express');

const router = express.Router();

let friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{

  // Update the code here
  res.send(JSON.stringify(friends,null,4))

//   res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",function(req,res){
  // Update the code here
  const email = req.params.email;
  res.send(friends[email])

//   res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// POST request: Add a new friend
router.post("/",(req,res)=>{
    if(req.body.email){
        friends[req.body.email]={
            "firstName" : req.body.firstName,
            "lastName": req.body.lastName,
            "BOD": req.body.BOD
        }
    }
    res.send("The user" + ( ' ') + (req.body.firstName) + "has been added!")
  // Update the code here
//   res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  // Update the code here
  const email = req.params.email;
  let friend = friends[email]
  if(friend){
      let DOB = req.body.DOB;
      let lastName = req.body.lastName;
      let firstName = req.body.firstName;

      if(DOB){
          friend["DOB"] = DOB
      }
      if(lastName){
          friend["lastName"] = lastName
      }
      if(firstName){
          friend["firsName"] = firstName
      }

      friends[email] = friend;
      res.send(`Friend with email ${email} updated!`)

  }
  else{
      res.send("unable to update & find the friend!")
  }
//   res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  // Update the code here
  const email = req.params.email;
  if(email){
      delete friends[email]
  }
  res.send(`Friend with the email ${email} deleted!`)//This line is to be replaced with actual return value
});

module.exports=router;
