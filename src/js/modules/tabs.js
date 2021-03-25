function tabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelector(headerSelector),
          tabs = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

          console.log(tabs);

          function hideContent() {
              content.forEach(content => {
                  content.style.display = 'none';
              });

              tabs.forEach(active => {
                  active.classList.remove(activeClass);
              });
          }

          hideContent();

          function showContent(i = 0) {
              content[i].style.display = 'block';
              content[i].classList.add('animate__fadeIn', 'wow', 'animate__animated');
              tabs[i].classList.add(activeClass);
          }

          showContent();

          header.addEventListener('click', (e) => {
              const target = e.target;
                if (target && (target && target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
                    tabs.forEach((item, i) => {
                        if (target == item || target.parentNode == item) {
                            hideContent();
                            showContent(i);
                        }
                    });
                }
          });
}

export default tabs;