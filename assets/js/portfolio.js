

var portfolio = {
    tableOfContents: ["hangman","simpleGame","trivia","giphySearch","rpslk","projectOne","liri","bamazon"],
    hangman: {
        name: "Hangman Game",
        skills: ["Javascript"],
        image: "assets/img/penny.png",
        demo: "https://rbaird2001.github.io/hwWordGuessGame/",
        git: "https://github.com/rbaird2001/hwWordGuessGame",
        desc: "A hangman style word guessing game using the characters from the Cohen Brothers filmography as the words."
    },
    simpleGame: {
        name: "Simple Game",
        skills: ["Javascript","JQuery"],
        image: "assets/img/crossSabers.jpg",
        demo: "https://rbaird2001.github.io/hwUnit-4-Game/",
        git:"https://github.com/rbaird2001/hwUnit-4-Game",
        desc: "A simple Star Wars themed game."
    },
    trivia: {
        name: "Harry Potter Trivia",
        skills: ["Javascript","Timers","JQuery"],
        image: "assets/img/marauderMapBlank.jpg",
        demo: "https://rbaird2001.github.io/hwTriviaGame/",
        git:"https://github.com/rbaird2001/hwTriviaGame",
        desc: "A trivia game based on information from the 7 volume Harry Potter series by JK Rowling"
    },
    giphySearch:{
        name: "Giphy.com Search",
        skills: ["JSON","AJAX","APIs"],
        image: "assets/img/cheeseFries.gif",
        demo: "https://rbaird2001.github.io/hwGifRetrievalApi/",
        git:"https://github.com/rbaird2001/hwGifRetrievalApi",
        desc: "A simple search of items from giphy using favorite keywords. Include optoin to add own keywords."
    },
    rpslk:{
        name: "RPSLK",
        skills: ["Javascript","Advanced Objects","Cloud Database"],
        image: "assets/img/rpslk.png",
        demo: "https://rbaird2001.github.io/hwRPS-Multiplayer/",
        git:"https://github.com/rbaird2001/hwRPS-Multiplayer",
        desc:"The classic 5 option game as seen in 'The Big Bang Theory'."
    },
    projectOne:{
        name: "Trails and Tunes",
        skills: ["Javascript","Advanced API","Materialize CSS","Geocoding","Team Projects"],
        image: "assets/img/doubleArchTrail.jpg",
        demo: "https://rbaird2001.github.io/ProjectOne/",
        git:"https://github.com/rbaird2001/ProjectOne",
        desc:"A hiking trail locator connected to Spotify for activity related playlists."
    },
    liri:{
        name: "Liri Search",
        skills: ["NodeJS","JSON"],
        image: "assets/img/liri.png",
        demo: "https://github.com/rbaird2001/liri-node-app",
        git:"https://github.com/rbaird2001/liri-node-app",
        desc:"A concert, movie, and song application. Note that this is a NodeJS CLI app. There is no web interface to demo."
    },
    bamazon:{
        name:"Bamazon",
        skills:["MySql","NodeJS","Constructors/Prototypes"],
        image:"assets/img/bamazon.png",
        demo: "https://github.com/rbaird2001/bamazon",
        git: "https://github.com/rbaird2001/bamazon",
        desc:"A CLI based inventory selection and management tool featuring MySql."
    }
    
};

//const portSelect= document.querySelector("#test");
//portSelect.addEventListener("click", allPortfolio) ;
window.onload = function allPortfolio(){
    const portContent = document.querySelector("#dynContent");
    let portItem = portfolio.tableOfContents;
    let portfolioBuild = "";
    let portBuilder1 = "";
    let portBuilder2 = "";
    let portBuilder3 = "";
    for(i=0;i<portItem.length;i++){
        let curItem = portfolio[portItem[i]];
        portBuilder1 = ""
        portBuilder2 = ""
        portBuilder3 = ""
        portBuilder1 += 
         `<div class="col s12 m4 align-right">
            <div class="card">
                <div class="card-image">
                    <img class="responsiv-img activator" src=${curItem.image} alt="">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">${curItem.name}
                        <i class="material-icons right">more_vert</i>
                    </span>
                    <p><a href=${curItem.demo}>Click here for demo.</a></p>
                    <p><a href=${curItem.git}>Click here for code.</a></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title">${curItem.name} 
                         <i class="card-title material-icons right">close</i>
                    </span>
                    <ul>
        `
        for(j=0;j<curItem.skills.length;j++){
            let skill = curItem.skills[j];
            portBuilder2 +=`<li>${skill}</li>`
        }
        
        portBuilder3 +=
        `           </ul>
                        <p> ${curItem.desc}</p>
                </div>
             </div>
        </div>
        `
        portfolioBuild += portBuilder1 + portBuilder2 + portBuilder3
    }
    portContent.innerHTML = portfolioBuild;
}


