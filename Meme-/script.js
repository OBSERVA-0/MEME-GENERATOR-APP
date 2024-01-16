function clearAll(){
  const meme = document.querySelector(".meme-content");
  const joke = document.querySelector(".joke-content");
  const quote = document.querySelector(".quote-content");
  const riddle = document.querySelector(".riddle-content");

  meme.innerHTML= "";
  joke.innerHTML= "";
  quote.innerHTML= "";
  riddle.innerHTML= "";
}

function showMeme(){
  const randomMemeUrl = getRandomData("memes");
  const memeGenerator = document.querySelector(".meme-content");
  const newMeme = document.createElement("img");
  newMeme.setAttribute("src",randomMemeUrl);

  clearAll();

  memeGenerator.appendChild(newMeme);

}

function showJoke(){
  const randomJokesMade = getRandomData("jokes");
  const jokecontent = document.querySelector(".joke-content");
  const newJoke= document.createElement("p");
  newJoke.textContent=randomJokesMade;

  clearAll();
  jokecontent.appendChild(randomJokesMade);
  
}

function showQuote (){
  const randomQouteSaid = getRandomData("quotes");
  const quoteContent = document.querySelector(".quote-content");
  const newQuote= document.createElement("p");
  const quoteAuthor= document.createElement("p");
  newQuote.textContent= randomQouteSaid.quote;
  quoteAuthor.textContent="- "+ randomQouteSaid.author;

  clearAll();

  quoteContent.appendChild(newQuote);
  quoteContent.appendChild(quoteAuthor);
}

function showRiddle(){

}