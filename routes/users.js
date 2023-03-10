var express = require('express');
var router = express.Router();

let users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Jane'},
  {id: 3, name: 'Bob'},
  {id: 4, name: 'Alice'},
  {id: 5, name: 'Harry'}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json('users');      // skickar users-arrayen som svar
});

router.post('/', function(req, res, next) {

  let newUser = req.body;   //hämtar värdet som är sparat i body och sparar det objektet i newUser
  newUser.id = users.length + 1;
  users.push(newUser);
  console.log(newUser);

  res.json({users});           // skickar users-arrayen som svar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
});

router.get('/test', function(req, res, next){
  res.send('testroutern');
}); 

module.exports = router;
