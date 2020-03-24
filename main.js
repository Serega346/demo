document.querySelector('.active').addEventListener('click', () => {

    const x = document.getElementById("header__links");

    if (x.style.display === "block") {

        x.style.display = "none";

    } else {

        x.style.display = "block";

    }

});

document.querySelector('#header__links').addEventListener('click', () => {

    const x = document.getElementById("header__links");
    const y = document.querySelector('.active')

    if (x.style.display === "none" , y.style.display === "block") {

        x.style.display = "block" , y.style.display = "none"

    } else {

        x.style.display = "none",  y.style.display = "block";

    }
   
})

document.querySelector('.active').addEventListener('click', () => {

    const x = document.querySelector('.active')

    if (x.style.display === "none") {

        x.style.display = "block";

    } else {

        x.style.display = "none";

    }
})
