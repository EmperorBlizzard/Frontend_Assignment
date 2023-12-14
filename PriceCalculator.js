const oldSizeInput = document.querySelector(".oldSizeInput")
const oldFloor = document.querySelector(".oldFloor")
const oldElevetorInput = document.querySelector(".oldElevetorInput")

const newSizeInput = document.querySelector(".newSizeInput")
const newFloor = document.querySelector(".newFloor")
const newElevetorInput = document.querySelector(".newElevetorInput")

const distanceBetween = document.querySelector(".distanceBetween")

const totalWeight = document.querySelector(".totalWeight")

const btnCalculate = document.querySelector(".btnCalculate")

const result = document.querySelector(".priceCalculatorResult")

const basePrice = 5000
const baseSizePrice = 20
const baseFloorPrice = 500;
const baseWeightPrice = 10;
const baseDistancePrice = 10;

let price = 0

const isEmpty = str => !str.trim().length;

btnCalculate.addEventListener("click", function(){
    if(isEmpty(oldSizeInput.value) || isEmpty(oldFloor.value) || isEmpty(newSizeInput.value) || isEmpty(newFloor.value) || isEmpty(distanceBetween.value) || isEmpty(totalWeight.value)){
        console.log("Fill all felts");
        alert("Fill all felts")
    }
    else {
        // console.log(result.hasChildNodes);
        // if(result.hasChildNodes === true){
        //     result.removeChild();
        // }

        // const removeResultDiv = 

        // console.log(removeResultDiv);
        
        // if(removeResultDiv !== null){
        //     removeResultDiv.remove();
        // }
        
        deleteChild();

        price = 0

        price = price + basePrice
        //console.log(price);

        price = price + (oldSizeInput.value * baseSizePrice);
        //console.log(price);

        if(oldElevetorInput.checked !== true){
            price = price + (oldFloor.value * baseFloorPrice)
        }
        // else{
        //     console.log("Have old elevator");
        // }

        //console.log(price);

        price = price + (newSizeInput.value * baseSizePrice)

        if(newElevetorInput.checked !== true){
            price = price + (newFloor.value * baseFloorPrice)
        }
        // else{
        //     console.log("Have new elevator");
        // }

        //console.log(price);

        price = price + (distanceBetween.value * baseDistancePrice)

        //console.log(price);

        price = price + (totalWeight.value * baseWeightPrice)

        // console.log(price);

        
        const resultDiv = document.createElement("div");
        result.appendChild(resultDiv);
        resultDiv.className = "reultDiv";

        const resultHeader = document.createElement("h3");
        resultHeader.className = "resultHeader";
        resultDiv.appendChild(resultHeader);
        resultHeader.innerHTML = "Results:"

        const basePriceText = document.createElement("span");
        basePriceText.className = "basePrice";
        resultDiv.appendChild(basePriceText);
        basePriceText.innerHTML = "Base price: " + basePrice + " kr";

        const baseSizePriceText = document.createElement("span");
        baseSizePriceText.className = "baseSizePrice";
        resultDiv.appendChild(baseSizePriceText);
        baseSizePriceText.innerHTML = "Base size price: " + baseSizePrice + " kr/m²";

        const baseFloorPriceText = document.createElement("span");
        baseFloorPriceText.className = "baseFloorPrice";
        resultDiv.appendChild(baseFloorPriceText);
        baseFloorPriceText.innerHTML = "Base floor price (Only if no elevator exist): " + baseFloorPrice + " kr/floor";1

        const baseWeightPriceText = document.createElement("span");
        baseWeightPriceText.className = "baseWeightPrice";
        resultDiv.appendChild(baseWeightPriceText);
        baseWeightPriceText.innerHTML = "Base weight price: " + baseWeightPrice + " kr/kg";

        const baseDistancePriceText = document.createElement("span");
        baseDistancePriceText.className = "baseDistancePrice";
        resultDiv.appendChild(baseDistancePriceText);
        baseDistancePriceText.innerHTML = "Base distance price: " + baseDistancePrice + " kr/km";

        const totalPrice = document.createElement("span");
        totalPrice.className = "totalPrice";
        resultDiv.appendChild(totalPrice);
        totalPrice.innerHTML = "Total Price: " + price + " kr";

        
        // console.log(oldSizeInput.value)
        // console.log(oldFloor.value);
        // console.log(newSizeInput.value);
        // console.log(newFloor.value);
        // console.log(distanceBetween.value);
        // console.log(totalWeight.value);
        // console.log(oldElevetorInput.checked);
        // console.log(newElevetorInput.checked);
    }
})

function deleteChild(){
    let e = result;
    let child = e.lastElementChild;
    while (child){
        e.removeChild(child);
        console.log("Removed child");
        child = e.lastElementChild;
    }
}

