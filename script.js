// Script for navigation bar
const menue = document.querySelector("#bar");
const navbar = document.querySelector("#navbar");
const close = document.querySelector("#close");
menue.addEventListener("click",function()
{
    navbar.classList.add('active');
})

close.addEventListener("click",function()
{
    navbar.classList.remove("active");
})
