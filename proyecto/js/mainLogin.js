let usuario;

document.getElementById('password').addEventListener('keyup', () => {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("grabar").click();
	}
})


//localStorage.clear()
document.getElementById('grabar').onclick = () => {
	usuario = new Usuario()
	let nombre = document.getElementById("usuario").value;
	let password = document.getElementById("password").value;

	usuario.validar(nombre, password);

}
