class Contacto {
	constructor() {
		this.nombre = ''
		this.apellido = ''
		this.dni = ''
		this.telefono = ''
		this.idusuario = ''
	}

	agregarContacto(a, b, c, d, e) {
		let url = "https://sminnova.com/restapitrujillo/registro/contacto";
		let formData = new FormData();
		formData.append("nombre", a),
			formData.append("apellido", b),
			formData.append("telefono", c),
			formData.append("dni", d),
			formData.append("idusuario", e)

		let configuracion = {
			method: "POST",
			body: formData
		}
		fetch(url, configuracion)
			.then((data) => {
				return data.json()
			})
			.then((data) => {
				if (data) {
					this.nombre = data.nombre
					this.apellido = data.apellido
					this.telefono = data.telefono
					this.dni = data.dni
					this.idusuario = data.idusuario
					window.location = "usuario.html";
				} else {
					alert("datos ingresados de manera incorrecta");
				}
			})
	}
}
