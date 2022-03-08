//methods to check and find the references to values of the given id
const button = document.querySelector("#button")
const gender = document.querySelectorAll("#selection")
const output = document.querySelector("#message")

//applicable arrays to the IP2
const dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

//A function for manipulating the click action to the button
button.addEventListener("click",function(evt){
  evt.preventDefault()
  const firstInput = document.querySelector("#input1").value

  let dateOfBirth = new Date(firstInput)
  let myDay = dateOfBirth.getDay();

  //making decision in the arrays given based on the given gender conditions
  for(let choice of gender){
    let myGender = choice.value;
    if(myGender==="male"){
      output.innerHTML = `Your Akan name is ${maleNames[myDay]}`
    }
    else if(myGender==="female"){
      output.innerHTML = `Your Akan name is ${femaleNames[myDay]}`
    }
  }
})
