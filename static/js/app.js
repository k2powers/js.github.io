// Select the Filter Table button
var button = d3.select(".btn-default");

// from data.js
var tableData = data;

// Get a reference to where the table should go
var tableBody = d3.select('tbody')

button
.on("click", function() {

// Prevent the page from refreshing
d3.event.preventDefault();
var tableBody = d3.select('tbody')

//Clear previous entries
tableBody.html("")

// Select the input element and get the raw HTML node (box where date is entered)
var inputElement = d3.select("#datetime");
// Get the value property of the input element (date entered)
var inputValue = inputElement.property("value");
console.log(inputValue)
// Use the input date to pull data from the table
d3.select("h1>span").text(inputValue);
// Loop through data, append one row for each data item in data file
tableData
    .filter((ufoSitings)=> {
        return ufoSitings.datetime = inputValue
    })
    .forEach((ufoSitings) => {
    var row = tableBody.append('tr')
        Object.entries(ufoSitings).forEach(([key,value]) => {
            var cell = tableBody.append('td')
            cell.text(value)
        })
    });
});