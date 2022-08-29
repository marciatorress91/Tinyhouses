// ================== FUNCIONES ============================ //

// Envio email a trves de emailjs

function envio(nombre, email, mensaje, asunto){
  
    emailjs.send('service_xcuxcu8', 'template_4sxxztc', {
      from_name: nombre,
      from_email: email,
      message: mensaje,
      subject: asunto,
    })
    .then(function(response) {
      if(response.text === 'OK'){
        Swal.fire({
            text: 'El correo se ha enviado de forma exitosa',
            icon: 'success',
            confirmButtonText: 'Aceptar',
        })
          console.log('El correo se ha enviado de forma exitosa');
      }
     console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    }, function(error) {
        Swal.fire({
            text: 'Ocurrió un problema al enviar el correo',
            icon: 'error',
            confirmButtonText: 'Aceptar',
        })
      console.log('Ocurrió un problema al enviar el correo');
      console.log("FAILED. error=", error);
    });
  
    return
  }

  
  // =============================== SCRIPT ============================= //
  
  
  // declaro los campos
  
  const Username = document.getElementById("Username")
  const Usermail = document.getElementById("Usermail")
  const floatingTextarea = document.getElementById("floatingTextarea")
  const enviar = document.getElementById("enviar")
  const borrar = document.getElementById("borrar")
  
  
  // ============= Envio email ================================= //
  enviar.addEventListener('click', (e) => {
    e.preventDefault()
      
    if(Username.value != '' & ( Usermail.value != '') & floatingTextarea.value != ''){
  
      let texto = floatingTextarea.value
  
          
      envio(Username.value, Usermail.value, texto, 'CONTACTO sitio web')
  
    } else {
  
      // aqui va que pasa cuando faltan datos
      
    }
  
  
  })
  