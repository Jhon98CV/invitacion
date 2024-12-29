let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
};

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

};

var swiper = new Swiper(".gallery-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
      delay: 3000,
      disableOnInteraction:false,
    }
  });

  var swiper = new Swiper(".review-slider", {
    loop:true,
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


AOS.init({
  duration:800,
  delay:400
});


        function openModal() {
            document.getElementById('modalOverlay').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('modalOverlay').style.display = 'none';
            document.getElementById('asistenciaForm').reset();
        }

        // Cerrar modal al hacer clic fuera de él
        document.getElementById('modalOverlay').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        function submitForm(e) {
            e.preventDefault();
            
            const form = document.getElementById('asistenciaForm');
            const formData = new FormData(form);
            
            // Reemplaza este URL con tu URL de Google Forms
            const googleFormsURL = 'https://docs.google.com/forms/d/e/TU_FORM_ID/formResponse';
            
            fetch(googleFormsURL, {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            })
            .then(() => {
                alert('¡Formulario enviado con éxito!');
                form.reset();
                closeModal();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al enviar el formulario');
            });
        }
