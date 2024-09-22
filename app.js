const menuIcon = document.querySelector('.menu');
const sidebarContainer = document.querySelector('.sidebar');

menuIcon.addEventListener('click',()=>{
    sidebarContainer.classList.toggle('coleps')
})
