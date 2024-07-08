const request=require('request')

const forecast=(latitude, longitude, callback) => {
    const url='http://api.weatherstack.com/current?access_key=e77e01e61ed600911dbe4572500d43ba&query=' + latitude +',' + longitude +'&units=f'
    request({url:url, json:true}, (error,response) => {
        if(error) {
            callback('Unable to connect to weather services',undefined)
        }else if(response.body.error){
            callback('Unable to find the location',undefined)
        }else{
            callback(undefined,response.body.daily.data[0].summary+'It is currently'+response.body.currently.temperature+' degrees out. There is a'+response.body.currently.precipProbality+'% chance of rain'
                
            )

        }

    }) 

}
 

module.exports=forecast
