//Constants and Variables


const API_KEY = ""
const BASE_URL =  "https://edmtrain.com/api/events?"
//Example API CAll - Event Search API.
// https://edmtrain.com/api/events?locationIds=36,94&client=324716fa-68fa-4c4d-8ae2-d6e384294662
// Nearby Events API.
// events?latitude=33.962&longitude=-118.358&state=California&client=
// Locations API.
// locations?state=Nevada&city=Las%20Vegas&client=
// API Errors.
// {
//     "data": [],
//     "message": "Location not found",
//     "success": false
//  }

//Cached Elements References


// Functions

//string uppercase
const capitalize = (string) =>{
    return string[0].toUpperCase() + string.substring(1)
}

//replace space with +
let test = "this test"
let replace = test.replace(/\s/g ,'+')

const timePSD = (epoch) => {
    let time = epoch * 1000
    let curDate = new Date(time)
    var pstDate = curDate.toLocaleString("en-US", {timeZone: "America/Los_Angeles"})
    let parseTime = (pstDate.split(', ')[1] + " PST")
    return parseTime
}
// console.log(timePSD(1629939676))

// API Call

fetch(`${BASE_URL}location${$input.val()}&client=${API_KEY}`)