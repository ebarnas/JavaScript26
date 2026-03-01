const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let holidays = document.getElementById("holidays");

for (let i = 0; i < months.length; i++) {
    let month = months[i];
    holidays.innerHTML += "<p>" + month + "</p>";

    switch (month){
        case "January":
            holidays.innerHTML += "New Year's Day<br>";
            holidays.innerHTML += "Martin Luther King Jr. Day<br>";
            break;
        case "February":
            holidays.innerHTML += "Valentine's Day<br>";
            holidays.innerHTML += "Groundhog Day<br>";
            break;
        case "March":
            holidays.innerHTML += "St. Patrick's Day<br>";
            holidays.innerHTML += "Spring Break<br>";
            break;
        case "April":
            holidays.innerHTML += "April Fool's Day<br>";
            holidays.innerHTML += "Easter<br>";
            break;
        case "May":
            holidays.innerHTML += "Mother's Day<br>";
            holidays.innerHTML += "Memorial Day<br>";
            break;
        case "June":
            holidays.innerHTML += "Father's Day<br>";
            holidays.innerHTML += "Juneteenth<br>";
            break;
        case "July":
            holidays.innerHTML += "Independence Day<br>";
            holidays.innerHTML += "Parents' Day<br>";
            break;
        case "August":
            holidays.innerHTML += "National Chocolate Chip Cookie Day<br>";
            holidays.innerHTML += "Women's Equality Day<br>";
            break;
        case "September":
            holidays.innerHTML += "Labor Day<br>";
            holidays.innerHTML += "Patriot Day<br>";
            break;
        case "October":
            holidays.innerHTML += "Columbus Day<br>";
            holidays.innerHTML += "Halloween<br>";
            break;
        case "November":
            holidays.innerHTML += "Veterans Day<br>";
            holidays.innerHTML += "Thanksgiving<br>";
            break
        case "December":
            holidays.innerHTML += "Christmas Day<br>";
            holidays.innerHTML += "New Year's Eve<br>";
            break;
    }
}