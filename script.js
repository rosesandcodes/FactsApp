const initialFacts = [
    {
      id: 1,
      text: "React is being developed by Meta (formerly facebook)",
      source: "https://opensource.fb.com/",
      category: "technology",
      votesInteresting: 24,
      votesMindblowing: 9,
      votesFalse: 4,
      createdIn: 2021,
    },
    {
      id: 2,
      text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
      source:
        "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
      category: "society",
      votesInteresting: 11,
      votesMindblowing: 2,
      votesFalse: 0,
      createdIn: 2019,
    },
    {
      id: 3,
      text: "Lisbon is the capital of Portugal",
      source: "https://en.wikipedia.org/wiki/Lisbon",
      category: "society",
      votesInteresting: 8,
      votesMindblowing: 3,
      votesFalse: 1,
      createdIn: 2015,
    }
  ];

//selecting DOM Elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector('.fact-form');
const factslist = document.querySelector('.facts-list');

//create DOM elements
factslist.innerHTML = "";

//Load data from suopabase
loadFacts();

async function loadFacts(){
  const res = await fetch("https://syytbfwdxnfwhclkljvs.supabase.co/rest/v1/Fact", {
    headers:{
      apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5eXRiZndkeG5md2hjbGtsanZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMyNzU0MjEsImV4cCI6MTk4ODg1MTQyMX0.kODxjuNIj-ysFGAWJhDqsUAAmyl4sqqL8Kup9FswUcA",
      authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5eXRiZndkeG5md2hjbGtsanZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMyNzU0MjEsImV4cCI6MTk4ODg1MTQyMX0.kODxjuNIj-ysFGAWJhDqsUAAmyl4sqqL8Kup9FswUcA"
    }
  } );
  console.log(res);
  const data = await res.json();
  
  createFactlist(data);
}

// createFactlist(initialFacts);
function createFactlist(dataArray){

const htmlArr = dataArray.map((fact) => `<li class='fact'>
<p>
${fact.text}
        <a class="source" href = "${fact.source}">Source</a>
</p>
<span class="tag" style="background-color: red">
${fact.category}
</span>
        </li>`);
console.log(htmlArr);
const html = htmlArr.join('');
factslist.insertAdjacentHTML("afterbegin", html);
}

//factslist.insertAdjacentHTML("afterbegin", "<li>Olamide is here!</li>");

//Toggle form visibility
btn.addEventListener('click', function(){
    if(form.classList.contains('hidden')){
        form.classList.remove('hidden');
        btn.textContent = 'close';
    } else{
        form.classList.add('hidden');
        btn.textContent = 'Share a fact';
    }
});

// [2, 4, 6, 8].forEach(function(x){
//     console.log(x);
// });
/* const times = [2, 4, 6, 8].map(function(el){
    return el * 10;
 });
 console.log(times); */

 
// const times = [2, 4, 6, 8].map((x) => x *10);
// console.log(times);


// const CATEGORIES = [
//     { name: "technology", color: "#3b82f6" },
//     { name: "science", color: "#16a34a" },
//     { name: "finance", color: "#ef4444" },
//     { name: "society", color: "#eab308" },
//     { name: "entertainment", color: "#db2777" },
//     { name: "health", color: "#14b8a6" },
//     { name: "history", color: "#f97316" },
//     { name: "news", color: "#8b5cf6" },
//   ];

// const allCategories = CATEGORIES.map((el) => el.name);
// console.log(allCategories);



//   function calcFactAge(year){
//     const currentYear = new Date().getFullYear();
//     const age = currentYear - year;

//     if (age >= 0) return age;
//     else return `Impossible year, Year needs to be less or equal ${currentYear}`;
//   }

//   const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
//   console.log(factAges);
//   console.log(factAges.join(' & '));