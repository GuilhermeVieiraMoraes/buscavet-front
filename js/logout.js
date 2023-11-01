const userToken = localStorage.getItem('token');
const loginButton = document.getElementById('login-menu-item');
if (userToken) {
    loginButton.innerHTML = '<a class="nav-link" href="#" id="logout-link"><i class="fa-solid fa-right-from-bracket" aria-hidden="true"></i> Sair</a>';
    const logoutLink = document.getElementById('logout-link');
    logoutLink.addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = 'login.html';
    })
} 