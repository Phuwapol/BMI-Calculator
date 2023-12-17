function calculateBMI() {
    var height = document.getElementById("height").value
    var weight = document.getElementById("weight").value
     
    if(height === "" || weight === "") {
       alert("โปรดใส่ส่วนสูง น้ำหนัก")
       return
    }
     
    height = parseFloat(height) / 100
    weight = parseFloat(weight)
     
    var bmi = weight / Math.pow(height, 2)
     
    document.getElementById("result").innerHTML = bmi.toFixed(2)
    }
    
    document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault()
    calculateBMI()
    })