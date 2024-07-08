const request=require('request')

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiaGFyc2hhMDYwMiIsImEiOiJjbHk3MHVmZzEwMHFxMmpzYjM3NTFuMmU5In0.h5fLJIoz7AQVYfaAmQUfUg&limit=1'
    request({url:url, json:true}, (error,response) => {
        if(error) {
            callback('Unable to find the location',undefined)
        }else if(response.body.features.length===0){
            callback('Unable to find the location, try another location',undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location:response.body.features[0].place_name
            })

        }

    })

}

module.exports= geocode;
