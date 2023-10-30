let section = document.querySelectorAll('section');
const nav = document.getElementById('nav');
//const tcol = document.getElementById('n')
const navLinks = document.querySelectorAll('.nav_a');



window.onscroll = () => {

    section.forEach(i => {
        let top = window.scrollY;
        let offset = i.offsetTop + 100;
        let height = i.offsetHeight;

        if (top >= offset && top < offset + height) {
            nav.classList.remove('navigation');
            nav.classList.add('navigation_col');
            navLinks.forEach(link => {
                link.style.color = "#000";
            });

        }
        else {
            nav.classList.remove('navigation_col')
            nav.classList.add('navigation');
            navLinks.forEach(link => {
                link.style.color = "#fff";
            });

        }
    });
};

current_img = 0
cashe = 0
const image_control = document.querySelector('.fig');
const image_control_m = document.querySelector('.fig_m');
const button = document.getElementById('slider')
button_cashe = button.onclick
function nextimg(n) {
    clearInterval(auto_time)
    current_img -= n
    cashe += 1
    if (cashe >= 4) {
        current_img = 0
        cashe = 0
    }
    image_control.style.left = current_img + "%";
    image_control_m.style.left = current_img + "%";
    console.log(current_img)
    console.log(cashe)
    button.onclick = null
    console.log("wate")

    function wate() {
        console.log("continue")
        button.onclick = button_cashe

    }
    setTimeout(wate, 500);

}

auto_time = setInterval(auto_slide, 8000)
function auto_slide() {
    console.log("auto")
    current_img -= 100
    cashe += 1
    if (cashe >= 4) {
        current_img = 0
        cashe = 0
    }
    image_control.style.left = current_img + "%";
    image_control_m.style.left = current_img + "%";

}
