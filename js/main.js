const elmodal = document.querySelector('.modal')
const elmodalCloseIcon = document.querySelector('.modal-close-icon');

if (elmodal) {
    elmodalCloseIcon.addEventListener('click' , function () {
        elmodal.classList.remove('modal');
    });
}
setTimeout(function ()  {
    elmodal.classList.add('modal-open')
}, 4000);
