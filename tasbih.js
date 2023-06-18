



let body = document .querySelector("body") ;
let initialValue = 0;
let value = document.querySelector(".value");
const increment = document.querySelector(".increment");
const reset = document.querySelector(".reset");
const decriment = document.querySelector(".decriment")



increment.addEventListener("click", () => {
    initialValue++;
    value.innerHTML = initialValue;
    if(initialValue ==33 ){
        value.style.color="blue"
      }
      else if(initialValue >33 || initialValue <33){
        value.style.color="white"
      }

   if(initialValue <=33 ){
    increment.style.backgroundColor="purple"
  }
     
})


decriment.addEventListener("click", () => {
    if (initialValue > 0) {
        initialValue--;
        value.innerHTML = initialValue;
    };
    if(initialValue ==33 ){
        value.style.color="blue"
      }
      else if(initialValue >33 || initialValue <33){
        value.style.color="green"
      }
    if( initialValue ==0){
        value.style.color = "red"
    }
    if(initialValue <=33 ){
        decriment.style.backgroundColor = "lightblue"
      }
       
})




reset.addEventListener("click", () => {
    initialValue = 0;
    value.innerHTML = initialValue;
    if( initialValue ==0){
        value.style.color = "red"
    }

})

