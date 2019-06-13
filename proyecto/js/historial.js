let user = localStorage.getItem('mipassword')
document.getElementById('idusuario').textContent = localStorage.getItem('miusuario')
console.log(user)
let historialT_url = 'https://sminnova.com/restapitrujillo/registro/transaccion_listado'
let listHisto = document.getElementById('listaHistorial')

const formdata = new FormData()
formdata.append("idusuario", user)
const config = {
	method: "POST",
	body: formdata
}

historial = () => {
	fetch(historialT_url, config)
		.then(data => {
			console.log(data)
			return data.json()
		})
		.then(data => {
			console.table(data)

			let esquema = ""
			for (const i in data) {
				if (i >= 0) {
					let a = data[i].dni
					let b = data[i].monto
					esquema += `<li class="list-group-item list-group-item-info">DNI: ${a.padEnd(30, " ")}<br>MONTO: S/.${b.padStart(30, " ")}</li >`
				}
			}
			listHisto.innerHTML = esquema
		})
}
historial()
