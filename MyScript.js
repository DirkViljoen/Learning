<!-- hide script from old browsers

//basic function to get the date
function getDate() {
	test = new Date()
	month = test.getMonth()
	month = (month * 1) + 1
	day = test.getDate()
	year = test.getFullYear()
	return day + "/" + month + "/" + year
} 

//repeats input twice
function myEcho(string) {
	return string + ' ' + string;
}
// end hiding script from old browsers -->