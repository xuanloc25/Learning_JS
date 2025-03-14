document.addEventListener('DOMContentLoaded', function() {
    const navList = document.querySelector('.nav-list');

    navList.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'A' && target.nextElementSibling && target.nextElementSibling.classList.contains('sub-menu')) {
            event.preventDefault(); // Ngăn trình duyệt chuyển đến #
            let subMenu = target.nextElementSibling;
            subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
        }
    });
});
