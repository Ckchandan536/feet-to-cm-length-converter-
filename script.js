var form = document.querySelector('form');
form.addEventListener('submit', function(e){
//grab content form input
var feet = document.querySelector('#ft');
var results = document.querySelector('#results');
e.preventDefault();
feet = parseInt(feet.value);
if (isNaN(feet)){
results.textContent = "Please enter a valid number!";
}
else if (feet <= 0 ) {
results.textContent = "Please enter a feet value > 0";
}
else {
var converted_value = feet * 30.48;
results.textContent = `${converted_value} cm`;
document.querySelector('#ft').value = '';
document.querySelector('#results').value = '';
}
})
