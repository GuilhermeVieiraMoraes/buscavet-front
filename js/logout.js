const userToken = localStorage.getItem('token');
const loginButton = document.getElementById('login-menu-item');
const infoButton = document.getElementById('minhaConta-menu-item');
if (userToken) {
    infoButton.innerHTML = '<li class="nav-item" id="minhaConta-menu-item"><a class="nav-link" href="infoUser.html"><i class="fa fa-fw fa-paw"aria-hidden="true"></i>Minha conta</a></li>';
    loginButton.innerHTML = '<a class="nav-link" href="#" id="logout-link"><i class="fa-solid fa-right-from-bracket" aria-hidden="true"></i>Sair</a>';
    const logoutLink = document.getElementById('logout-link');
    logoutLink.addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = 'login.html';
    })
}
if (!userToken) {
    infoButton.style.display = 'none';
} 