const screenWidth = window.innerWidth;

if (screenWidth < 1280) {
    const expertiseLinks = document.querySelectorAll('.expertises__box');
    const skillsSection = document.querySelector("#skills");

    expertiseLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            console.log('clicked')
            skillsSection.scrollIntoView();
        })
    });
    
} else {
    const expertiseLinks = document.querySelectorAll('.expertises__box');
    const expertisesSection = document.querySelector("#expertises");

    expertiseLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            console.log('clicked')
            expertisesSection.scrollIntoView();
        })
    });
}
