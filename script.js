let btn = document.querySelector("button");
let input = document.querySelector("input");    
let ul= document.querySelector("ul");

btn.addEventListener("click", function() {
console.log(input.value);
let li= document.createElement("li");
input.value=input.value.trim();
if(input.value===""){
    alert("please enter a value");
    return;
}
li.innerText=input.value;
let dltbtn= document.createElement("button");
dltbtn.innerText='delete';
dltbtn.classList.add("dltbtn");
li.appendChild(dltbtn);
 
ul.appendChild(li);
input.value=""; 

})
ul.addEventListener("click",function(event){
    if(event.target.nodename=='BUTTON');{
    let listitem = event.target.parentElement;
    listitem.remove();
    console.log("deleted");
    }
})
