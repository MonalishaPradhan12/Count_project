const twoButton=document.querySelectorAll(".twoButton button");
// console.log(twoButton);
let count =0;
function click_btn(){
twoButton.forEach(function(button){
  button.addEventListener("click",function(){
    // console.log("called");
    if(button.classList.contains('prev-btn'))
    {
      console.log("called");
      count--;
    }
    else if(button.classList.contains('next-btn')){
      count ++;
    }
    const counter = document.getElementById("counter");
    counter.textContent = count;
    if(count<0){
      counter.style.color="red";
    }
    else if(count>0){
      counter.style.color="green";
    }
    else{
      counter.style.color="black";
    }
  })
})
}
click_btn();