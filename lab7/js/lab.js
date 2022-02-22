/**
 * Author:    Name
 * Created:   11.05.2009
 *
 * (c) Copyright by Blub Corp.
 **/

 // sortUserName - a function user input and sort the letters
 // of their name
 function sortUserName() {
   var userName = window.prompt("Please enter name to continue...");
   console.log("userName =", userName);
   // split string to array
   var nameArray = userName.split('');
   console.log("nameArray =", nameArray);
   // sort the array
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort =", nameArraySort);
   // join array back to a string
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);
   //  userName.toLower().split("").sort().join("")
   return nameSorted;
 }

 //output
 document.writeln("This looks better :)")
  sortUserName(), "</br>";
