function toggleSubmenu(id) {
    var submenu = document.getElementById(id);
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}

function showContent(id) {
    document.querySelectorAll('.content').forEach(el => el.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}
