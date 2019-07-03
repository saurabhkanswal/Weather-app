const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')
const address=process.argv[2]
if(!address){
    console.log('please provide address')
}else{
    geocode(address,(error,data)=>{
        if(error){
            return console.log(error)
        }
    
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error)
            {
                return console.log(error)
            }
            console.log(data.Location)
            console.log(forecastData)
          })
     })
}

