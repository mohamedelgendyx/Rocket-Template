// Create scroll to top button
const ScrollButton = () => {
    const scrollToTopButton = document.createElement('span');
    scrollToTopButton.className = 'to-top';
    scrollToTopButton.addEventListener('click', (e) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
    window.onscroll = (e) => {
        scrollToTopButton.classList.toggle('show', this.scrollY > 500)
    }
    const main = document.querySelector('body');
    main.appendChild(scrollToTopButton);
}
ScrollButton();

// Prevent default event of anchors in the navbar and smoothly scroll to the target section 
const smoothScroll = (target) => {
    const [...links] = document.querySelectorAll('.navbar a');
    const goDown = document.querySelector('.go-down');
    links.push(goDown);
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href');
            if (id) {
                const section = document.querySelector(id);
                section.scrollIntoView({ behavior: "smooth" });
            }
        })
    })
}
smoothScroll();

// CountDown 
const countDown = () => {
    // Make the target day always after 11 days
    const targetDate = new Date(new Date().getTime() + (11 * 24 * 60 * 60 * 1000 + 9 * 60 * 60 * 1000 + 35 * 60 * 1000 + 23 * 1000)).getTime();
    let currentDate, remainingTime, days, hours, minutes, seconds;
    const counter = setInterval(() => {
        currentDate = new Date().getTime();
        remainingTime = targetDate - currentDate;

        days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((remainingTime % (1000 * 60)) / (1000));

        document.querySelector(".days").innerText = days < 10 ? `0${days}` : days;
        document.querySelector(".hours").innerText = hours < 10 ? `0${hours}` : hours;
        document.querySelector(".minutes").innerText = minutes < 10 ? `0${minutes}` : minutes;
        document.querySelector(".seconds").innerText = seconds < 10 ? `0${seconds}` : seconds;
    }, 1000);
    if (remainingTime <= 0)
        clearInterval(counter);
}
countDown();

