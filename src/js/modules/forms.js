import checkNumInputs from "./checkNumInputs";

   function forms(state) {
        const form = document.querySelectorAll('form'),
              input = document.querySelectorAll('input');

        checkNumInputs('input[name="user_phone"]');

        const message = {
            loading: 'assets/img/sale/loading.svg',
            success: 'Отправлено!',
            error: 'Ошибка'
        };

        const  postData = async (url, data) => {
            document.querySelector('.status img').src = message.loading;

            // document.querySelector('.status').textContent = message.loading;
            let res = await fetch(url, {
                method: "POST",
                body: data
            });

            return await res.text();
                  

        };

       const clearInput = () => {
           input.forEach(item => {
               item.value = '';
           });
       };

        form.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                item.appendChild(statusMessage);

                let spinner = document.createElement('img');
                  spinner.style.cssText = `
                    display: block;
                    widht: 30px;
                    height: 30px;
                    margin: 0 auto 0 auto;

                  `;

                  statusMessage.appendChild(spinner);


                const formData = new FormData(item);

                if (item.getAttribute('data-calc') === "end") {
                    for (let key in state) {
                        formData.append(key, state[key]);
                    }
                }

                postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                    document.querySelectorAll('.checkbox').forEach(item => {  //после отправки формы убираем галочки у холодный или теплый
                        item.checked = false;
                    });
                    for (let key in state) {
                        key = null;
                    };
                })
                .catch(() => {
                    statusMessage.textContent = message.error;
                })
                .finally(() => {
                    clearInput();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });

            });
        });
   }    

   export default forms;