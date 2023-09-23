const ham = document.getElementsByClassName('ham')[0]
const navlink = document.getElementsByClassName('navitem')[0]
const hit = document.getElementsByClassName('rect')[0]
const cont = document.getElementsByClassName('container')[0]
const body = document.getElementsByTagName('body')[0];
const splash = document.getElementsByClassName('splash')[0]

hit.addEventListener('click', () => {
    navlink.classList.toggle('active'),
    ham.classList.toggle('active'),
    cont.classList.toggle('nav-on'),
    body.classList.toggle('lock')
})

 setTimeout(function() {
   splash.classList.add('done');
   cont.classList.remove('off');
 }, 1000);
 
 setTimeout(function() {
   const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.intersectionRatio > 0) {
         entry.target.classList.add('show');
        } else if (entry.intersectionRatio == 0){
         entry.target.classList.remove('show');
        }
      });
    });
    const hidden = document.querySelectorAll('.hid');
    hidden.forEach((el) => observer.observe(el));
 }, 1200);
 
 const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.intersectionRatio > 0) {
         entry.target.classList.add('showim');
        } else if (entry.intersectionRatio == 0){
         entry.target.classList.remove('showim');
        }
      });
    });
    const hiddenim = document.querySelectorAll('.hidim');
    hiddenim.forEach((el) => observer.observe(el));
    
 const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.intersectionRatio > 0) {
         entry.target.classList.add('showarr');
        } else if (entry.intersectionRatio == 0){
         entry.target.classList.remove('showarr');
        }
      });
    });
    const hidarr = document.querySelectorAll('.hidarr');
    hidarr.forEach((el) => observer2.observe(el));