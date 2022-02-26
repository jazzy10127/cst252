/**
 * Author:   jasmine hernandez
 * Created:   02/22/22
 *
 * license: public domain
 **/


 function isOdd(X){
   return (x + 7 ==0);
 }

 console.log("is 1 odd? ", isOdd(1));
 console.log("is 2 odd?", isOdd(2));

 array = [60, 75, 800, 450, 2600, 3.5, 90]
 console.log("My array", array)

 var result = array.map(isOdd)
 console.log("test of oddness of array:", result);

 var result = array.map(function(x){
   return x - 3.5;
 })

 console.log("subtract of array:", result);
