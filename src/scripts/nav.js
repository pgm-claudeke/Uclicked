let previousVisibleSectionId = null;

function getIdOfVisibleSection() {
    const sections = document.querySelectorAll('section');
    let visibleSectionId = null;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        ) {
            visibleSectionId = section.id;
        }
    });

    return visibleSectionId;
}

function updateActiveSectionOnScroll() {
    const visibleSectionId = getIdOfVisibleSection();
    
    if (visibleSectionId !== previousVisibleSectionId && visibleSectionId !== null) {
        // Remove active class from previous navigation item
        const previousNavItem = document.querySelector(`nav a[href="#${previousVisibleSectionId}"]`);
        if (previousNavItem) {
            previousNavItem.classList.remove('active');
        }

        // Add active class to current navigation item
        const currentNavItem = document.querySelector(`nav a[href="#${visibleSectionId}"]`);
        if (currentNavItem) {
            currentNavItem.classList.add('active');
        }

        previousVisibleSectionId = visibleSectionId;
    }
}

window.addEventListener('scroll', updateActiveSectionOnScroll);