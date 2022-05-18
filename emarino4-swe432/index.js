//check if div Day is a valid day
function isValidDay(day,month,year) {
    if (day<1 || day>31) {
        alert("Day exceeds range");
        return false;
    }
    //check if day is not a number
    if (isNaN(day)) {
        alert("Day is not an integer");
        return false;
    }
    //check if year is not an integer
    if (isNaN(year)) {
        alert("Year is not an integer");
        return false;
    }
    //check if year is a negative integer
    if (year<0) {
        alert("Year is negative");
        return false;
    }
    if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (day > 30) {
            alert("Month has only 30 days");
            return false;
        }
    }
    if (month == 2) {
        if (day > 29) {
            alert("Month has only 29 days");
            return false;
        }
    }
    //check if year is a leap year
    if (month == 2 && day == 29) {
        //if not on a leap year
        if (year % 4 != 0) {
            alert("Not a leap year");
            return false;
        }
        //if on a leap year
        if (year % 100 == 0) {
            if (year % 400 != 0) {
                alert("Not a leap year");
                return false;
            }
        }
    }
    return true;
}
function validateForm(){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    //get month from form called dateForm
    let month = document.forms["dateForm"]["month"].value;
    let day = document.forms["dateForm"]["day"].value;
    let year = document.forms["dateForm"]["year"].value;
    let format = document.forms["dateForm"]["format"].value;
    console.log("month: " + month);
    console.log("day: " + day);
    console.log("year: " + year);
    console.log("format: " + format);
    
    //check that all values are not empty
    if (month == "" || day == "" || year == "" || format == "") {
        alert("Please fill in all fields");
        return false;
    }
    //check that day is a valid day
    if (!isValidDay(day, month,year)) {
        return false;
    }
    //generate output
    let output = "";
    //switch statement to determine format
    switch (format) {
        case "1"://DD/MM/YYYY
            output = day + "/" + month + "/" + year;
            break;
        case "2"://MM/DD/YYYY
            output = month + "/" + day + "/" + year;
            break;
        case "3"://DD/MM/YY
            output = day + "/" + month + "/" + (year%100);
            break;
        case "4"://MM/DD/YY
            output = month + "/" + day + "/" + (year%100);
            break;
        case "5"://MONTH DAY YEAR
            output = months[month-1] + " " + day + " " + year;
            break;
        case "6"://DAY MONTH YEAR
            output = day + " " + months[month-1] + " " + year;
            break; 
        case "7"://DD-MON-YY
            output = day + "-" + mon[month-1] + "-" + (year%100);
            break;
        case "8"://DD-MON
            output = day + "-" + mon[month-1];
            break;
        default:
            alert("Please enter a valid format");
            return false;
            break;
    }
    document.getElementById("output-text").innerHTML = output;
    document.getElementById("output").style.display = "block";

    //OPTIONAL REQUIRED ELEMENTS

    let dayofweek = new Date(year,month,day).getDay();
    console.log("day of week: " + dayofweek);
    week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("Day-of-week").innerHTML = week[dayofweek+1];
    
    //get number of days since the start year until the date(year,month,day)
    let start = new Date(year,0,1);
    let end = new Date(year,month-1,day);
    let diff = end - start;
    let days = Math.floor(diff/1000/60/60/24);
    console.log("days: " + days);
    document.getElementById("Day-of-year").innerHTML = days+1;
    
    return false
}