const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

geocode('Boston', (error,data) => {
    console.log('Error',error)
    console.log('Data',data)
    forecast(data.latitude, data.longitude, (error,data) => {
        console.log('Error',error)
        console.log('Data',data)
    })


})






