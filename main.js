const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_ID='efee0197';
const APP_key='3248440a529f8ac59149bef60711898f';
const baseURL = `https://api.edamam.com/search?q=pasta&app_id=${APP_ID}&app_key=${APP_key}`;

searchForm.addEventListener('submit', (e) => {

    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
  
});

async function fetchAPI(){

    const baseURL = `https://api.edamam.com/search?q=pasta&app_id=${APP_ID}&app_key=${APP_key}&to=21`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
} 

function generateHTML(results){
   let generatedHTML = '';
   results.map(result =>{

    generatedHTML += 
`
    <div class ="item">
                   <img src="./image/french.jpg" alt="">
  
                  <div class = "flex-container"> 
                  <h1 class="title">This is a recipe</h1>
                  <a class="view-button" href="#">View Recipe</a>
                </div>
                <p class="item-data">Calories: 120</p>
    </div>
    `
   })

   searchResultDiv.innerHTML = generateHTML;


}