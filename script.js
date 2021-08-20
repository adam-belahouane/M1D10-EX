  
let x = "John"
let y = "Doe"

console.log(x + "<>" + y)

const me = {
    name:"Adam",
    surname:"Belahouane",
    email:"Adam_belahouane@outlook.com"
}
delete me.email

let array = []

for (let i = 1; i <= 10; i++) {
  array.push("string" + i)
}
console.log(array)

for (let str of array) {
    console.log(str)
  }

let randomNumbers = [];
for (let i = 1; i <= 100; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100 + 1))
}

console.log(randomNumbers)

function getMaxMin(numbers) {
    let max = numbers[0]
    let min = numbers[0]
  
    for (let number of numbers) {
      max = number > max ? number : max
      min = number < min ? number : min
    }
  
    return { max, min }
  }
  
  console.log(getMaxMin(randomNumbers));

  let arrayOfArrays = []

for (let i = 0; i < 10; i++) {
  let innerArray = []
  for (let j = 0; j < 10; j++) {
    innerArray.push(Math.floor(Math.random() * 10 + 1))
  }
  arrayOfArrays.push(innerArray)
}

function longestArray(array1, array2) {
    return array1.length >= array2.length ? array1 : array2
  }
  
  function Sum(arr1, arr2) {
    let sum1 = 0
  
    for (let number of arr1) {
      sum1 += number
    }
  
    let sum2 = 0
  
    for (let number of arr2) {
      sum2 += number
    }
  
    return sum1 >= sum2 ? sum1 : sum2;
  }




  const container = document.getElementById("container");

  const allTd = document.querySelectorAll("td")

  const changeH1 = function (newH1) {
    const h1 = document.querySelector("h1");
    h1.innerText = newH1
  };

  const createNewRow = function(){
      newRowNode = document.createElement("tr")
      table = document.querySelector("tbody")
      table.appendChild(newRowNode)
      for (let i = 0; i < 5; i++) {
        const td = document.createElement("td");
        td.innerText = i + 1;
        newRowNode.appendChild(td)
      }
  }

  const addClassToRow = function(){
      const allTrs = document.querySelectorAll("tr")
      for(i=0; i < allTrs.length; i++){
          allTrs[i].classList.add("test")
      }

  }
  const addRedBackgroundToLinks = function(){
      const allLinks = document.querySelectorAll("a")
      for(i=0; i < allLinks.length; i++){
          allLinks[i].style.backgroundColor = "red"
      }
  }
  window.onload = function () {
    console.log("Page loaded")
  }
  const createNewListItems = function () {
    const ul = document.querySelector("ul")
    const li = document.createElement("li")
    li.innerText = "hey"
    ul.appendChild(li)
  }
  const emptyList = function () {
    const ul = document.querySelector("ul")
    ul.innerHTML = ""
  }
  