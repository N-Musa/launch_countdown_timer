const countdown = () => {
    const countDate = new Date('June 20, 2021 00:00:00').getTime()
    // GETTING TIME DIFFERENCE
    const now = new Date().getTime();
    // NO MAGIC::JUST SUBTRACTING COUNTDOWN DATE FROM CURRENT TIME
    const gap = countDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60
    const day = hour * 24;
    
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    //UPDATE HTML
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".mins").innerText = textMinute;
    document.querySelector(".secs").innerText = textSecond; 
};

//running function multiple times for constant update
setInterval(countdown, 1000);

