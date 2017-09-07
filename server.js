const express = require("express"); 
const app = express(); 
const moment = require("moment"); 

app.get("/", function(req, res){
  res.sendFile(__dirname + "/views/index.html"); 
}); 

  
function monthName (month){
  const mapObj = {
    0: "January", 
    1: "February", 
    2: "March", 
    3: "April", 
    4: "May", 
    5: "June", 
    6: "July", 
    7: "August", 
    8: "September", 
    9: "October", 
    10: "November", 
    11: "December"
  }
  return mapObj[month]
}


app.get("/", function(req, res){
  res.send("")
})

app.get(`/:id`, function(req, res){
  const str = req.params.id;  
  if(!str.match(/\D/gi)){ //strictly digits bro
    console.log("first"); 
    const unix = Number(str);   
    const day = moment.unix(unix);     
    const natural = `${monthName(day.month())} ${day.date()}, ${day.year()}`
    res.send({unix, natural}); 
  } else if (moment(str).isValid()){ //everything besides digits
    console.log("second"); 
    const day = moment(str)
    const unix = day.unix();
    const natural = `${monthName(day.month())} ${day.date()}, ${day.year()}`
    res.send({unix, natural});  
  } else { //all the left over c**p
    console.log("third"); 
    res.send({unix: null, natural: null}); 
  }
}); 


app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + process.env.PORT);
});


 