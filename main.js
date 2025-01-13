// Trocando a NAvbar ao rolar FIXED

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle(
        'window-scroll', window.scrollY> 0
    )
})


// Show hide FAQ

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //Chang FAQ ico X
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-multiply";
        }else{
            icon.className = "uil uil-plus";
        }
    })
})

// Show nav MENU
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// Close Menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);