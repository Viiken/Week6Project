// 1.
console.log('1.')
age = [3, 9, 23, 64, 2, 8, 28, 93]
var sum = 0

console.log(age[age.length-1] - age[0]);
// last - first

for(let i = 0; i < age.length; i++){
    sum += i;
//going through and adding the ages
}
console.log(sum);
console.log()
//last - first after pushing a new age
age.push(45)
console.log(age[age.length-1] - age[0]);
console.log()

// 2.
console.log('2.')
names = ['Sam','Tommy','Tim', 'Sally','Buck','Bob']
var letters = 0

for(let i = 0; i < names.length; i++){
    letters += names[i].length;
// adding the lengths of the names together
}
console.log(letters/names.length)

namesconcat = '';
for(let i = 0; i < names.length; i++){
  namesconcat += (names[i] + " ");
}
// adding the names together with as space after
console.log(namesconcat)
console.log()

// 3. 
console.log('3.')
console.log('use the term nameOfArray.length -1')
console.log()

// 4. 
console.log('4.')
console.log('use nameOfArray[0]')
console.log()

// 5.
console.log('5.') 
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
nameLengths = []

for(let i = 0; i < names.length; i++){
  var number = 0
  for(let x =0; x < names[i].length; x++){
      number++;
    }
    nameLengths.push(number)
//getting the number of letters in each name and adding them to a new array
}
console.log(nameLengths)
console.log()

// 6.
console.log('6.')
function addArray (array){
    var answer = 0
    for(let i = 0; i < array.length; i++){
        answer += array[i]
    }
// sum of the above array
    console.log(answer)
}
addArray(nameLengths)
console.log()

// 7.
console.log('7.')
function concat (word, n){
    var result = '';
    for(n; n != 0; n--){
        result += word
    }
// empty string and then adding the word while n is not 0 counting down
    console.log(result)
}
concat('hi', 6)
console.log()

// 8.
console.log('8.')
function fullName (firstName, lastName){
    console.log(firstName + " " + lastName)
// string + string with a space string
}
fullName('Anthony', 'Stark')
console.log()

//9. 
console.log('9.')
function greaterThan100 (array){
    var sum = 0
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    if( sum > 100){
        return true;
    }
    else{
      return false;
    }
// finding lengths and then a boolean for if it is bigger than 100
}
array1 = [20,4,30,50,5]
array2 = [21,5,30,50,5]
console.log(greaterThan100(array1))
console.log()

// 10.
console.log('10.')
function average (a){
    var sum = 0
    for(let i = 0; i < a.length; i++){
        sum += a[i]
    }
    console.log(sum/a.length)
// average of all the numbers in an array
}
average(array2)
console.log()

// 11.
console.log('11.')
function greaterArray (a, b){
    var sum1 = 0
    var sum2 = 0
    for(let i = 0; i < a.length; i++){
        sum1 = sum1 +i
    }
    for(let i = 0; i < b.length; i++){
        sum2 = sum2 +i
    }
    if(sum1/a.length > sum2/b.length){
        return true;
    }
    else{return false}
// finding lengths and then a boolean of which is longer
}
console.log(greaterArray(array1, array2))
console.log()

// 12.
console.log('12.')
function willBuyDrink (isHotOutside, moneyInPocket){
    if(isHotOutside == true && moneyInPocket > 10.50){
        return true
    }
    else{return false}
// satisfying two statements to return something
}

console.log(willBuyDrink(true, 15));
console.log()

// 13.
console.log('13.');
// I wrote this funtion because it was the first thing i thought of
function isWorking(battery, power){
    if(battery > 10 && power == true){
        // similar to function 12 in that two requirements must be satisfied
        console.log("Begining startup sequence")
        // prints the message
    }
    else if(battery < 10){
        console.log("Low Battery")
        // if one of the requirements is not met
    }
    else{
        console.log("Error, no power")
        // not sure about the logistics of this one
    }
}
isWorking(2, true);

