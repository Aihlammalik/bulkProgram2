//program 1
//Write a js program to check whether a character is uppercase or lowercase alphabet.

function checkCase() {
    var inputULCase = document.getElementById("inputULcase").value;
    var outputULCase = document.getElementById("outputULcase");
    // if (inputULCase == inputULCase.toUpperCase()) {
    //   outputULCase.innerHTML = `input ${inputULCase} is in uppercase`
    // }
    //else{
    //   outputULCase.innerHTML = ` input ${inputULCase} is in lowercase`
    //}

    for (let index = 0; index < inputULCase.length; index++) {
        if (inputULCase[index] == inputULCase[index].toUpperCase()) {
            alert(`${inputULCase[index]} is in uppercase`);
        }
        else {
            alert(`${inputULCase[index]} is in lowercase`);
        }

    }
}


//program 2
//Write a js program to input Week number and print week day

function weekNum() {
    var inputWeekNum = document.getElementById("inputWeekNumber").value;
    var outputWeekNum = document.getElementById("outputWeekNumber");
    switch (inputWeekNum) {
        case "1":
            outputWeekNum.innerHTML = `${inputWeekNum} is Monday`
            break;

        case "2":
            outputWeekNum.innerHTML = `${inputWeekNum} is Tuesday`
            break;

        case "3":
            outputWeekNum.innerHTML = `${inputWeekNum} is Wednesday`
            break;

        case "4":
            outputWeekNum.innerHTML = `${inputWeekNum} isThursday`
            break;

        case "5":
            outputWeekNum.innerHTML = `${inputWeekNum} is Friday`
            break;

        case "6":
            outputWeekNum.innerHTML = `${inputWeekNum} is Saturday`
            break;

        case "7":
            outputWeekNum.innerHTML = `${inputWeekNum} is Sunday`
            break;

        default:
            outputWeekNum.innerHTML = `enter week number please`
            break;
    }
}


//program 2
//Write a js program to input Week number and print week day

function monthNum() {
    var inputMonthNumber = document.getElementById("inputMonthNumber").value;
    var outputMonthNumber = document.getElementById("outputMonthNumber");
    switch (inputMonthNumber) {
        case "1":
            outputMonthNumber.innerHTML = `${inputMonthNumber} is January`
            break;

        case "2":
            outputMonthNumber.innerHTML = `${inputMonthNumber} is Feburary`
            break;

        case "3":
            outputMonthNumber.innerHTML = `${inputMonthNumber} is March`
            break;

        case "4":
            outputMonthNumber.innerHTML = `${inputMonthNumber} is April`
            break;

        case "5":
            outputMonthNumber.innerHTML = `${inputMonthNumber} is May`
            break;

        case "6":
            outputMonthNumber.innerHTML = `${inputMonthNumber} is June`
            break;

        case "8":
            outputMonthNumber.innerHTML = `${inputMonthNumber} is July`
            break;

        case "8":
            outputMonthNumber.innerHTML = `${inputMonthNumber} is August`
            break;

        case "9":
            outputMonthNumber.innerHTML = `${inputMonthNumber} is September`
            break;

        case "10":
            outputMonthNumber.innerHTML = `${inputMonthNumber} is October`
            break;

        case "11":
            outputMonthNumber.innerHTML = `${inputMonthNumber} is November`
            break;


        case "12":
            outputMonthNumber.innerHTML = `${inputMonthNumber} is December`
            break;



        default:
            outputMonthNumber.innerHTML = `Please enter Month in number `
            break;
    }
}



//program 4
//Write a js program to input angles of a triangle and check whether triangle is valid or not

function triangleValidity() {
    var inputAngles1 = parseInt(document.getElementById("inputAngleTriangle1").value);
    var inputAngles2 = parseInt(document.getElementById("inputAngleTriangle2").value);
    var inputAngles3 = parseInt(document.getElementById("inputAngleTriangle3").value);
    var sumTriangle = inputAngles1 + inputAngles2 + inputAngles3;
    var outputTriangle = document.getElementById("outputAngleTriangle");

    if (sumTriangle == 180) {
        outputTriangle.innerHTML = `It is a triangle`;
    }
    else {
        outputTriangle.innerHTML = `${sumTriangle} It is not a triangle`;
    }

}


//program 5
//Write a js program to input all sides of a triangle and check whether triangle is valid or not

