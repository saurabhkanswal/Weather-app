var request = require('request')
const forecast = (latitude,longitude,callback) =>{
    const url= 'https://api.darksky.net/forecast/0ff265ec300463394f2dd39f6f806c46/'+latitude+','+longitude+''
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('you are not connected to internet or unable to access darksky api',undefined)
        }else if(response.body.error){
            callback('latitude or longitude are not correct',undefined)
        }else{
            callback(undefined,response.body.daily.data[0].summary+'it is currently '+response.body.currently.temperature+' degree out . there is a '+response.body.currently.precipProbability+'% chance of rain.')
        }
    })
   
}

module.exports = forecast