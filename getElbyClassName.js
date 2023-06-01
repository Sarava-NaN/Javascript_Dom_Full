// getElByClassName-DOM--Elements
const PlayerEl=document.getElementsByClassName("head");
const foodEl=document.getElementsByClassName("food");
PlayerEl[0].innerHTML="<h1>⚽FootBall⚽</h1>"
foodEl[0].innerHTML="<h3>Enter Your Fav Player</h3>"

let input=document.getElementsByClassName("input_value");
let btn=document.getElementsByClassName("btn");

    btn[0].addEventListener("click",()=>{
    let demoEl=document.getElementsByClassName("demo");
    demoEl[0].innerHTML+=`<ul><li>${input[0].value}</li></ul>`;
    input[0].value="";
});

// setInterval(()=>{
//     //   history.back()
//       location.href="https://www.premierleague.com/tables";
//       window.document.title="Football"
// },5000)