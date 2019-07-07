const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')
const chalk = require('chalk')
const address=process.argv[2]
if(!address){
    console.log('please provide address')
}else{
    geocode(address,(error,data)=>{
        if(error){
            return console.log(chalk.red(error))
        }
    
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error)
            {
                return console.log(chalk.red(error))
            }
            console.log(chalk.yellow.inverse(data.Location))
            console.log(chalk.green.inverse(forecastData))
          })
     })
}

