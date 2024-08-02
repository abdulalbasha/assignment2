const navLinks = document.querySelectorAll('nav a'); // Select anchor tags within nav
const nav = Array.from(navLinks);

function changeDisplay(x) {
    for (let index = 0; index < nav.length; index++) {
        let element = nav[index];
        let targetId = element.getAttribute('href').substring(1); // Remove the '#' from href
        let targetElement = document.getElementById(targetId);
        
        if (targetId === x) {
            targetElement.style.display = 'flex';
        } else {
            targetElement.style.display = 'none';
        }
    }
}

for (let i = 0; i < nav.length; i++) {
    const element = nav[i];
    element.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        changeDisplay(element.getAttribute('href').substring(1));
    });
}
