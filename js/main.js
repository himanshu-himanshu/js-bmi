const weight = document.querySelector('#weight');
const heightFeet = document.querySelector('#height-feet');
const heightInches = document.querySelector('#height-inches');
const bmi = document.querySelector('#bmi');
const result = document.querySelector('#result');
const button = document.querySelector('#check-bmi');
const button2 = document.querySelector('#reset');

button.addEventListener('click', checkBmi);
button2.addEventListener('click', resetAll);
weight.addEventListener('onchange', checkValue);

function checkValue(){
    console.log("hello");
    weight.maxLength = "2";
}

function checkBmi(){
    
    let weightInput = weight.value;
    let feetInput = heightFeet.value;
    let inchesInput = heightInches.value;

    if(weightInput == '' || feetInput == '' || inchesInput == ''){
        alert("Enter all values ");
    } else{
        let feetToMeter = feetInput * 0.3048;
        let inchesToMeter = inchesInput * 0.0254;
        let finalMeter = feetToMeter + inchesToMeter;
        let finalOutput = weightInput / (finalMeter * finalMeter);
        let results = finalOutput.toFixed(2);
        if(results == Infinity){
            results = 0;
        }
        if(results < 18.5 && results > 0){
            result.innerHTML = `You are Thin`;
        } else if(results > 18.6 && results < 24.9){
            result.innerHTML = `You are Healthy`;
        } else if(results > 25 && results < 29.9){
            result.innerHTML = `You are Thin`;
        } else if(results > 30){
            result.innerHTML = `You are Obese`
        } else{
            results.innerHTML = `Error in showing BMI`
        }
        bmi.innerHTML = `Your BMI is: ${results}`;
    }
}

function resetAll(){
    weight.value = "";
    heightFeet.value = "";
    heightInches.value = "";
    result.innerHTML = "";
    bmi.innerHTML = "";
}