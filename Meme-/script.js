/* eslint-disable no-unused-vars */
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
  jokecontent.appendChild(newJoke);
  
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
  const randomRiddle = getRandomData("riddles");

  const riddleContainer = document.querySelector(".riddle-content");

  const newRiddleText = document.createElement("p");
  const newRiddleAnswer = document.createElement("p");

  newRiddleText.textContent = randomRiddle.question;
  newRiddleAnswer.textContent = "- " + randomRiddle.answer;
  newRiddleAnswer.setAttribute("id", "riddle-answer");

  clearAll();

  newRiddleAnswer.hidden = true;

  riddleContainer.appendChild(newRiddleText);
  riddleContainer.appendChild(newRiddleAnswer);
}

function revealAnswers() {
  const riddleContent = document.querySelector(".riddle-content");
  const riddle = riddleContent.querySelector("p");
  const riddleAnswer = document.querySelector("#riddle-answer");

  if (riddle && riddleAnswer.hidden) {
    riddleAnswer.hidden = false;
  } else if (riddle && riddleAnswer) {
    alert("The riddle answer is already exposed!");
  } else {
    alert("There is no riddle to show the answer for!");
  }
}


function getRandomData(type) {
  return data[type][rn(data[type].length)];
}



const memes = [
  "https://i.redd.it/a0v87gwzoge61.jpg",
  "https://i.redd.it/q29egav34ee61.jpg",
  "https://i.redd.it/iij16swxjie61.jpg",
  "https://i.redd.it/vek7dm2hrge61.jpg",
  "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png",
  "https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png",
  "https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg",
  "https://code-love.com/wp-content/uploads/2019/03/download.jpeg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg",
];

const jokes = [
  "This statement",
  "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”",
  "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
  "All programmers are playwrights, and all computers are lousy actors.",
  "Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.",
  "The generation of random numbers is too important to be left to chance.",
  "Debugging: Removing the needles from the haystack.",
  "“Debugging” is like being the detective in a crime drama where you are also the murderer.",
  "There are two ways to write error-free programs; only the third one works.",
  "The best thing about a Boolean is even if you are wrong, you are only off by a bit.",
"Why don't scientists trust atoms? Because they make up everything!",
"What did one ocean say to the other ocean? Nothing, they just waved.",
"Why did the scarecrow win an award? Because he was outstanding in his field!",
"How do you organize a space party? You planet!",
"Why don't skeletons fight each other? They don't have the guts.",
"What's orange and sounds like a parrot? A carrot!",
"Why did the bicycle fall over? Because it was two-tired.",
"Why did the tomato turn red? Because it saw the salad dressing!",
"What's a vampire's favorite fruit? A blood orange.",
"Why did the scarecrow win an award? Because he was outstanding in his field!",
"Did you hear about the claustrophobic astronaut? He just needed a little space.",
"I told my wife she should embrace her mistakes. She gave me a hug.",
"Why don't scientists trust atoms? Because they make up everything!",
"What did one ocean say to the other ocean? Nothing, they just waved.",
"Why did the scarecrow win an award? Because he was outstanding in his field!",
"How do you organize a space party? You planet!",
"Why don't skeletons fight each other? They don't have the guts.",
"What's orange and sounds like a parrot? A carrot!",
"Why did the bicycle fall over? Because it was two-tired.",
"What's a vampire's favorite fruit? A blood orange.",
"How does a penguin build its house? Igloos it together.",
"Why did the math book look sad? Because it had too many problems.",
"Why did the chicken go to the seance? To talk to the other side.",
"What's brown and sticky? A stick.",
"Why don't skeletons fight each other? They don't have the guts.",
"Why don't scientists trust atoms? Because they make up everything!",
"I used to play piano by ear, but now I use my hands and fingers.",
"Why did the tomato turn red? Because it saw the salad dressing!",
"What's a vampire's favorite fruit? A blood orange.",
"Why did the scarecrow win an award? Because he was outstanding in his field!",
"Did you hear about the claustrophobic astronaut? He just needed a little space.",
"I told my wife she should embrace her mistakes. She gave me a hug.",
"Why did the computer go to therapy? It had too many bytes of emotional baggage.",
];

