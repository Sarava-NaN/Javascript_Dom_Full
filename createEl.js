 //Create Elements Using JS
    //     <div class="alert">
    //           <strong>✅Succesfully!</strong>completed!
    //     </div>
const main=document.getElementById("main");
//creating Div EL using Js
const div=document.createElement("div");
//Assigning Class Name
div.className="alert";
const textNode=document.createTextNode("✅Succesfully! Completed via JS")
// div.textContent="✅Succesfully! Completed"; --->slow in app
div.append(textNode);
console.log(div,textNode);
main.prepend(div);
// const bn=document.createElement("button");
// bn.className="js_btn";
// const text=document.createTextNode("X");
// btn.append(text);     
// main.prepend(bn);
// console.log(bn);