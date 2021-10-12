

const textInput = document.querySelector(".text-input");


textInput.addEventListener("input", ()=>{
    textInput.classList.add("wrong-state");
});



//================== utils
function setNormalState(event){
    event.target.classList.remove("wrong-input");
}


function setWrongState(event){
    event.target.classList.add("wrong-input");
    alert("qwe");
}
//====================== Task





