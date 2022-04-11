/**
 * Author:   jasmine hernandez
 * Created:   04/10/22
 *
 * license: public domain
 **/

 class Vehicle{
   constructor(make, model, year, color, extras ){
   this.make = make;
   this.model = model;
   this.year = year;
   this.color = color;
   }
   info(){
     return "brand: " + this.make + "model: " + this.model + "year: "+
     this.year + "color" + this.color;
   }
 }

 myVehicle = new Vehicle("tesla" , "model s" , 2021 , "red" );
console.log(myVehicle.info());
