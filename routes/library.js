var express = require('express');
var router = express.Router();

let books =[
    {id: 1, title: "Napalm", author: "Frida Moisto", borrowed: false},
    {id: 1, title: "Spindeln", author: "Lars Kepler", borrowed: false},
    {id: 1, title: "Midnattsdåd", author: "Nora Roberts", borrowed: false},
    {id: 1, title: "Lazarus", author: "Lars Kepler", borrowed: false},
    {id: 1, title: "Pepparkakshuset", author: "Carin Gerhardsen", borrowed: false},
]

/* GET books listing. */
router.get('/', function(req, res, next) {
  res.json('books');
});

router.post('/', function(req, res, next) {

    let newBook = req.body;   //hämtar värdet som är sparat i body och sparar det objektet i newBook
    console.log(req.body);
    newBook.id = books.length + 1;
    books.push(newBook);
    console.log(newBook);  
    res.json(books);           // skickar books-arrayen som svar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  });

router.get('/:bookId', function(req, res){   // next måste inte vara med, däremot reqest och response
  let bookId = req.params.bookId;
  console.log(bookId);

  let findBook = books.find(books => books.id == bookId);
  res.json(findBook);
});

router.post('/borrowed', function(req, res, next) {
    console.log("body", req.body);
    let bookId = req.body.bookId;
    console.log(bookId);

    let borrowedBook = books.find(books => books.id == bookId)
    borrowedBook.borrowed =!borrowedBook.borrowed;
    console.log("book borrowed", borrowedBook);
    console.log("all books", books);
    res.json(books);
});

module.exports = router;