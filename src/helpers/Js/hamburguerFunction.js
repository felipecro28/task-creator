function hamburguerMenu(){


    const hamburguer = document.querySelector('#hamburguer-icon');
    const menuDiv = document.querySelector('.menu-nav')

    if (hamburguer.src = "../img/blue-hamburg-icon.png"){
        hamburguer.src = "../img/blue-hamburg-icon-right.png"
        setTimeout(() => {
            hamburguer.src = "../img/blue-hamburg-icon.png"
        }, 300);
    }


    if(menuDiv.style.display == 'none'){
        menuDiv.style.display = 'block'
    } else if (menuDiv.style.display != 'none'){
        menuDiv.style.display = 'none'
    }

}