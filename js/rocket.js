// Create scroll to top button
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

// Prevent default event of anchors in the navbar and smoothly scroll to the target section 
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


