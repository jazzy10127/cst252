/**
 * Author:   jasmine hernandez
 * Created:   03/13/22
 *
 * license: public domain
 **/

 function sortingHat(name) {
  //get length of name
  var len = name.length;
  // do a mod 4 to get house
  var mod = len % 4;
  //if conditional to set houseStr to house
  if (mod == 0){
    houseStr = "Doctor Strange";
  } else if (mod == 1){
    houseStr = "Spiderman";
  } else if (mod == 2){
  	houseStr = "Black widow";
  } else if (mod == 3){
  	houseStr = "Gamora";
  }

  //return house txt
  return houseStr;
}

$("#my-button").click(function(){
var name = $("#input").val();
var house = sortingHat(name);
console.log(house);
$("#output").append("<p>" + house);
})

var name = "jasmine h";
var name = sortingHat(name);
console.log(house);
//output
