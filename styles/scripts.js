// var CC, YY, MM, DD, d, dayValue;
// var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
// var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
// var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
// ​

const button = document.querySelector("#button")
const gender = document.querySelectorAll("#selection")
const output = document.querySelector("#message")

const dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

button.addEventListener("click",function(evt){
  evt.preventDefault()
  const firstInput = document.querySelector("#input1").value

  let dateOfBirth = new Date(firstInput)
  let myDay = dateOfBirth.getDay();

  // alert(`${myDay}`)
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
