function modal(){
    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalTimerId = setTimeout(openModal, 50000);

    function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove ('show');
    document.body.style.overflow = '';
    }
    function openModal(){
    modal.classList.add('show');
    modal.classList.remove ('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
    }
    function showModalByScroll(){
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }


        modalTrigger.forEach(item =>{
              item.addEventListener('click', openModal);
            });

       

        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.getAttribute('data-close') == ''){
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) =>{
            if (e.code === "Escape" ){
                closeModal();
            }
        });

        window.addEventListener('scroll', showModalByScroll);
}


module.exports = modal;