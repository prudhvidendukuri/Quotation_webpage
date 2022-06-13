var quoteText = document.getElementById('quoteText');
var quotation = document.getElementById('quotation');
var nextQuote = document.getElementById('nextQuote');
var previousQuote = document.getElementById('previousQuote');
var twitter = document.getElementById('twitter');
var telegram = document.getElementById('telegram');
var quote_url = "https://type.fit/api/quotes";
var quote = [];
var random = 0;
var a,b;

async function quote_fetch()
{
    try{
        const response = await fetch(quote_url);
        quote = await response.json();
        
        
    }
    catch(error){
        console.log(error);
    }
}
function clickMe(){
    random = Math.floor(Math.random()*quote.length);
    
    a = quote[random].text;
    b = quote[random].author;
    if(a === null){
        alert("Reload the Page");
    }else{
        quotation.innerText = quote[random].text;
    }
    if(b === null){
        quoteText.innerText = "Unknown";
    }else{
        quoteText.innerText = quote[random].author;
    }
    
    
}

quote_fetch();

nextQuote.addEventListener('click',clickMe);

twitter.addEventListener('click',function(){
    window.open(`https://twitter.com/intent/tweet?text=${quote[random].text} - ${quote[random].author}`,'_blank')
})
telegram.addEventListener('click',function(){
    window.open(`https://t.me/share/url?url={http://127.0.0.1:5500/index.html}&text=${quote[random].text} - ${quote[random].author}`)
})




