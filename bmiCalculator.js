const button = document.querySelector('button');
const form = document.querySelector("form");
const wtGuide = document.querySelector('.weight-guide');
const underWeight = document.querySelector("#uw");
const overWeight = document.querySelector("#ow");
const normalRange = document.querySelector("#nr");
const checkAgain = document.createElement('button');
checkAgain.id = "last-btn";
checkAgain.innerHTML = `<span>Check Again!</span>`;

button.addEventListener('click', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector("#display");
  const h3 = document.querySelector("h3");
  
  if(height === "" || height < 0 || isNaN(height)){
    alert("Please Enter Valid height! " + height);
  } else if(weight === "" || weight < 0 || isNaN(weight)){
    alert("Please Enter Valid weight! "+ weight);
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2)
    result.style.display = "block";
    result.innerHTML = `<span>${BMI}</span>`
    h3.style.display = "block"
    form.append(checkAgain);
    if(BMI <= 18.65){
      wtGuide.innerText = `Oops! You're Under Weight`;
      wtGuide.style.display = 'block'
    } else if(BMI > 18.65 && BMI <= 24.9){
      wtGuide.innerText = `Boss! Fit Hai BOSS!!!`;
      wtGuide.style.display = 'block'
    } else {
      wtGuide.innerText = `Ohh! You're Over Weighted!`;
      wtGuide.style.display = 'block'
    }
  }
})