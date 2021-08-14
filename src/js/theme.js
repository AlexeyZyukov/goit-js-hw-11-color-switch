import '../styles.css';
import '../sass/main.scss';


const themeSwitchControl = document.querySelector('#theme-switch-toggle');
console.log(themeSwitchControl);
themeSwitchControl.addEventListener('change', onClickChangeTheme);
themeSwitchControl.addEventListener('change', onClickChangeLocalStorage);
restoreTheme();


function onClickChangeTheme() {
    document.body.classList.toggle('dark-theme');
};

function onClickChangeLocalStorage() {
    const change = themeSwitchControl.checked
    if (change) {
        localStorage.setItem('theme', 'dark-theme')
    } else {
        localStorage.removeItem('theme');
    }
}

function restoreTheme() {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark-theme') {
        //console.log(savedTheme);
        document.body.classList.add('dark-theme');
        themeSwitchControl.checked = true;
    }
}