function triangleValidity1() {
    var inputSide1 = parseInt(document.getElementById("inputSideTriangle1").value);
    var inputSide2 = parseInt(document.getElementById("inputSideTriangle1").value);
    var inputSide3 = parseInt(document.getElementById("inputSideTriangle1").value);

    var outputSideTeacher = document.getElementById("outputSideTriangle");

    if (inputSide1 + inputSide2 >= inputSide3) {
        outputSideTeacher.innerHTML = `It is a triangle`
    }
    else if (inputSide1 + inputSide3 >= inputSide2) {
        outputSideTeacher.innerHTML = `It is a triangle`
    }
    else if (inputSide2 + inputSide3 >= inputSide1) {
        outputSideTeacher.innerHTML = `It is a triangle`
    }
    else {
        outputSideTeacher.innerHTML = `It is not a triangle`
    }
}


//program 6
//program to check whether the triangle is equilateral, isosceles or scalene triangle
function typeOfTriangle() {
    var inputSidetri1 = document.getElementById("inputSideTriangles1").value;
    var inputSidetri2 = document.getElementById("inputSideTriangles2").value;
    var inputSidetri3 = document.getElementById("inputSideTriangles3").value;
    var inputAngleTri1 = parseInt(document.getElementById("inputAngleTriangles4").value);
    var inputAngleTri2 = parseInt(document.getElementById("inputAngleTriangles5").value);
    var inputAngleTri3 = parseInt(document.getElementById("inputAngleTriangles6").value);
    var outputOftype = document.getElementById("outputTypeTriangles");
    console.log(inputSidetri1, inputSidetri2, inputSidetri3, inputAngleTri1, inputAngleTri2, inputAngleTri3);

    if (inputSidetri1 === inputSidetri2 && inputSidetri1 === inputSidetri3 && inputSidetri2 === inputSidetri3 && inputAngleTri1 === 60 && inputAngleTri2 === 60 && inputAngleTri3 === 60) {
        outputOftype.innerHTML = `it is an equilateral triangle`;
    }
    else if (inputSidetri1 === inputSidetri2 || inputSidetri1 === inputSidetri3 || inputSidetri2 === inputSidetri3 && inputAngleTri1 === inputAngleTri2 || inputAngleTri1 === inputAngleTri3 || inputAngleTri2 === inputAngleTri3) {
        outputOftype.innerHTML = `it is an isosceles triangle`;
    }

    else if (inputSidetri1 !== inputSidetri2 && inputSidetri1 !== inputSidetri3 && inputSidetri2 !== inputSidetri3 && inputAngleTri1 !== inputAngleTri2 !== inputAngleTri3) {
        outputOftype.innerHTML = `it is a scalene triangle`;
    }
    else {
        outputOftype.innerHTML = `it is an another type of triangle`;

    }
}

//program 7
//Write a js program to find all roots of a quadratic equation

function rootsCalculator() {
    var a = document.getElementById("inputQuardratica").value;
    var b = document.getElementById("inputQuardraticb").value;
    var c = document.getElementById("inputQuardraticc").value;
    var outputQuardratic = document.getElementById("outputQuardratic");
    var discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {

        var root1 = (- b + Math.sqrt(discriminant)) / 2 * a;
        var root2 = (- b - Math.sqrt(discriminant)) / 2 * a;

        outputQuardratic.innerHTML = `As discriminant is graeter than 0 so this equation has two roots i.e., ${root1} and ${root2}`
    }
    else if (discriminant === 0) {
        root1 = root2 = -b / 2 * a;

        outputQuardratic.innerHTML = `As discriminant is equals to 0 so the roots of this equation are same i.e., ${root1} and ${root2}`

    }

}

//program 8
//Write a js program to calculate profit or loss

function calculateProfitLoss() {
    var inputRevenue = document.getElementById("inputRevenue").value;
    var inputExpences = document.getElementById("inputExpence").value;
    var outputProfitLoss = document.getElementById("outputProfitLoss");

    var calculate = inputRevenue - inputExpences;
    outputProfitLoss.innerHTML = `As given revenue is ${inputRevenue} and given Expence is ${inputExpences} so according to formula the Profit or loss is given by which is ${calculate}`;
}

//program 9
//Write a js program to search all occurrences of a character in given string.

function allOccurence() {
    var inputOuccurnce = document.getElementById("inputAllOccurence").value.toLowerCase();
    var outputAllOccurence = document.getElementById("outputAllOccurence");
    for (let index = 0; index < inputOuccurnce.length; index++) {

        if (inputOuccurnce[index] >= "a" && inputOuccurnce[index] <= "z") {
            var characterOccuredAtPlace = index + 1;
            outputAllOccurence.innerHTML = `In ${inputOuccurnce} character occured at ${characterOccuredAtPlace}`
        }

    }

}

//program 10 
//Write a js program to count occurrences of a character in given string.

