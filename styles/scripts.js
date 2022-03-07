// var CC, YY, MM, DD, d, dayValue;
// var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
// var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
// var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
// ​

const button = document.querySelector("#button")
const gender = document.querySelector("#selection")

const dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

button.addEventListener("click",function(){
  const firstInput = document.querySelector("#input1").value

  let dateOfBirth = new Date(firstInput)
  let myDay = dateOfBirth.getDay();

  alert(`${myDay}`)
})
