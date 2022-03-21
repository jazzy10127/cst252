/**
 * Author:   jasmine hernandez
 * Created:   03/20/22
 *
 * license: public domain
 **/

for (let i = 1; i <=200; i++) {
  var buildStr = "";
 if(i % 3 ==0) {
    buildStr += "Fizz";
  }
  if( i % 5 == 0) {
    buildStr += "Buzz!";
  }
  if( i % 7 == 0) {
    buildStr += "Boom!";
  }

  if(buildStr !=""){
    console.log(buildStr + "!");
    $("#output").append("<p>" + buildStr + "!");
  }
  else {
    console.log(i);
    $("#output").append("<p>" + i);
  }
  }
}
//output
