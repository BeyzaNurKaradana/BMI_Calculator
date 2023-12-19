function calculate() {
  let gender = document.querySelector("input[name='gender']:checked");
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let bmi = weight / (height * height);

  if (gender && gender.value === "female" && bmi < 18.5) {
    // gender: Bu, cinsiyet seçeneklerinden birinin seçilip seçilmediğini kontrol eder. Eğer bir cinsiyet seçeneği seçilmişse (yani gender truthy bir değerse), bu şart sağlanır. gender.value === "female": Eğer cinsiyet seçeneği seçilmişse, bu kısmı kontrol eder. Seçilen cinsiyet "female" ise, bu şart sağlanır.
    document.getElementById("conclusion").innerHTML = "Underweight";
  } else if (gender && gender.value === "female" && bmi >= 18.5 && bmi < 24.9) {
    document.getElementById("conclusion").innerHTML = "Normal weight";
  } else if (gender && gender.value === "female" && bmi >= 25 && bmi < 29.9) {
    document.getElementById("conclusion").innerHTML = "overweight";
  } else {
    document.getElementById("conclusion").innerHTML = "obese";
  }
}
