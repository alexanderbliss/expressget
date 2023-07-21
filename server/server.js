let express = require('express');
let app = express();
const port = 5001
app.use(express.json())

const quoteList = require('./quoteList')
app.use(express.static('server/public'));

//when we visit localhost:5001/quotes
//in our browser, express will call this function
app.get('/quotes', function(req, res){
    console.log('Request for /quotes was made');

    //send back the list of quotes
    //so we can see it in our browser
    res.send(quoteList)
})

app.post('/quotes', (req,res) => {
    console.log('request.', req);
    console.log('get a POST request.', req.body);

    let quote = req.body
    quoteList.push(quote)
    res.sendStatus(201);
})


app.listen(port, function() { 
    console.log('listening on port', port);
})

// http://localhost:5001/quotes
//  this is called | Route | Path | URL
//
// 4 types of routes
// GET
// POST
// PUT
// DELETE
// CRUD - Create, Read, Update, Delete


// status codes 
// 200 Ok - everthing worked as expected.
// 201 Created - a record was created without issue.
// 400 Bad Request - something went wrong in your route.
// 404 Not found - you probobly have the wrong address
// 500 Server Error - something bad happended on the server