function images() {

    const images = document.querySelector('.works'),
          bigImg = document.createElement('img'),
          elemPopup = document.createElement('div');


          elemPopup.classList.add('popup');
          elemPopup.appendChild(bigImg);
          images.appendChild(elemPopup);


          elemPopup.style.justifyContent = 'center';
          elemPopup.style.alignItems = 'center';
          elemPopup.style.display = 'none';

          bigImg.style.cssText = 'width: 800px; height: 700px';


          images.addEventListener('click', (e) =>{
              e.preventDefault();
              document.body.style.overflow = 'hidden';


              const target = e.target;
                   
            if (target && target.classList.contains('preview')) {
                elemPopup.style.display = 'flex';
                const href = target.parentNode.getAttribute('href');

                bigImg.setAttribute('src', href);
            }

            if (target && target.matches('div.popup')) {
                elemPopup.style.display = 'none';
                document.body.style.overflow = '';

            }

          });



}

export default images;