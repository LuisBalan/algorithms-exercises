// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. 

function timeConversion(s){
    let timeIdentifier = s.substring(8, 10);
    let hourPartString = s.substring(0, 2);

};