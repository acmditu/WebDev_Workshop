// //BASIC DOM
// const red=document.getElementById("redBox")
// red.style.backgroundColor="red"
// const blue=document.getElementById("blueBox")
// blue.style.backgroundColor="blue"
// const yellow=document.getElementById("yellowBox")
// yellow.style.backgroundColor="yellow"
// red.innerHTML=`<input type="text">`



// EVENT AND EVENT LISTENERS
const button=document.getElementById("submit")
const inp=document.getElementById("inp")
const res=document.getElementById("result")

// button.onclick=()=>{
    
//     res.innerText=x
// }
button.addEventListener("click",click)

function click(){
    const x=inp.value
    res.innerText=x
}