let btn = document.getElementById("enviar");

document.getElementById("sortear").value = 1;
document.getElementById("numeros").value = 1;
document.getElementById("quantidade").value=100;

btn.addEventListener("click", () => {
	let numero = parseInt(document.getElementById("sortear").value);
	let valor_min = parseInt(document.getElementById("numeros").value);
	let valor_max = parseInt(document.getElementById("quantidade").value);
	let span = document.getElementById("spn");

	if(!isNaN(numero) && !isNaN(valor_min) && !isNaN(valor_max) ) {
		let res = " ";
		for(let i=0; i<numero; ++i) {
			let rand = Math.floor(Math.random() * (valor_max - valor_min + 1)) + valor_min;
			res += rand + " ";
		}
		span.innerHTML = "<div class='num'><p>" + res.trim() + "</p></div>";
	}
});