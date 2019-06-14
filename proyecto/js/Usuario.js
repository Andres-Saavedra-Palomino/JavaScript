class Usuario {
	constructor() { }
	validar(valor1, valor2) {
		let url = "https://sminnova.com/restapitrujillo/login_clase/login";
		let formData = new FormData();
		formData.append("usuario", valor1);
		formData.append("password", valor2);
		let configuracion = {
			method: "POST",
			body: formData
		}
		fetch(url, configuracion)
			.then((data) => { return data.json() })
			.then((data) => {
				if (data) {
					localStorage.miusuario = valor1
					localStorage.mipassword = valor2
					window.location = "usuario.html";
				} else {
					alert("datos ingresados de manera incorrecta");
				}
			})
	}

}