const quotes = [
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    quote:
      "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    author: "Rick Cook",
  },
  {
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
    author: "John Woods",
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote: "Truth can only be found in one place: the code.",
    author: "Robert C. Martin",
  },
  {
    quote:
      "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
    author: "Larry Niven",
  },
  {
    quote:
      "You've baked a really lovely cake, but then you've used dog shit for frosting.",
    author: "Steve Jobs",
  },
  {
    quote:
      "A language that doesn't affect the way you think about programming is not worth knowing.",
    author: "Alan J. Perlis",
  },
  {
    quote:
      "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay",
  },
  {
    quote:
      "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.",
    author: "Joseph Weizenbaum",
  },
  {
    quote:
      "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
    author: "Brian Kernighan",
  },
  {
    quote:
      "No matter which field of work you want to go in, it is of great importance to learn at least one programming language.",
    author: "Ram Ray",
  },
    {
      quote:
      "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    },

    {
      quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchill",
    },

      {quote:
      "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
      },

        {
          quote:
      "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
        },

        {
          quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
        },

      {
        quote:
      "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
      },


      {
         quote:
      "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
      },

      {
        quote:
      "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi",
      },

     {
      quote:
      "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
     },

     {
      quote:
      "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
     },
     {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston S. Churchill"
    },
    
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    
    {
      quote: "The only place where success comes before work is in the dictionary.",
      author: "Vidal Sassoon"
    },
    
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    
    {
      quote: "It's not whether you get knocked down, it's whether you get up.",
      author: "Vince Lombardi"
    },
    
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau"
    },
    
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    
    {
      quote: "Your life does not get better by chance, it gets better by change.",
      author: "Jim Rohn"
    },
    
    {
      quote: "Success is stumbling from failure to failure with no loss of enthusiasm.",
      author: "Winston S. Churchill"
    },
    
    {
      quote: "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson"
    },
    
    {
      quote: "In three words I can sum up everything I've learned about life: It goes on.",
      author: "Robert Frost"
    },
    
    {
      quote: "Do not wait to strike till the iron is hot, but make it hot by striking.",
      author: "William Butler Yeats"
    },
    
    {
      quote: "The future depends on what you do today.",
      author: "Mahatma Gandhi"
    },
    
    {
      quote: "The only way to achieve the impossible is to believe it is possible.",
      author: "Charles Kingsleigh (Alice in Wonderland)"
    },
    
    {
      quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson"
    },
    
    {
      quote: "It's not the load that breaks you down, it's the way you carry it.",
      author: "Lou Holtz"
    },
    {
      quote: "To infinity and beyond!",
      author: "Buzz Lightyear (Toy Story)"
    },
    
    {
      quote: "I'm not a hero. I'm a high-functioning sociopath.",
      author: "Sherlock Holmes (Sherlock)"
    },
    
    {
      quote: "Ohana means family, and family means no one gets left behind or forgotten.",
      author: "Stitch (Lilo & Stitch)"
    },
    
    {
      quote: "Why so serious?",
      author: "The Joker (The Dark Knight)"
    },
    
    {
      quote: "Adventure is out there!",
      author: "Ellie (Up)"
    },
    
    {
      quote: "It does not do to dwell on dreams and forget to live.",
      author: "Albus Dumbledore (Harry Potter)"
    },
    
    {
      quote: "I'm not bad. I'm just drawn that way.",
      author: "Jessica Rabbit (Who Framed Roger Rabbit)"
    },
    
    {
      quote: "It's not easy being green.",
      author: "Kermit the Frog (The Muppet Show)"
    },
    
    {
      quote: "Just keep swimming.",
      author: "Dory (Finding Nemo)"
    },
    
    {
      quote: "I am Groot.",
      author: "Groot (Guardians of the Galaxy)"
    },
    
    {
      quote: "To the Batmobile!",
      author: "Batman (Batman TV series)"
    },
    
    {
      quote: "Oh, bother.",
      author: "Winnie the Pooh"
    },
    
    {
      quote: "It's showtime!",
      author: "Beetlejuice (Beetlejuice)"
    },
    
    {
      quote: "I'm not a hero. I'm a high-functioning sociopath.",
      author: "Sherlock Holmes (Sherlock)"
    },
    
    {
      quote: "I am Iron Man.",
      author: "Tony Stark (Iron Man)"
    },
    
    {
      quote: "Why do we fall, sir? So that we can learn to pick ourselves up.",
      author: "Alfred Pennyworth (Batman Begins)"
    },
    
    {
      quote: "To the stars who listen and the dreams that are answered.",
      author: "Rhysand (A Court of Mist and Fury)"
    },
    
    {
      quote: "It's not who I am underneath, but what I do that defines me.",
      author: "Batman (Batman Begins)"
    },
    
    {
      quote: "Squirrel!",
      author: "Dug (Up)"
    },
    
    {
      quote: "I'm not a hero. I'm a high-functioning sociopath.",
      author: "Sherlock Holmes (Sherlock)"
    },
    
    
];

