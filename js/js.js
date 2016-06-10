
<<<<<<< HEAD
var contadorAcoso = 0;

function contador(){
contadorAcoso = contadorAcoso + 1;
document.querySelector("#acoso").innerHTML = contadorAcoso;
}
var contadorViolacion = 0;

function contadorViola(){
contadorViolacion = contadorViolacion + 1;
document.querySelector("#violacion").innerHTML = contadorViolacion;
}
var contadorViolencia = 0;

function contadorViolen(){
contadorViolencia = contadorViolencia + 1;
document.querySelector("#violencia").innerHTML = contadorViolencia;
}
var contadorPension = 0;

function contadorPena(){
contadorPension = contadorPension + 1;
document.querySelector("#pension").innerHTML = contadorPension;
}



var contadorAcoso = 0;

function contadorHoga(){
contadorHogar = contadorHogar + 1;
document.querySelector("#hogar").innerHTML = contadorHogar;
}
var contadorViolacion = 0;

function contadorTrabaj(){
contadorTrabajo = contadorTrabajo + 1;
document.querySelector("#trabajo").innerHTML = contadorTrabajo;
}
var contadorViolencia = 0;

function contadorSiti(){
contadorSitio = contadorSitio + 1;
document.querySelector("#sitiopublico").innerHTML = contadorSitio;
}


var contadorDesconocido = 0;

function contadorDesconocid(){
contadorDesconocido = contadorDesconocido + 1;
document.querySelector("#desconocido").innerHTML = contadorDesconocido;
}
var contadorSuperior = 0;

function contadorSuperio(){
contadorSuperior = contadorSuperior + 1;
document.querySelector("#superior").innerHTML = contadorSuperior;
}
var contadorViolacion = 0;

function contadorFamilia(){
contadorFamiliar = contadorFamiliar + 1;
document.querySelector("#familiar").innerHTML = contadorFamiliar;
}
var contadorViolencia = 0;

function contadorConocid(){
contadorConocido = contadorConocido + 1;
document.querySelector("#conocido").innerHTML = contadorConocido;
}
var contadorViolencia = 0;

function contadorRelacio(){
contadorRelacion = contadorRelacion + 1;
document.querySelector("#relacion").innerHTML = contadorRelacion;
}
=======
	//mostramos 
	var show = false;
	$('#show').hide();

	// Login

	var ref = new Firebase("https://niunamas-1320.firebaseio.com");

	$('#entrar').on('click',function(){
	
	ref.$(document).ready(function(){
authWithOAuthPopup("twitter", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    // console.log("Authenticated successfully with payload:", authData);
    authDataCallback(authData);
    muestra();
  }
});


	});

	function authDataCallback(authData){
		$('#nombre').text(authData.twitter.displayName);
		var nombre = authData.twitter.displayName;
		// console.log(nombre);
		show = true;
	};

		//Mostramos los mensajes
	function muestra(){
		$('#show').fadeIn();
		$('#login').fadeOut();
		carga();
	};

	

	



	// Establecemos la instancia de firebase
	var ref = new Firebase('https://.firebaseio.com/');
	var postsRef = ref.child('posts');

	



	// Cargamos los mensajes anteriores
	function carga(){
	postsRef.on('child_added',function(snapshot){
		var newPost = snapshot.val();
		$('#papa').append('<tr><td>'+newPost.author+'</td><td>'+newPost.title+'</td></tr>');			
		$("#scroll").animate({ scrollTop: $('tbody').height() }, "fast");
	});
	};

	

	
	// newPostRef = postsRef.push();
	// var usuario = $('#bliss').text()

	// Agregamos mensaje
	$('#enviar').on('click',function(){

		postsRef.push({
		author:$('#nombre').text(),
		// author:usuario,
		title:$('#inputMessage').val(),
		fecha:Firebase.ServerValue.TIMESTAMP
		});
		
		$('#inputMessage').val("");
		// $('#scroll').scrollTop(100000)
		$("#scroll").animate({ scrollTop: $('tbody').height() }, "slow");
	

	});




});
>>>>>>> fca9180a53af9cb0079b37c4446d54e290d01cfe
