// variable
var time = '10:15pm';
var bookPrice = 150;
var isWhiteColor = false;


//array
var partners = ['sajid', 'mojid', 'nojid', 'lajit'];
var elementCount = partners.length;
// specific variable found
var nojidIndex = partners.indexOf('nojid');
// variable add into array
partners.push('kajit');
// last variable out from array
partners.pop()
// what store into 3rd place in array
var secondIndex = partners[3];



//condotionals
if (bookPrice < 120) {
  console.log('I will buy this book')
}
else {
  console.log('Mama kichu discound den na, apni na mama')
}



// while loop
var i = 0;
while (i <= 17) {
  console.log(i);
  i++;
}


// for loop
for (var i = 0; i <= 17; i++) {
  console.log(i);
}


// function
function isMoonUp(time) {
  if (time >= 19 && time <= 5) {
    return true;
  }
  return false;
}

var moonStatus = isMoonUp(21);


// let const
// value of the variable could change
let price = 27;
price = 29;
price = 31;


// value of the variable will not change 
const myName = 'lal e lal mr. Helal';
console.log(myName);