const riddles = [
  {
    question:
      "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "An echo",
  },
  {
    question:
      "You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ",
    answer: "A Candle",
  },
  {
    question:
      "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ",
    answer: "A Map",
  },
  {
    question:
      "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?",
    answer: 'The letter "R"',
  },
  {
    question:
      "You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?",
    answer: "All the people were married",
  },
  {
    question:
      "What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?",
    answer: "Heroine",
  },
  {
    question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "An echo"
  },
  {
    question: "The more you take, the more you leave behind. What am I?",
    answer: "Footsteps"
  },
  {
    question: "I'm tall when I'm young, and short when I'm old. What am I?",
    answer: "A candle"
  },
  {
    question: "I'm not alive, but I can grow; I don't have lungs, but I need air. What am I?",
    answer: "A fire"
  },
  {
    question: "I can fly without wings. I can cry without eyes. Wherever I go, darkness follows me. What am I?",
    answer: "A cloud"
  },
  {
    question: "The more you have of it, the less you see. What is it?",
    answer: "Darkness"
  },
  {
    question: "What has keys but can't open locks?",
    answer: "A piano"
  },
  {
    question: "I'm taken from a mine, and shut up in a wooden case, from which I'm never released, and yet I am used by almost every person. What am I?",
    answer: "Pencil lead"
  },
  {
    question: "I'm always hungry. I must always be fed. The finger I touch will soon turn red. What am I?",
    answer: "Fire"
  },
  {
    question: "What has a heart that doesn't beat?",
    answer: "Artichoke"
  },
  {
    question: "I have keys but open no locks. I have space but no room. You can enter, but you can't go inside. What am I?",
    answer: "A keyboard"
  },
  {
    question: "The more you take, the more you leave behind. What am I?",
    answer: "Footsteps"
  },
  {
    question: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
    answer: "A map"
  },
  {
    question: "What has a heart that doesn't beat?",
    answer: "Artichoke"
  },
  {
    question: "What has a neck but no head?",
    answer: "A bottle"
  },
  {
    question: "The person who makes it, sells it. The person who buys it never uses it. What is it?",
    answer: "A coffin"
  },
  {
    question: "What has a face and two hands but no arms or legs?",
    answer: "A clock"
  },
  {
    question: "The more you take, the more you leave behind. What am I?",
    answer: "Footsteps"
  },
  {
    question: "What has an endless supply of letters but starts empty?",
    answer: "Mailbox"
  },
  {
    question: "I have keys but open no locks. I have space but no room. You can enter, but you can't go inside. What am I?",
    answer: "A keyboard"
  },  
];


function rn(len) {
  return Math.floor(Math.random() * len);
}

const data = {
  memes,
  jokes,
  quotes,
  riddles,
};
