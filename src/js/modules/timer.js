
function timer() {
    const deadLine = '2021-06-15';

    const days = document.querySelector('#days'),
          hours = document.querySelector('#hours'),
          minutes = document.querySelector('#minutes'),
          seconds = document.querySelector('#seconds');

    function getTime(deadLine) {
        const t = Date.parse(deadLine) - Date.parse(new Date()),
              seconds = Math.floor((t/1000) % 60),
              minutes = Math.floor((t/1000/60) % 60),
              hours = Math.floor((t/1000/60/60) % 24),
              days = Math.floor((t/1000/60/60/24));

              const timers = {
                  "total": t,
                  "seconds": seconds,
                  "minutes": minutes,
                  "hours": hours,
                  "days": days
              };

              return timers;
}
countDownTime();

    function getZero(n) {
        if (n < 10) {
         return  `0${n}`;
        } else return n;
    }

    function countDownTime() {
        const timer = getTime(deadLine);


        days.textContent = getZero(timer.days);
        hours.textContent = getZero(timer.hours);
        minutes.textContent = getZero(timer.minutes);
        seconds.textContent = getZero(timer.seconds);

        if (timer.total < 0) {
            clearInterval(countDownTime);
            days.textContent = '00';
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
    }

    setInterval(countDownTime, 1000);


}



export default timer;