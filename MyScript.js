<!-- hide script from old browsers
document.getElementById("demo").innerHTML="<s>My random paragraph</s> Hell no! javascript bitch."

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

function myAlert(event) {
  alert("CLICK! MOTHERFUCKER");
};
// end hiding script from old browsers -->
