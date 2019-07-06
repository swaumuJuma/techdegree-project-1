/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Defining The pool of quotes
quotes = [
    {
        "quote": "The best preparation for tomorrow is doing your best today.",
        "source": "H. Jackson Brown, Jr.",
        "tags": ['life', 'success', 'inspirational']
    },
    {
        "quote": "Friendship is certainly the finest balm for the pangs of disappointed love.",
        "source": "Jane Austen",
        "citation": "A history of Eastern Art",
        "year": 1992,
        "tags": ['life']
    },
    {
        "quote": "Work is much more fun than fun.",
        "source": "Noel Coward",
        "tags": ['business', 'work']
    },
    {
        "quote": "Cure for an obsession: get another one.",
        "source": "Mason Cooley"
    },
    {
        "quote": "Fishes live in the sea, as men do a-land; the great ones eat up the little ones.",
        "source": "William Shakespeare"
    },
    {
        "quote": "There is only one happiness in this life, to love and be loved.",
        "source": "George Sand"
    },
];

//Defining Pool of Background colors
color = [
    'rgb(48, 157, 125)', 'rgb(114, 167, 173)', 'rgb(196, 97, 104)',
    'rgb(8, 70, 101)', 'rgb(181, 134, 33)', 'rgb(62, 144, 123)',
    'rgb(20, 146, 249)', 'rgb(27, 131, 198)'
];


//Automatically print the next quote every 20 seconds
function changeQuote() {
    var nIntervId;
    nIntervId = setInterval(printQuote, 20000);
}

//Randomly selecting quote from the pool of my best quotes
function getRandomQuote(){
    randomIndex = Math.floor( (Math.random() * quotes.length));
    return quotes[randomIndex]
}

//Randomly creating background color
function randomRgb() {
    return Math.floor(Math.random() * color.length );
}

function backgroundColor() {
    rgbColor = color[randomRgb()];
    return rgbColor;
}

//the function to create and format the quote
function printQuote(){
    randomQuote = getRandomQuote();
    html = '';
    html += '<p class="quote">' + randomQuote.quote + '</p>';
    html += '<p class="source">' + randomQuote.source;
    if( randomQuote.citation ){
        html += '<span class="citation">' + randomQuote.citation + '</span>';
    }
    if( randomQuote.year ){
        html += '<span class="year">' + randomQuote.year + '</span>';
    }
    if( randomQuote.tags ){
        html += '<p class="tag">' + randomQuote.tags + '</p>';
    }
    html += '</p>';
    document.getElementById("quote-box").innerHTML = html;
    document.body.style.backgroundColor = backgroundColor();
}


//adding Event Listener for showing next quote
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
