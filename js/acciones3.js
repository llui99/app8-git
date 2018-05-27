// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){ //Escucjhador de eventos
		$('#izquierda').on("swipeleft",function(){//Deslizar a la izquierda
			navigator.notification.alert("Deslizó hacia la izquierda",function(){"aplicación 7", "ok"}); //Aparece el alert
		});//cierra a swipeleft
		$('#derecha').on("swiperight",function(){//Deslizar derecha
			navigator.notification.confirm("¿Que quieres hacer?",function(op){//Aparece msj confirmar
				switch(op)//es para las opciones de case
				{
					case 1:
					navigator.nofication.beep(1);//suena el dispositivo
					break;
					
					case 2:
					navigator.notification.vibrate(3000);//vibra el cel
					break;
				}
			},"aplicacion7","Beppear,Vibrar,Cancelar");
			});
		},false);
});