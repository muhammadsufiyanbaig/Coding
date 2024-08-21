// let user = {
//     name: "Sufiyan",
//     age: 18,
//     isAdmin: true
//   };
//   for (let key in user) {
//     console.log( key );
//         console.log( user[key] ); 
//   }

// let codes = {
//     "5": "Mariyam",
//     "4": "Minhaj",
//     "3": "Anus",
//     "1": "Sufiyan",
//     "2": "Hasan"
//   };
  
//   for (let code in codes) {
//     console.log(code);
//   }


// let user = {};
// user.name = "sufiyan";
// user.surname = "Baig";
// user.far= 'Muhammad Saleem Baig';
// user.class = '12th';
// delete user.class;
// console.log(user);

// function isEmpty(obj) {
//     for (let key in obj) {
//       return false;
//     }
//     return true;
//   }
//   let schedule = {};
//   console.log( isEmpty(schedule) );
//   schedule["8:30"] = "get up";
//   console.log( isEmpty(schedule) );

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);

function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  let a = multiplyNumeric(menu);
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };
  console.log(a);
