function modals(triggerSelector, modalSelector, closeSelector) {
    function bindModal(trigger, modal, close) {

        const     callEngineerBtn = document.querySelectorAll(trigger),
                  modalEngineer = document.querySelector(modal),
                  modalEngineerClose = document.querySelector(close);

            

            callEngineerBtn.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    if (e.target) {
                        e.preventDefault();
                    }
        
                    modalEngineer.style.display = 'block';
                    modalEngineer.classList.add('animate__fadeIn', 'wow', 'animate__animated');
                    document.body.style.overflow = 'hidden';
        
                    });
            });

            modalEngineerClose.addEventListener('click', () => {
                    modalEngineer.classList.remove('animate__fadeIn', 'wow', 'animate__animated');
                    modalEngineer.classList.add('animate__fadeOut', 'wow', 'animate__animated');
                    setTimeout(() => {
                        modalEngineer.style.display = 'none';
                        document.body.style.overflow = '';
                        modalEngineer.classList.remove('animate__fadeOut', 'wow', 'animate__animated');
                     }, 500); 
            });

            modalEngineer.addEventListener('click', (e) => {
                      if (e.target === modalEngineer) {
                            modalEngineer.classList.remove('animate__fadeIn', 'wow', 'animate__animated');
                            modalEngineer.classList.add('animate__fadeOut', 'wow', 'animate__animated');
                         setTimeout(() => {
                            modalEngineer.style.display = 'none';
                            document.body.style.overflow = '';
                            modalEngineer.classList.remove('animate__fadeOut', 'wow', 'animate__animated');
                         }, 500);   
                            
                        }
                    });
    }

    function TimeOpenModal(selector, time) {
                setTimeout(() => { 
                    document.querySelector(selector).style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }, time);
    }

    bindModal(triggerSelector, modalSelector, closeSelector);


    // TimeOpenModal('.popup', 60000);
}

export default modals;