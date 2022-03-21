/**
 * Author:   jasmine hernandez
 * Created:   03/20/22
 *
 * license: public domain
 **/

for (let i = 1; i <=200; i++) {
  var buildStr = "";
 if(i % 3 ==0) {
    buildStr += "Fizz!"
    oneLongString + = num + "Fizz!<br>";
    $("#output").html(oneLongString);
  }
  if( i % 5 == 0) {
    buildStr += "Buzz!";
    oneLongString + = num + "Buzz!<br>";
    $("#output").html(oneLongString);
  }
  if( i % 7 == 0) {
    buildStr += "Boom!";
    oneLongString + = num + "Boom!<br>";
    $("#output").html(oneLongString);
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
