// how to select dom ElementInternals

// 1.getElementBy()
// 2.getElementByClassName()
// 3.getElementById()
// 4.getElementByTagName()
// 5.FindingElementsbyCSSSelectors
// 6.querySelector()
// 7.querySelectorAll()

//#12-getElementById()

let header=document.getElementById("head");
header.innerText="🍕Swiggy🍎"
let food=document.getElementById("food");
food.innerHTML="<h1>Order Your Food Here</h1>"

let searchBarEl=document.getElementById("input_value");
let ButtonEl=document.getElementById("btn");

ButtonEl.addEventListener("click",()=>{
    document.getElementById("demo").innerHTML=searchBarEl.value;
})