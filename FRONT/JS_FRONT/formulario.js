const nombre = document.getElementById('form_nombre');
const apellido = document.getElementById('form_apellido');
const dni = document.getElementById('form_dni');
const telefono = document.getElementById('form_telefono');
const mail = document.getElementById('form_mail');
const mensaje = document.getElementById('form_text_area');
const form = document.getElementById('form');
const parrafo = document.getElementById('submit_msj');


form.addEventListener('submit', e=>{
    e.preventDefault();
        let caracteres = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        let msj = ""
        let regexEmail= /^\w+([.-]?\w+)*@\w{2,2}([.-]?\w+)*(\.\w{3,3})+$/;
        let validacion = false;

    if(nombre.value.length < 3 || nombre.value.length ===caracteres){
        msj += "Coloque un nombre valido <br>";
        validacion = true;
    }
    if(apellido.value.length < 2 || apellido.value.length === caracteres){
        msj += "Coloque un apellido valido <br>"
        validacion = true;
    }
    if(!regexEmail.test(mail.value)){
        msj += "Coloque un mail valido <br>"
        validacion = true;
    }
    if(isNaN(parseInt(dni.value))||dni.value == !caracteres || dni.value.length>8 ||dni.value.length<7){
        msj += "Coloque el DNI correcto <br>"
        validacion = true;
    }
    if(isNaN(parseInt(telefono.value)) || telefono.value.length <5){
        msj += "Coloque el telefono valido <br>"
        validacion = true;
    }
    if(validacion){
        parrafo.innerHTML = msj;
    }else{
        parrafo.innerHTML = "Gracias por contactarte";
       form.reset()


    } 

});




