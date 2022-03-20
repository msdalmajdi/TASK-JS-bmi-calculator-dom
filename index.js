function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  height = height *0.01;
  let BMI = (weight / (height*height)).toFixed(2);
  let weightStatus = "unclear";

  if (age <19){

    if(BMI<19){
      weightStatus = "Underweight";
    }else if(BMI>=19 && BMI <=24){
      weightStatus = "Healthy weight";
    }else if(BMI>24 && BMI <=29.9){
      weightStatus = "Over weight";
    }else{
      weightStatus = "Obese";
    }

  }else if (age>=19 && age<25){
    if(BMI<19){
      weightStatus = "Underweight";
    }else if(BMI>=19 && BMI <=24){
      weightStatus = "Healthy weight";
    }else if(BMI>24 && BMI <=29.9){
      weightStatus = "Over weight";
    }else{
      weightStatus = "Obese";
    }
  }else if (age >=25 && age < 35){
    if(BMI<20){
      weightStatus = "Underweight";
    }else if(BMI>=20 && BMI <=25){
      weightStatus = "Healthy weight";
    }else if(BMI>25 && BMI <=29.9){
      weightStatus = "Over weight";
    }else{
      weightStatus = "Obese";
    }

  }else if (age >=35 && age < 44){
    if(BMI<21){
      weightStatus = "Underweight";
    }else if(BMI>=21 && BMI <=26){
      weightStatus = "Healthy weight";
    }else if(BMI>26 && BMI <=29.9){
      weightStatus = "Over weight";
    }else{
      weightStatus = "Obese";
    }
  }else if (age >=45 && age <54){
    if(BMI<22){
      weightStatus = "Underweight";
    }else if(BMI>=22 && BMI <=27){
      weightStatus = "Healthy weight";
    }else if(BMI>27 && BMI <=29.9){
      weightStatus = "Over weight";
    }else{
      weightStatus = "Obese";
    }
  }else if (age >=55 && age <64){
    if(BMI<23){
      weightStatus = "Underweight";
    }else if(BMI>=23 && BMI <=28){
      weightStatus = "Healthy weight";
    }else if(BMI>28 && BMI <=29.9){
      weightStatus = "Over weight";
    }else{
      weightStatus = "Obese";
    }
  }else if (age >=65){
    if(BMI<24){
      weightStatus = "Underweight";
    }else if(BMI>=24 && BMI <=29){
      weightStatus = "Healthy weight";
    }else if(BMI>29 && BMI <=29.9){
      weightStatus = "Over weight";
    }else{
      weightStatus = "Obese";
    }
  }



  alert(`Your BMI is ${BMI}!\nYou are ${weightStatus}`);
}
/*
if(BMI<18.5){
  weightStatus = "Underweight";
} else if (BMI<24.9 && BMI >=18.5){
  weightStatus = "Healthy Weight";
} else if (BMI<29.9 && BMI >= 24.9)
weightStatus = "Overweight";
else if (BMI >= 29.9){
  weightStatus = "Obese";
}
else{
  weightStatus = "Unknown";
}
*/