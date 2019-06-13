let pass = localStorage.getItem('mipassword')
let usuario = localStorage.getItem('miusuario')
let dniContacto = localStorage.getItem('contactodni')
console.log(usuario)
console.log(pass)
console.log(dniContacto)
document.getElementById('usuario').textContent = usuario
let aceptarPago = document.getElementById('aceptarPago')
let cancelarPago = document.getElementById('cancelarPago')

document.getElementById('idusuario').value = pass
document.getElementById('dniContacto').value = dniContacto
let c

aceptarPago.addEventListener('click', () => {
	c = document.getElementById('monto').value
	let formdata = new FormData()
	formdata.append("dni", dniContacto)
	formdata.append("monto", c)
	formdata.append("idusuario", pass)
	let transac_url = 'https://sminnova.com/restapitrujillo/registro/transaccion'
	config = {
		method: "POST",
		body: formdata
	}
	fetch(transac_url, config)
		.then(data => { return data.json() })
		.then(data => {
			console.log(data)
			window.location = 'usuario.html'
		})
})

