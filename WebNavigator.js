const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();

// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = 'https://www.codecademy.com/';
let finish = false;
let showBack = false;
let showNext = false;

// ------------------------------
// Helper Functions
// ------------------------------
function showCurrentPage(action) {
  console.log(`User action is ${action}`);
  console.log(`The current page is ${currentPage}`);
  console.log(`The top element of backPages is ${backPages.peek()}`);
  console.log(`The top element of nextPages is ${nextPages.peek()}`);
}

function newPage(page) {
  backPages.push(currentPage);
  currentPage = page;
  while(!nextPages.isEmpty()) {
    nextPages.pop();
  }
  showCurrentPage('Load New Page: ');
}

function backPage() {
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage('Load Previous Page: ')
}

function nextPage() {
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage('Load Next Page: ');
}

/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface
// ------------------------------
showCurrentPage('Default: ');

while(!finish) {
  let instructions = baseInfo;

  if (!backPages.isEmpty()) {
    instructions += `, ${backInfo}`;
    showBack = true;
  } else {
    showBack = false;
  }

  if (!nextPages.isEmpty()) {
    instructions += `, ${nextInfo}`;
    showNext = true;
  } else {
    showNext = false;
  }

  instructions += `, ${quitInfo}`;
  
  const answer = prompt(question);
  const lowerCaseAnswer = answer.toLowerCase();
  
  if (lowerCaseAnswer !== 'b' && lowerCaseAnswer !== 'n' && lowerCaseAnswer !== 'q') {
    newPage(lowerCaseAnswer);
  } else if (lowerCaseAnswer === 'b' && showBack) {
    backPage();
  } else if (lowerCaseAnswer === 'n' && showNext) {
    nextPage();
  } else if (lowerCaseAnswer === 'b') {
    console.log('There is no history to go back to.');
  } else if (lowerCaseAnswer === 'n') {
    console.log('There is no page to go forward to');
  } else if (lowerCaseAnswer === 'q') {
    console.log('quiting now...');
    finish = true;
  } else {
    console.log('Please enter a valid command.');
  }
}