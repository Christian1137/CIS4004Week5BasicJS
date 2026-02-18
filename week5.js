let count = 0;
function tickUp() {
    let countId = document.getElementById("counter");
    count++;
    console.log(count);
    countId.innerHTML = count;
    
}

function tickDown() {
    let countId = document.getElementById("counter");
    count--;
    console.log(count);
    countId.innerHTML = count;
    
}

function runForLoop() {
    let forLoopCount = document.getElementById("forLoopResult");
    forLoopCount.innerHTML = '';
    for (let i = 0; i <= count; i++) {
        forLoopCount.innerHTML += i + " ";
    }
}

function showOddNumbers(){
    let oddNumCount = document.getElementById("oddNumberResult");
    oddNumCount.innerHTML = '';
    for (let i = 1; i <= count; i = i + 2) {
        oddNumCount.innerHTML += i + " ";
    }
}

function addMultiplesToArray() {
    let multiplesArray = [];
    let arrayIndex = 0;
    for (let i = count; i > 0; i--) {
        if (i%5 === 0){
            console.log("Multiple of 5");
            multiplesArray[arrayIndex] = i;
            arrayIndex++;
        }
    }
    console.log(multiplesArray);

}

const car = {
    cType: "",
    cMPG: "",
    cColor: ""
};

function printCarObject() {

    car.cType = document.getElementById("carType").value;
    car.cMPG = document.getElementById("carMPG").value;
    car.cColor = document.getElementById("carColor").value;

    console.log(car);

}

function loadCar(val) {
    if (val === 1) {
        document.getElementById("carType").value = carObject1.cType;
        document.getElementById("carMPG").value = carObject1.cMPG;
        document.getElementById("carColor").value = carObject1.cColor;
    }

    if (val === 2) {
        document.getElementById("carType").value = carObject2.cType;
        document.getElementById("carMPG").value = carObject2.cMPG;
        document.getElementById("carColor").value = carObject2.cColor;
    }

    if (val === 3) {
        document.getElementById("carType").value = carObject3.cType;
        document.getElementById("carMPG").value = carObject3.cMPG;
        document.getElementById("carColor").value = carObject3.cColor;
    }


}

function changeColor(val) {
    if (val === 1) {
        document.getElementById("styleParagraph").style.color = "red";

    }

    if (val === 2) {
        document.getElementById("styleParagraph").style.color = "green";
    }

    if (val === 3) {
        document.getElementById("styleParagraph").style.color = "blue";
    }
}