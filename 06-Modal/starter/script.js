'use strict';
let showModal=document.querySelectorAll('.show-modal');
let openModal=document.querySelector('.modal');
let closeModal=document.querySelector('.close-modal');
let overlay=document.querySelector('.overlay');
const showModalFunc=function(){
    openModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
for(let i=0;i<showModal.length;i++){
    showModal[i].addEventListener('click',showModalFunc);
}
const closeModalFunc=function(){
    openModal.classList.add('hidden');
    overlay.classList.add('hidden');
}
closeModal.addEventListener('click',closeModalFunc);
overlay.addEventListener('click',closeModalFunc);
document.addEventListener('keydown',function(e){
    //console.log(e.key);
    if(e.key === 'Escape' && !openModal.classList.contains('hidden')){
        closeModalFunc();
    }
})