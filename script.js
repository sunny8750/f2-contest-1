/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
let arr1 = [
  { id: 1, name: "karan", age: "19", profession: "manager" },
  { id: 2, name: "sumit", age: "28", profession: "sr.manager" },
  { id: 3, name: "vivek", age: "25", profession: "IT Manager" },
];
let arr2 = [
  { id: 1, name: "anand", age: "27", profession: "FSO" },
  { id: 2, name: "gayatri", age: "23", profession: "Trainer" },
  { id: 3, name: "sandeep", age: "21", profession: "VP" },
];



function PrintDeveloperswithMap(item) {
 arr.map(function(arr){
  if(arr.profession=='developer'){
    console.log(arr)
  }
 })

}

function PrintDeveloperbyForEach() {
  arr.forEach((arr)=>{
    if(arr.profession=='developer'){
      console.log(arr)
    }
  })
}

function addData() {
  arr.push({id:4,name:"susan",age:"20",profession:"intern"})
  console.log(arr);
}

function removeAdmin() {
  arr.pop()
  console.log(arr);
}

function concatenateArray() {
  let x =arr1.concat(arr2);
  console.log(x);
}
