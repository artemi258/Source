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
                    document.body.style.overflow = 'hidden';
        
                    });
            });

            modalEngineerClose.addEventListener('click', () => {
                modalEngineer.style.display = 'none';
                    document.body.style.overflow = '';
            });

            modalEngineer.addEventListener('click', (e) => {
                        if (e.target === modalEngineer) {
                            modalEngineer.style.display = 'none';
                            document.body.style.overflow = '';
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