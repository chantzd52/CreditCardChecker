const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

function validateCred (arr) {
  let everyOther = [];

  let lastElement = arr[arr.length - 1]; // Store the last element in the array before removing it
  
  arr.pop(); // Remove the last element from the array
 
  arr.reverse(); // reverse the array
  
  for (let i = 0; i < arr.length; i++ ) { // Loop through the array.
    
    if (i % 2 == 0) { // double every other digit in the array including the first.
      arr[i] *=  2;
    };
    
    if (arr[i] > 9) { // if a number in the array is greater than 9 it is then subtracted by 9. 
      arr[i] -= 9; 
    };
  }; 
 
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); //add the array together.

  sum += lastElement;  // adds the last element of the array that we stored earlier back to the array.
 
  if (sum % 10 == 0) {  // checks if the sum of the array when divided by 10 has a remainder.
    return "valid"; 
  } else {
    return "invalid";
  }  
};

function findInvalidCards(cards) { 
  let invalidCards = []; // stores the cards that are determind to be invalid.
  for (let i = 0; i < cards.length; i++) { 
    let originalCard = cards[i].slice(); // stores the value of the original array.
    if (validateCred(cards[i]) === "invalid") { // passes the arrays within cards in to the validateCred function and checks for ones that return invalid.
      invalidCards.push(originalCard); //pushes the original array to the invalidCards array.
    }
  }
  return invalidCards;
};

  function idInvalidCompanies(invalidCards) {
    let companies = [];
    for (i = 0; i < invalidCards.length; i++) {
      if (invalidCards[i][0] == 3) {
        companies.push("Amex");
      };
      if (invalidCards[i][0] == 4) {
        companies.push("Visa");
      };
      if (invalidCards[i][0] == 5) {
        companies.push("Mastercard");
      };
      if (invalidCards[i][0] == 6) {
        companies.push("Discover");
      };
    };

    const invalidCompanies = companies.filter((item, index) => companies.indexOf(item) === index); //filters duplicate company names.
    return invalidCompanies;
  };

  //console.log(findInvalidCards(batch));
  
  console.log(idInvalidCompanies(findInvalidCards(batch)));