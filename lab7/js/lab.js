/**
 * Author:   jasmine hernandez
 * Created:   02/22/22
 *
 * license: public domain
 **/


 function sortUserName() {
   var userName = window.prompt("Please enter name to continue...");
   console.log("userName =", userName);

   var nameArray = userName.split('');
   console.log("nameArraySort =", nameArray);

   var nameArraySort = nameArray.sort();
   console.log("nameArraySort =", nameArraySort);

   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);

   return nameSorted;
 }

 document.writeln("This looks better: ",
  sortUserName(), "</br>")
 //output
 //document.writeln("Kinds of transportation I use: ", mytransport, "</br>";
 //document.writeln("My Main Ride: <pre>",
   //JSON.stringify(myMainRide, null, '\t'), "</pre>");
