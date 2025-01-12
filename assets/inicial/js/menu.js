function toggleMenu() {
    var menu = document.getElementById("lateral-menu");
    if (menu.style.width === "250px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "250px";
    }
}

const path = window.location.pathname;
const page = path.split("/").pop();

if (page === 'index.html') {
    document.getElementById('inicial').classList.add('active');
}   else if (page === 'economia_br.html') {
    document.getElementById('brasil').classList.add('active');
}   else if (page === 'economia_arg.html') {
    document.getElementById('argentina').classList.add('active');
}   else if (page === 'economia_eua.html') {
    document.getElementById('eua').classList.add('active');
}   else if (page === 'contatos.html') {
    document.getElementById('contatos').classList.add('active');
}   else if (page === 'sobre.html') {
    document.getElementById('sobre').classList.add('active');
}   else if (page === 'privacidade.html') {
    document.getElementById('privacidade').classList.add('active');
}   else if (page === 'cookie.html') {
    document.getElementById('cookie').classList.add('active');
}