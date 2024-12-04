export function hideSpinner() {
    setTimeout(() => {
        const spinner = document.getElementById('spinner');
        if (spinner) {
            spinner.classList.remove('show');
        }
    }, 1);
}