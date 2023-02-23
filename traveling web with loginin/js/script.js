const list = document.querySelectorAll('.list');
const list = document.querySelectorAll('.btn list active');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active')
    );
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('click', activeLink));
