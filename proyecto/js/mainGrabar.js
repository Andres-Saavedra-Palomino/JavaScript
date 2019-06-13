let grabar = document.getElementById('grabarContacto');
document.getElementById('idusuario').value = localStorage.getItem('mipassword')
let pass = localStorage.getItem('mipassword')

let objContacto = new Contacto()
grabar.addEventListener("click", () => {


	let nombre = document.getElementById("nombre").value
	let apellido = document.getElementById("apellido").value
	let telefono = document.getElementById("telefono").value
	let dni = document.getElementById("dni").value
	let idusuario = document.getElementById("idusuario").value

	objContacto.agregarContacto(nombre, apellido, telefono, dni, idusuario)





})

