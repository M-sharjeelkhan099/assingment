  // Q1
  const add10 = createAdder(10);
const result = add10(20); // Returns 30

//Q2 function searchArray(arr, value) {
  

  if (arr.length === 0) {
    return false;
  }
  
  // Recursive case: check the first element of the array
  if (arr[0] === value) {
    return true;
  } else {
    // If the value is not found in the first element, search the rest of the array recursively
    return searchArray(arr.slice(1), value);
  

const arr = [1, 2, 3, 4, 5];
const value = 3;
const isFound = searchArray(arr, value);
console.log(isFound); // Returns true
const arr = [1, 2, 3, 4, 5];
const value = 6;
const isFound = searchArray(arr, value);
console.log(isFound); // Returns false

}

//Q3
 function addParagraph(text) 
{
  const newParagraph = document.createElement('p'); 
  newParagraph.textContent = text; 
  document.body.appendChild(newParagraph); 
  addParagraph('This is a new paragraph.');

}

//Q4
function addListItem(text)
 {
  const list = document.querySelector('ul'); 
  const newListItem = document.createElement('li'); // Create a new list item element
  newListItem.textContent = text; 
  list.appendChild(newListItem); 
  addListItem('This is a new list item.');

}

//Q5
 function changeBackgroundColor(element, color) 
{
  element.style.backgroundColor = color;
  const myElement = document.querySelector('.my-element'); // Get the element you want to change
changeBackgroundColor(myElement, 'red'); // Change the background color to red

}
//Q6
function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));

const myObject = { foo: 'bar' };
saveToLocalStorage('myKey', myObject);
}

//Q7
function getFromLocalStorage(key) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;

const myObject = getFromLocalStorage('myKey');
console.log(myObject);
}

//Q8
function saveObjectToLocalStorage(object) {
  for (const [key, value] of Object.entries(object)) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  const retrievedObject = {};
  for (const key of Object.keys(object)) {
    retrievedObject[key] = JSON.parse(localStorage.getItem(key));
  }
  return retrievedObject;
}
  const myObject = { foo: 'bar', baz: 42 };
const retrievedObject = saveObjectToLocalStorage(myObject);
console.log(retrievedObject);


