let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
  navbar.classList.toggle("open-menu")
  menu.classList.toggle("move")
};

window.onscroll = () =>{ 
  navbar.classList.remove("open-menu")
  menu.classList.remove("move")
}

//Reviews Swipe
var swiper = new Swiper(".reviews-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//Email JS
function validate(){
  let name = document.querySelector('.name')
  let email = document.querySelector('.email')
  let msg = document.querySelector('.message')
  let sendBtn = document.querySelector('.send-btn')

  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(name.value == "" || email.value == "" || msg.value == ""){
      emptyerror();
    } else{
      sendemail(name.value, email.value, msg.value);
      success();
    }
  })
}
validate();
function sendemail(name,email,msg){
  emailjs.send("service_0f2kecg","template_0vqkdos",{
    to_name: email,
    from_name: name,
    message: msg,
    });
}
function emptyerror(){
  swal({
    title: "Error!",
    text: "Los campos no pueden estar vacios!",
    icon: "error",
  });
}
function  success(){
  swal({
    title: "Email enviado correctamente!",
    text: "Te responderemos en un plazo de 48 horas",
    icon: "success",
  });
}

//Header Background color scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () =>{
  header.classList.toggle("header-active", window.scrollY > 0);
})
//scroll top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () =>{
scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);})