//DOM-Document Object Model-We can create and manupulate(delete,move,etc) Date="26-04-2023"
//#02--what is JS and Html Dom?
/*     Document           Object                       Model
      File             Tags,elements               Layout structue
 (e.g:html,xml)      (.eg,h1,img)            (Layout of that structue)*/
//#Window Object

document.getElementById("demo").innerHTML =
  "We can Change Html content By Using getElementBy Id";

  let saro=document.getElementsByClassName("demo").innerHTML="We can Change Html content By Using getElementByClassName"
  saro[0].innerText="We can Change Html content By Using getElementByClassName";
  // console.log(window.innerHeight,window.innerWidth);
  // window.open('https://google.com')
  // window.close()
  // window.alert("hello");
  // window.prompt("enter ur name")
  console.info(console);
  console.error(console);
  console.warn(console);
  console.log(console);
  //#5--BOM-Browser Object Model
  // Screen
  // location
  // history
  // navigator
  console.log(screen.width,screen.height);
  console.log(location);
  console.log(location.hostname);
  window.setInterval(function(){
window.document.title="Changed"
  },5000)
//  setInterval(()=>{
//   location.href="https://www.porn00.com"
//   window.document.title="Sarwan"
//  },10000)
// console.log(history.forward());
// console.log(history.back());
// setInterval(()=>{
  // history.forward();
// },1000)
console.lo(window.navigator);
console.log(window.navigator.platform);
//#6-->DOM Document Using Javascript
console.log(document.body.children[0].children[0].innerText="Learn Html Dom in Javascript-TAMIL")
console.log(window.find('javascript-tamil'));
console.log(document.images);
//#07-->DOM properties and methods
const Bio={
  name:"Saravanan", //property
  Age:28,
  PlaceofBirth:"Chennai",
  isAlive:true,
  favLang:'Javascript',
  greetUser(){
    return ` Hello My name is ${this.name} and my Age is ${this.Age} i'm from ${this.PlaceofBirth} `
  }
}
Bio.name="Sarwan"
  // let Rst=Bio.greetUser();
  // document.write(Rst)
let  newName=  prompt("Enter Your Name");
let newPlace=  prompt("Enter Your location");
Bio.name = newName;
Bio.PlaceofBirth=newPlace;
document.body.children[3].innerHTML=`<h1>${Bio.greetUser()}</h1>`
//#8-->Dom loaded Events;