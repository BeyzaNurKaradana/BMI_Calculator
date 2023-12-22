function calculate() {
  let gender = document.querySelector("input[name='gender']:checked");
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let bmi = weight / (height * height);

  /* if (!gender || height === "" || weight === "") {
    alert("Lütfen cinsiyetinizi, boyunuzu ve kilonuzu girin.");
    return; // Stop the function if any values are missing
  }
 */
  if (!gender) {
    alert("Please select your gender!");
  } else if (height === "" || weight === "") {
    alert("Please enter your height and weight!");
  }
 

  if (gender.value === "female") {
    if (bmi < 18.5) {
      document.getElementById("conclusion").innerHTML = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      document.getElementById("conclusion").innerHTML = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      document.getElementById("conclusion").innerHTML = "overweight";
    } else if (bmi> 29.9) {
      document.getElementById("conclusion").innerHTML = "obese";
    }
  } else if (gender.value="male") {
    if (bmi < 19) {
      document.getElementById("conclusion").innerHTML = "Underweight";
    } else if (bmi >= 19 && bmi <= 25) {
      document.getElementById("conclusion").innerHTML = "Normal weight";
    } else if (bmi > 25 && bmi < 29.9) {
      document.getElementById("conclusion").innerHTML = "overweight";
    } else if (bmi> 29.9) {
      document.getElementById("conclusion").innerHTML = "obese";
    }
  }

 

}
