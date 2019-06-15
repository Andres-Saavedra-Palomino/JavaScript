let btnUAC = document.getElementById('usuarioAContacto')
let cabecera = document.getElementById('cabeceraNombre')
let user = localStorage.getItem('miusuario')
let pass = localStorage.getItem('mipassword')
let listaContactos = document.getElementById('listaContactos')


cabecera.textContent = user

btnUAC.addEventListener('click', () => {
	window.location = './agregarContacto.html'
})
cerrarSession = () => {
	window.location = './index.html'
	localStorage.clear()
}
listarContactos = () => {
	localStorage.contactodni = ""
	let formdata = new FormData()
	formdata.append('dni', pass)
	let listaC_url = 'https://sminnova.com/restapitrujillo/contacto/lista'
	let config = {
		method: 'POST',
		body: formdata
	}
	fetch(listaC_url, config)
		.then(data => { return data.json() })
		.then((data) => {
			let esquema = ""
			if (data == "undefined") {
				listaContactos.innerHTML = `<li class="row mt-3" style="background-color: #f1c40f">
				<div class="col m-auto"><br>No Tiene Contactos D:<br></div></li>`
			}
			for (let i in data) {
				if (i >= 0) {
					let a = data[i].nombre
					let b = data[i].apellido
					let c = data[i].dni
					esquema += `<li class="row mt-3  rounded" style="background-color: #f1c40f">
					<button type="button" class=" p-1 col-2 col-sm-3 btn btn-danger col-xs-12" onclick="ppagar('${c}')">Pagar</button><div class="col-10 col-sm-6 col-xs-12 ">${a.padEnd(30, " ")}<br>\n${b.padEnd(30, " ")}</div></li>`
				}
			}
			listaContactos.innerHTML = esquema
		})
}
listarContactos()

function ppagar(dni) {

	localStorage.contactodni = dni
	window.location = "monto.html"
}
