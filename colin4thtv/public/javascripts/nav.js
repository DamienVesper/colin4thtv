window.onload = () => {
    let navBarLI = document.querySelectorAll(`ul.left > li`);
    let pageTitle = document.querySelector(`.app > h1`);
    for(let i = 0; i < navBarLI.length; i++) {
        let a = navBarLI[i].querySelector(`a > span`).innerHTML.toString().toLowerCase();
        let b = pageTitle.innerHTML.toString().toLowerCase();
        if(a == b) navBarLI[i].innerHTML = `<a aria-disabled="true"><span>${pageTitle.innerHTML}</span></a>`;
    }
}