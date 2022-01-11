

/*Create an array of people objects with first name, last name, and age, then write a JavaScript
 function that takes in an array and console logs the first and last names of all the people. */

 var myStudents = [
   {

   firstName : "Alex",
   lastName : "Smith",
   age : 36
},
  {
   firstName : "Oskar",
   lastName : "Doe",
   age : 30
},
  {   
   firstName : "Ally",
   lastName : "Young",                                             
   age : 24,
   
}
];

/*declare a forEach() method that accepts the function as a parameter*/

/* the write a function that logs the first and last names*/


myStudents.forEach(getNames)


function getNames(item) {
   console.log(item.firstName + ' ' + item.lastName)

};







 