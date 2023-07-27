console.log('script sourced.');

function getQuotes(){
    axios.get('/quotes').then((response) => {
        console.log("success", response.data);
        let quotesFromServer = response.data
        return renderToDom(quotesFromServer)
// good indication of end of route })   
 }).catch((error) => {
    console.log(error);
    alert("Something Went Wrong")
 }) 
}
// getQuotes()

function renderToDom(quotes){
    let ouputList = document.querySelector('#output')
    ouputList.innerHTML = ''

    for(let quote of quotes) {
        ouputList.innerHTML +=`
            <p>${quote.text}  -  ${quote.author} </p>
        `
    }
}


function submitForm(event){
    event.preventDefault();
    let quote = document.querySelector('#quoteInput').value
    let author = document.querySelector('#authorInput').value
    let quoteToAdd = {
        text: quote,
        author:author
    }
    console.log(quoteToAdd);

    axios.post('/quotes' , quoteToAdd).then((response) => {
        console.log(response);
        document.querySelector('#quoteInput').value = ''
        document.querySelector('#authorInput').value = ''
        getQuotes()
    }).catch((error) => {
        console.log(error);
        alert('Something Went Wrong')
    })
}


let tempratures = [-2, 5, 90 , 57 , 31 , 32, 65]

let shoes = [
    { color: 'red', size: 8, type: 'running' },
    { color: 'gray', size: 7, type: 'sandle' },
    { color: 'yellow', size: 10, type: 'boot' },
    { color: 'green', size: 9, type: 'running' },
];


function freezingTemps(temp){ 
    // only keeps temps below 32 degrees
    return temp < 32
}

let belowFreezingTemps = tempratures.filter(freezingTemps)
// console.log(belowFreezingTemps);
// console.log(tempratures);

function runningShoes(shoe){
    return shoe.type === 'running'
}

console.log(shoes);
let runningShoesList = shoes.filter(runningShoes)
console.log('list' , runningShoesList);