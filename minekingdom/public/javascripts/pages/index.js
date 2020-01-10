window.onload = () => {
    let actionBtns = document.querySelectorAll(`button`);
    let actionURLs = [`https://discordapp.com/oauth2/authorize?client_id=627332767461670941&scope=bot&permissions=388161`, `https://top.gg/bot/627332767461670941/vote`, `https://discord.gg/BajXaQr`];

    for(let i = 0; i < actionBtns.length; i++) actionBtns[i].addEventListener(`click`, e => window.location.href = actionURLs[i]);
}