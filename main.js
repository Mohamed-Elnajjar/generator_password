const result_input = document.getElementById("result_input");
const uppercase_input = document.getElementById("uppercase_input");
const lowercase_input = document.getElementById("lowercase_input");
const symbols_input = document.getElementById("symbols_input");
const numbers_input = document.getElementById("numbers_input");
const length_input = document.getElementById("length_input");




let all = "";
const uppercase = 'ZXCVBNMLKJHGFDSAQWERTYUIOP';
const lowercase = 'zxcvbnmlkjhgfdsaqwertyuiop';
const symbols = '!@#$%^&*_)(';
const numbers = '0123456789';
let generator_password = "";

function generator_password_fun(){
	if(uppercase_input.checked){
		all += uppercase;
	}
	
	if(lowercase_input.checked){
		all += lowercase;
	}
	
	if(numbers_input.checked){
		all += numbers;
	}
	
	if(symbols_input.checked){
		all += symbols;
	}
	
	
	if(all.length > 0){
		const convert_to_array = all.split("");
		const length_all = convert_to_array.length;
		for(var i = 0; i < Number(length_input.value); i++){
		const random = Math.trunc((Math.random()) * parseInt(length_all));		
		generator_password += convert_to_array[random];
	}
		
	result_input.value = generator_password;
	all = "";
	generator_password = "";
		
	}else{
		window.alert("select type of generator_password");
	}
}


async function copy_password_fun() {
	await window.navigator.clipboard.writeText(result_input.value);
	window.alert("copyed");
}


function reset_password_fun() {
	[uppercase_input,lowercase_input,symbols_input,numbers_input].forEach(el => {
		el.checked = false;
	});
	result_input.value = "";
	length_input.value = 1;
}