function countOccurenceOfCharacter() {
    var inputString = document.getElementById("inputCountOccurence").value.toLowerCase();
    var inputCharacterToFind = document.getElementById("inputCharacter").value.toLowerCase();
    var outputCountOccorence = document.getElementById("outputCountOccurence");
    var count = 0;
    for (let index = 0; index < inputString.length; index++) {
        if (inputString.charAt(index) === inputCharacterToFind) {
            count += 1;
            outputCountOccorence.innerHTML = `In ${inputString} the character ${inputCharacterToFind} occured ${count} times`
        }
        else {
            `Required character does not occured`
        }
    }
    return count;
}


//function highestFrequency() {
//   var inputHighestFrequency = document.getElementById("inputHighFrequency").value ;
//   var outputHighestFrequency = document.getElementById("outputHighFrequency");

//   for (let index = 0; index < inputHighestFrequency.length; index++) {
//      if (inputHighestFrequency[index] === inputHighestFrequency[index]) {

//      }

//    }
//}


//program 11
//Write a js program to remove first occurrence of a character from string.

function removeFirstOccurence(inputFirstOccurence, characterToRemove) {
    var inputFirstOccurence = document.getElementById("inputRemoveFirst").value;
    var characterToRemove = document.getElementById("inputRemoveFirstIndex").value;
    var outputRemoveFirstOccurence = document.getElementById("outputRemoveFirst");
    //  var index = inputFirstOccurence.indexOf(characterToRemove);
    // var slice = inputFirstOccurence.slice(0,1);
    var removeFirstOccurenceResult = inputFirstOccurence.replace(characterToRemove, "")
    outputRemoveFirstOccurence.innerHTML = `The string "${inputFirstOccurence}" is in removed form "${removeFirstOccurenceResult}" `;
}


//program 12
//Write a js program to remove all occurrences of a character from string.
//function removeAllOccurence() {
//  var inputAllOccurence = document.getElementById("inputRemoveAllOccurence").value;
//var characterToRemoveAll = document.getElementById("inputCharacterToRemove").value;
//var outputAllOccurence = document.getElementById("outputRemoveAllOccurence");
//var remover = inputAllOccurence.replace(characterToRemoveAll , '');
//alert(remover)
//}

//program 13
//Write a js program to replace first occurrence of a character with another in a string

function replaceFirstOccurence() {
    var inputStringOfWords = document.getElementById("inputReplaceFirstString").value.toLowerCase();
    var inputTheWordWantToReplace = document.getElementById("TheWordYouWantToReplace").value;
    var inputTheWordWantToReplaceWith = document.getElementById("TheWordYouWantToReplaceWith").value;
    var outputReplaceFirstCharacter = document.getElementById("outputReplaceFirst");
    var replaceFirstCharater = inputStringOfWords.replace(inputTheWordWantToReplace, inputTheWordWantToReplaceWith)

    outputReplaceFirstCharacter.innerHTML = `In ${inputStringOfWords} the chracter ${inputTheWordWantToReplace}  has been replaced by ${inputTheWordWantToReplaceWith} and the result is ${replaceFirstCharater}`
}

//program 14 
//Write a js program to merge two array to third array.
function mergeArrays() {
    var inputArray1 = document.getElementById("inputArray1").value.split(",");
    var inputArray2 = document.getElementById("inputArray2").value.split(",");
    var mergerMyArray = [inputArray1, inputArray2];
    var outputArrayMerge = document.getElementById("outputArrayMerge");
    outputArrayMerge.innerHTML = `The Array "[${inputArray1}]" is merged into Array "[${inputArray2}]" and the 3rd array after merge is "[${mergerMyArray}]"`
}

//program 15
//Write a js program to find reverse of an array.
function arrayReverse() {
    var inputArrayReverse = document.getElementById("inputArrayReverse").value.split(",");
    var reversedArray = inputArrayReverse.reverse();
    var outputArrayReverse = document.getElementById("outputArrayReverse");
    outputArrayReverse.innerHTML = `The given array [${inputArrayReverse }] is reversed to [${reversedArray}]`
}

//program 16
//Write a js program to put even and odd elements of array in two separate array.

function arrayOddEven() {
      var inputEvenOdd = document.getElementById("inputOddEven").value.split(",");
      var outputEvenOdd = document.getElementById("outputOddEven");
      var newArrayEven = [];
      var newArrayOdd =  [];
      for (let index = 0; index < inputEvenOdd.length; index++) {
         if (inputEvenOdd[index] % 2 === 0 ) {
        newArrayEven.push([inputEvenOdd[index]]);      
         }
         else if (inputEvenOdd[index] % 2 !== 0 ) {
            newArrayOdd.push( [inputEvenOdd[index]]); 
        
         }  
         
      }
      outputEvenOdd.innerHTML = `As in given [${inputEvenOdd}] array the array of even numbers is [${newArrayEven}] and array of odd number is [${newArrayOdd}]`
}



//program 17
//Write a js program to search an element in an array.
function searchElement () {
    var inputSearch = document
}