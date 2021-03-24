function tabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelector(headerSelector),
          tabs = document.querySelectorAll(tabSelector),
          content = document.querySelector(contentSelector);

          function hideContent() {
              content.forEach(content => {
                  content.style.display = 'none';
              });

              tabs.forEach(active => {
                  active.classList.remove(activeClass);
              });
          }

          hideContent();

          function showContent(i = 1) {
              content[i].style.display = 'block';
              tabs[i].classList.add(activeClass);
          }

          showContent();
}

export default tabs;