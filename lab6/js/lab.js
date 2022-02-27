/**
 * Author:    Name
 * Created:   11.05.2009
 *
 * (c) Copyright by Blub Corp.
 **/

 // Define variables

 var mytransport = ["hondai-elantra", "MST", "american-airlines", "lyft", "allstar-adidas"];

 var myMainRide = {
    make: "Hondai",
    model: "elantra",
    color: "red",
    year: 2020,
    age: function() {
        return 2022 - this.year;
    }
}

// output
document.writeln("Kinds of transportation I use: ", mytransport, "</br>";
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
