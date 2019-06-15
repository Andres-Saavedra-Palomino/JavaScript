class Contacto {
	constructor() { }

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
					window.location = "usuario.html";
				} else {
					alert("datos ingresados de manera incorrecta");
				}
			})
	}
}
