function calculateBMI() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    if (!height || !weight) {
        document.getElementById("result").innerText = "Please enter both height and weight.";
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    document.getElementById("result").innerText = `Your BMI is ${bmi} (${category})`;
}
