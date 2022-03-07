/**
 * Author:   jasmine hernandez
 * Created:   03/08/22
 *
 * license: public domain
 **/

 var button = document.getElementById('my-button');
 button.addEventListener('click', function() {
   inputValue = document.getElementById('my-input').value;
   console.log("You input:", inputValue);
 });
//output
