const navigation = document.querySelector('nav');
const sections = navigation.querySelectorAll('.section');

console.log(sections);

const classRemover = (newClass) => {
    sections.forEach((section) => {
        if (section.classList.contains('bottom')) {
            section.classList.remove('bottom');
            section.classList.add(`${newClass}`);
        }
    });
};

sections.forEach((section) => {
    section.addEventListener('click', (event) => {
        console.log(event.currentTarget);
        let clickedElementsClass = event.currentTarget.classList[1];

        if (event.currentTarget.classList[1] !== 'bottom') {
            event.currentTarget.classList.remove(`${clickedElementsClass}`);
            classRemover(clickedElementsClass);
            event.currentTarget.classList.add('bottom');
        }
    });
});
