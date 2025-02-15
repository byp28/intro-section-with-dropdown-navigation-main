const sub_1 = document.querySelector('#sub-1');
const sub_menu_1 = document.querySelector('#sub-menu-1');
const arrow_1 = document.querySelector('#arrow-1')

const sub_2 = document.querySelector('#sub-2');
const sub_menu_2 = document.querySelector('#sub-menu-2');
const arrow_2 = document.querySelector('#arrow-2')

const sub_3 = document.querySelector('#sub-3');
const sub_menu_3 = document.querySelector('#sub-menu-3');
const arrow_3 = document.querySelector('#arrow-3')

const sub_4 = document.querySelector('#sub-4');
const sub_menu_4 = document.querySelector('#sub-menu-4');
const arrow_4 = document.querySelector('#arrow-4')

const overlay = document.querySelector('#overlay');
const open_menu = document.querySelector('#open-menu');
const close_menu = document.querySelector('#close-menu');

open_menu.addEventListener("click",()=>{
    overlay.classList.toggle('hidden');
})
close_menu.addEventListener("click",()=>{
    overlay.classList.toggle('hidden');
})

sub_1.addEventListener("click",()=>{
    sub_menu_1.classList.toggle('hidden');
    if(!sub_menu_1.classList.contains('hidden')){
        arrow_1.src = "./images/icon-arrow-up.svg"
    }else{
        arrow_1.src = "./images/icon-arrow-down.svg"
    }
})
sub_2.addEventListener("click",()=>{
    sub_menu_2.classList.toggle('hidden');
    if(!sub_menu_2.classList.contains('hidden')){
        arrow_2.src = "./images/icon-arrow-up.svg"
    }else{
        arrow_2.src = "./images/icon-arrow-down.svg"
    }
})
sub_3.addEventListener("click",()=>{
    sub_menu_3.classList.toggle('hidden');
    if(!sub_menu_3.classList.contains('hidden')){
        arrow_3.src = "./images/icon-arrow-up.svg"
    }else{
        arrow_3.src = "./images/icon-arrow-down.svg"
    }
})
sub_4.addEventListener("click",()=>{
    sub_menu_4.classList.toggle('hidden');
    if(!sub_menu_4.classList.contains('hidden')){
        arrow_4.src = "./images/icon-arrow-up.svg"
    }else{
        arrow_4.src = "./images/icon-arrow-down.svg"
    }
})