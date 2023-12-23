function calculate() {
  let gender = document.querySelector("input[name='gender']:checked");
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;


  height = parseFloat(height) / 100;



  if (gender === null || height === "" || weight === "") {
    alert("Please enter your gender height, and weight!");
    return;
  }

  

  let bmi = weight / (height * height);
  if (gender.value === "female") {
    if (bmi < 18.5) {
      document.getElementById("conclusion").innerHTML =
        "Your BMI is " + bmi.toFixed(2) + "<br>You are Underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      document.getElementById("conclusion").innerHTML =
        "Your BMI is " + bmi.toFixed(2) + "<br>You are normal weight.";
    } else if (bmi >= 25 && bmi < 29.9) {
      /* document.getElementById("conclusion").innerHTML = "overweight"; */
      document.getElementById("conclusion").innerHTML =
        "Your BMI is " + bmi.toFixed(2) + "<br>You are Overweight.";
    } else if (bmi > 29.9) {
      document.getElementById("conclusion").innerHTML =
        "Your BMI is " + bmi.toFixed(2) + "<br>You are Obese.";
    }
  } else if ((gender.value = "male")) {
    if (bmi < 19) {
      document.getElementById("conclusion").innerHTML =
        "Your BMI is " + bmi.toFixed(2) + "<br>You are Underweight.";
    } else if (bmi >= 19 && bmi <= 25) {
      document.getElementById("conclusion").innerHTML =
        "Your BMI is " + bmi.toFixed(2) + "<br>You are normal weight.";
    } else if (bmi > 25 && bmi < 29.9) {
      document.getElementById("conclusion").innerHTML =
        "Your BMI is " + bmi.toFixed(2) + "<br>You are Overweight.";
    } else if (bmi > 29.9) {
      document.getElementById("conclusion").innerHTML =
        "Your BMI is " + bmi.toFixed(2) + "<br>You are Obese.";
    }
  }
}

initIMask = () => {
  $("input.imask").each((n, t) => {
    const i = $(t).data("is-regex")
      ? new RegExp($(t).data("mask"))
      : $(t).data("mask");
    new IMask(t, {
      mask: i,
    });
  });
};

