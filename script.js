// Toggle funcionalidad de los acordeones
document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        panel.classList.toggle('show');
    });
});