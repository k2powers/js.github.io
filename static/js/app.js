// from data.js
var tableData = data;
// Select the Filter Table button
var button = d3.select(".btn-default");

button.on("click", function() {

// Prevent the page from refreshing
d3.event.preventDefault();

// // Select 
var tableBody = d3.select('tbody')

// //Clear previous entries
tableBody.html("")

// Select the input element and get the raw HTML node (box where date is entered)
var inputElement = d3.select("#datetime");
// Get the value property of the input element (date entered)
var inputValue = inputElement.property("value");
console.log(inputValue)
// Use the input date to pull data from the table
// Loop through data, append one row for each data item in data file
var tableDataForDate = tableData.filter((value) => value.datetime === inputValue)
console.log(tableDataForDate);

tableDataForDate.forEach((tableDataForDate) => {
    var row = tableBody.append('tr')
        Object.entries(tableDataForDate).forEach(([key,value]) => {
            var cell = row.append('td')
            cell.text(value)
        })  
    });
}); 