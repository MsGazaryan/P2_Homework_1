var num1 = +prompt('Insert number 1');
var num2 = +prompt('Insert number 2');
var action;
var result;

if(num1 > num2){
	var action = prompt('Choose action(+,-,*,/)');
	if(action == '+'){
		result = num1 + num2;
		alert(result);
	}
	else if(action == '-'){
		result = num1 - num2;
		alert(result);
	}
	else if(action == '*'){
		result = num1 * num2;
		alert(result);
	}
	else if(action == '/'){
		result = num1 / num2;
		alert(result);
	}
}
else{
	alert('Something went wrong...');
}

var repeat = confirm("Let's try again?");

if(true){
	var num1;
	var num2;
	var num1 = +prompt('Insert number 1');
	var num2 = +prompt('Insert number 2');
		if(num1 > num2){
			var action = prompt('Choose action(+,-,*,/)');
			if(action == '+'){
				result = num1 + num2;
				alert(result);
			}
			else if(action == '-'){
				result = num1 - num2;
				alert(result);
			}
			else if(action == '*'){
				result = num1 * num2;
				alert(result);
			}
			else if(action == '/'){
				result = num1 / num2;
				alert(result);
			}
		}
		else{
			alert('Something went wrong...');
		}
		
		var repeat = confirm("Let's try again?");
			if(true){
				var num1 = +prompt('Insert number 1');
				var num2 = +prompt('Insert number 2');
					if(num1 > num2){
						var action = prompt('Choose action(+,-,*,/)');
							if(action == '+'){
								result = num1 + num2;
								alert(result);
							}
							else if(action == '-'){
								result = num1 - num2;
								alert(result);
							}
							else if(action == '*'){
								result = num1 * num2;
								alert(result);
							}
							else if(action == '/'){
								result = num1 / num2;
								alert(result);
							}
						alert('Thank you! Have a nice day!');
					}
					else{
						alert('Something went wrong...');
					}
			}
			else{
				alert('Thank you! Have a nice day!');
			}
}
else{
	alert('Thank you! Have a nice day!');
}