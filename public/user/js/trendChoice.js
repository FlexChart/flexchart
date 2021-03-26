let refreshTrendBtn = document.getElementById("refresh-trend-section-btn");
var currentTrendNum = 1e88;


function randomChoice() {

    let viewTrendProjectBtn = document.getElementById("view-trend-project");
    let trendProjectTitle = document.getElementById("trend-project-title");
    let trendImg = document.getElementById("trend-img");
    var randomNumber = Math.floor(Math.random() * 5)
    if(currentTrendNum == randomNumber) {
        try{
            randomNumber--;
        } catch {
            randomNumber++;
        
        }
    }
        
    currentTrendNum = randomNumber;

    const trending = [
        { img: "/img/covid.png", title: "COVID-19 Data", link: "/charts/covid" },
        { img: "/img/programming_languages.svg", title: "Programming Languages", link: "/charts/programming_languages" },
        { img: "/img/anime.svg", title: "Popular Anime 2021", link: "/charts/anime" },
        { img: "/img/ide_ranking.svg", title: "IDE Ranking", link: "/charts/ide" },
        { img: "/img/website.svg", title: "Popular Websites", link: "/charts/popular_pages" },
        { img: "/img/database.png", title: "Popular Data Bases", link: "/charts/data_bases" },
    ]


    trendImg.setAttribute("src", trending[randomNumber].img)
    trendImg.setAttribute("alt", trending[randomNumber].title)
    trendProjectTitle.innerHTML = trending[randomNumber].title
    viewTrendProjectBtn.addEventListener("click", () => {
        window.location.href = trending[randomNumber].link;
    })
    }


randomChoice()



refreshTrendBtn.addEventListener("click", randomChoice)