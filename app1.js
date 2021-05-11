const gc = require('./utils/geocode.js');
const forecast = require('./utils/forecast');


// gc('philedelphia',(error,data)=>{
//    console.log('Error ',error);
//    console.log('Data',data);
//    forecast(37.18,-122.4246, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })

// })

const address = process.argv[2];
if(!address){
   console.log('please provide the address!');
}else{
   gc(process.argv[2],(error,{latitude,longitude,location})=>{
   if(error){
      return console.log(error);
   }
   forecast(latitude, longitude, (error, forecastData) => {
      if(error){
         return console.log(error);
      }
    console.log(latitude , longitude , location);
    console.log(forecastData);
  })

})
}
