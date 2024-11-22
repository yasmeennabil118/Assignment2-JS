var quotes = [
    {
        author: 'Oscar Wilde',
        quote: 'Be yourself; everyone else is already taken.'
    },
    {
        author: 'Frank Zappa',
        quote: 'So many books, so little time.'
    },
    {
        author: 'Mae West',
        quote: 'You only live once, but if you do it right, once is enough.'
    },
    {
        author: 'Mahatma Gandhi',
        quote: 'Be the change that you wish to see in the world.'
    },
    {
        author: 'Mark Twain',
        quote: 'If you tell the truth, you don\'t have to remember anything.'
    },
    {
        author: 'Elbert Hubbard',
        quote: 'A friend is someone who knows all about you and still loves you.'
    },
    {
        author: 'Allen Saunders',
        quote: 'Life is what happens to us while we are making other plans.'
    },
    {
        author: 'Thomas A. Edison',
        quote: 'I have not failed. I\'ve just found 10,000 ways that won\'t work.'
    },
    {
        author: 'Stephen Chbosky',
        quote: 'We accept the love we think we deserve.'
    },
    {
        author: 'George Eliot',
        quote: 'It is never too late to be what you might have been.'
    }
]

function newQuote() {
    var random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = `"${quotes[random].quote}"`;
    document.getElementById("author").innerHTML = `--${quotes[random].author}`;
}