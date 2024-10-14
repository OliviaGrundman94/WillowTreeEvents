
function showSidebar(){
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})




// function showSidebar(){
//     event.preventDefault();
//     const sidebar = document.querySelector('.sidebar')
//     sidebar.style.display = 'flex'
// }

// function hideSidebar(){
//     event.preventDefault();
//     const sidebar = document.querySelector('.sidebar')
//     sidebar.style.display = 'none'
// }


// SHOW MENU

// const   navMenu = document.getElementById('nav-menu'),
//         navToggle = document.getElementById('nav-toggle'),
//         navClose = document.getElementById('nav-close') 
        
// // menu show
// if(navToggle){
//     navToggle.addEventListener('click', () =>{
//         navMenu.classList.add('show-menu')
//     })
// }

// // menu hidden
// if(navClose){
//     navClose.addEventListener('click', () =>{
//         navMenu.classList.remove('show-menu')
//     })
// }



// ADD BLUR TO HEADER

// const blurHeader = () =>{
//     const header = document.getElementById('header')
//     this.scrollY >=50   ? header.classList.add('blur-header')
//                         : header.classList.remove('blur-header')
// }
// window.addEventListener('scroll', blurHeader)




// FORM

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".form__input").forEach(function(input) {
      input.addEventListener("input", function() {
        input.className = input.className.replace(/form__input--error ?/, "");
      });
    });
  });
  