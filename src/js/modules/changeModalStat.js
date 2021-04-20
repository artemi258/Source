import checkNumInputs from "./checkNumInputs";

function changeModalStat(state) {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

          checkNumInputs('#width');
          checkNumInputs('#height');

      function  bindActionToElems(events, elem, prop) {
            elem.forEach((item, i) => {
              item.addEventListener(events, (e) => {

                switch (item.nodeName) {
                  case 'SPAN':
                     state[prop] = i;
                    break;
                  case 'INPUT':
                    if (item.getAttribute('type') == 'checkbox') {
                      i == 0 ? state[prop] = 'холодный' : state[prop] = 'теплый';
                      elem.forEach((box, j) => {
                        box.checked = false;
                        if (i == j) {
                          box.checked = true;
                        }
                      });
                    } else {
                      state[prop] = item.value;
                    }
                    break;
                  case 'SELECT': 
                    state[prop] = item.value;
                    break;
                }

                console.log(state);

               


              });
            });

  
          }

          bindActionToElems('click', windowForm, 'form');
          bindActionToElems('input', windowWidth, 'widht');
          bindActionToElems('input', windowHeight, 'height');
          bindActionToElems('change', windowType, 'type');
          bindActionToElems('change', windowProfile, 'profile');

};

export default changeModalStat;