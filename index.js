// 1 - masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 2) {
//     newArr.push(arr[i]);
//   }
// }
// console.log('arr:', arr);
// console.log('NewArr:', newArr);



// 2 - masala
// let arr = [1,2,3,4,5,6,7,8]
// let juft = 0
// let toq = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 ==0) {
//         juft += arr[i] 
//     }else{
//         toq += arr[i]
       
//     }
// }
// console.log(juft , "juft sonlar yig'indisi");
// console.log(toq , "toq sonlar yi'indisi");
// let yigindi = toq + juft
// console.log(yigindi, "toq son va juft sonning yig'indisi");
// let son = +prompt("son kiriting")
// console.log(son, "promptda kiritilgan son");
// let farq = Math.abs(son - yigindi)
// console.log(farq , "ular urtasidagi farq");



// 3 - masala
// let firstNumber = parseInt(prompt("Birinchi sonni kiriting:"));
// let secondNumber = parseInt(prompt("Ikkinchi sonni kiriting:"));
// if (firstNumber > secondNumber) {
//   console.log("Birinchi son ikkinchi sondan kichik bo'lishi kerak.");
// } else {
//   let sum = 0;
  
//   for (let i = firstNumber; i < secondNumber; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   console.log(`Berilgan oraliqdagi juft sonlar yig'indisi: ${sum}`);
// }



// 4 - masala
// function filterNumbers(...args) {
//    let numbersArray = [];
        
//      for (let i = 0; i < args.length; i++) {
//         if (typeof args[i] === 'number') {
//           numbersArray.push(args[i]);
//          }
//       }
        
//         return numbersArray;
//       }




// 5 - masala 
// function ObjectValues(obj) {
//     return Object.values(obj);
//   }
//   console.log(ObjectValues({aadd: 29, oss: "text", all: true})); 
//   console.log(ObjectValues({abs: 12, dd: null, dfd: [5]})); 
//   console.log(ObjectValues({})); 
  

// 6 - masala
// function ObjectKeys(obj) {
//     return Object.keys(obj);
//   }
//   function Array(arr, num) {
//     return arr.filter(function(item) {
//       return item !== num;
//     });
//   }
  
//   let sampleObject = {ds: 5, ad: "text", dsd: true};
//   console.log(ObjectKeys(sampleObject));
  
//   let sampleArray = [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4];
//   let filteredArray = removeNumberFromArray(sampleArray, 4);
//   console.log(filteredArray); 



//  7 - masala
// let arr = [1,2,3,4,1,2,1]
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === 1){
//         arr.splice(i,1)
//         i--
//     }
// }
// console.log(arr)





// 8 - masala
// let arr = [1,2,3,4,3,2,2,2,1,5]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 2) {
//         arr.splice(i, 1)
//         i--
//     }
    
// }
// console.log(arr);



// 111111111
// let obj1 = {firstname: "salom"}
// let obj2 = {secontname: "qanday"}
// let obj3 = {lastname: "zo'rmisan"}
// let natija = Object.assign(obj1, obj2, obj3)
// console.log(natija);



// let word = prompt("enter your text").toLocaleLowerCase()
// let unli = []
// let undosh = []
// const countLitter = (text) => {
//         for (const index of word) {
//             if (word == "a" || word == "o" || word == "u" || word == "e" || word == "i" || word == "o'") {
//                 unli ++
//             }else{
//                 undosh ++
//             }
//         }

// }
// console.log(unli ," unli harflar");
// console.log(undosh , "undosh harflar");




// let random = [parseInt(Math.random()*100)]

// if (random % 2 == 0) {
//     random.shift()
//     random.unshift(5)
// }else{
//     random.shift()
//     random.unshift(6)
// }
// console.log(random);



