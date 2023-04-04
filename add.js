const ham = document.getElementsByClassName('ham')[0]
const navlink = document.getElementsByClassName('nav-link')[0]

ham.addEventListener('click', () => {
    navlink.classList.toggle('active')
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hidden = document.querySelectorAll('.hid');
hidden.forEach((el) => observer.observe(el));