let inputLocation = document.querySelector("#inputLocation")
let maxTemp = document.querySelector("#maxTemp")
let lowTemp = document.querySelector("#lowTemp")
let condition = document.querySelector("#condition")
let maxTemp1 = document.querySelector("#maxTemp1")
let lowTemp1 = document.querySelector("#lowTemp1")
let condition1 = document.querySelector("#condition1")
let todayMaxTemp = document.querySelector("#todayMaxTemp")
let todayMinTemp = document.querySelector("#todayMinTemp")
let todayCondition = document.querySelector("#todayCondition")
let locationName = document.querySelector("#locationName")
let todayConditionIcon = document.querySelector("#todayConditionIcon")
let conditionIcon1 = document.querySelector("#conditionIcon1")
let conditionIcon2 = document.querySelector("#conditionIcon2")
let day = document.querySelector("#day")
let day1 = document.querySelector("#day1")
let day2 = document.querySelector("#day2")
let month = document.querySelector("#mainMonth")
let dayNumber = document.querySelector("#dayNumber")

inputLocation.addEventListener("input", function () {
    countryLocation(inputLocation.value)

})

function countryLocation(cityLocation) {
    locationSearch(cityLocation)
}


async function locationSearch(country) {
    var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a4b88ac18ca14f3a9b5214329241306&q=${country}&days=3`);
    // console.log(response);
    var finalData = await response.json();
    // console.log(finalData.forecast);
    todayMaxTemp.innerHTML = finalData.forecast.forecastday[0].day.maxtemp_c
    todayMinTemp.innerHTML = finalData.forecast.forecastday[0].day.mintemp_c
    todayCondition.innerHTML = finalData.forecast.forecastday[0].day.condition.text
    locationName.innerHTML = finalData.location.name
    todayConditionIcon.setAttribute("src", finalData.forecast.forecastday[0].day.condition.icon)
    let todayDate = new Date(finalData.forecast.forecastday[0].date);
    let mainDay = todayDate.toLocaleDateString('en-US', { weekday: "long" })
    day.innerHTML = mainDay
    month.innerHTML = todayDate.toLocaleDateString("en-US", {month: "long"})
    dayNumber.innerHTML= todayDate.getDate()
    // console.log(todayConditionIcon.src);




    maxTemp.innerHTML = finalData.forecast.forecastday[1].day.maxtemp_c
    lowTemp.innerHTML = finalData.forecast.forecastday[1].day.mintemp_c
    condition.innerHTML = finalData.forecast.forecastday[1].day.condition.text
    conditionIcon1.setAttribute("src", finalData.forecast.forecastday[1].day.condition.icon)
    let todayDate1 = new Date(finalData.forecast.forecastday[1].date);
    let mainDay1 = todayDate1.toLocaleDateString('en-US', { weekday: "long" })
    day1.innerHTML = mainDay1



    maxTemp1.innerHTML = finalData.forecast.forecastday[2].day.maxtemp_c
    lowTemp1.innerHTML = finalData.forecast.forecastday[2].day.mintemp_c
    condition1.innerHTML = finalData.forecast.forecastday[2].day.condition.text
    conditionIcon2.setAttribute("src", finalData.forecast.forecastday[2].day.condition.icon)

    let todayDate2 = new Date(finalData.forecast.forecastday[2].date);
    let mainDay2 = todayDate2.toLocaleDateString('en-US', { weekday: "long" })
    day2.innerHTML = mainDay2

}


// http://api.weatherapi.com/v1/forecast.json?key=<YOUR_API_KEY>&q=07112&days=7

// a4b88ac18ca14f3a9b5214329241306