
//Insertar HTML de HEADER y FOOTER
document.getElementById("header").innerHTML = `
<nav>
<a href="./index.html"><img src="./imagenes/control-de-juego.png" alt="logo"></a>

<!--Aparece en celulares-->
<svg onclick="showMenu()" class="menu-hamburger hide-l" viewBox="0 0 100 80" width="30" height="30">
  <rect width="100" height="20"></rect>
  <rect y="30" width="100" height="20"></rect>
  <rect y="60" width="100" height="20"></rect>
</svg>

    <!--El menú que se desplega en celulares-->
    <div class="menu-desplegable hide-l" id="menu_hamb">
    
        <svg width="30" height="30" viewBox="0 0 30 30" onclick="showMenu()" class="equis-menu">
            <line x1="5" y1="5" x2="25" y2="25" stroke-width="5" stroke="white" />
            <line x1="5" y1="25" x2="25" y2="5" stroke-width="5" stroke="white" />
        </svg>


        <ul class="menu-desplegable-pags">
            <li><a href="./index.html">Inicio</a></li>
            <li><a href="./juegos.html">Juegos</a></li>
            <li><a href="./nosotros.html">Nosotros</a></li>
            <li><a href="./contacto.html">Contacto</a></li>
        </ul> 
        <div>
            <h1>Siguenos</h1>
            <ul class="menu-desplegable-redes">
                <li><a href="https://www.facebook.com" target="_blank"><img src="./imagenes/facebook.png" alt="facebook"></a></li>
                <li><a href="https://www.twitter.com" target="_blank"><img src="./imagenes/gorjeo.png" alt="twitter"></a></li>
                <li><a href="https://www.instagram.com" target="_blank"><img src="./imagenes/instagram.png" alt="instagram"></a></li>
                <li><a href="https://www.youtube.com" target="_blank"><img src="./imagenes/youtube.png" alt="youtube"></a></li>
                <li><a href="https://www.discord.com" target="_blank"><img src="./imagenes/discord.png" alt="discord"></a></li>
                <li><a href="https://www.tumblr.com" target="_blank"><img src="./imagenes/tumblr.png" alt="tumblr"></a></li>
            </ul>
        </div>
    </div>



<ul class="nav-links hide">
    <li><a href="./index.html">Inicio</a></li>
    <li><a href="./juegos.html">Juegos</a></li>
    <li><a href="./nosotros.html">Nosotros</a></li>
    <li><a href="./contacto.html">Contacto</a></li>
</ul>
</nav>

<ul class="nav-redes hide">
<li><a href="#"><img src="./imagenes/facebook.png" alt="facebook"></a></li>
<li><a href="#"><img src="./imagenes/gorjeo.png" alt="twitter"></a></li>
<li><a href="#"><img src="./imagenes/instagram.png" alt="instagram"></a></li>
<li><a href="#"><img src="./imagenes/youtube.png" alt="youtube"></a></li>
<li><a href="#"><img src="./imagenes/discord.png" alt="discord"></a></li>
<li><a href="#"><img src="./imagenes/tumblr.png" alt="tumblr"></a></li>
</ul>
`
document.getElementById("footer").innerHTML=`
<div class="footer-main">

<div class="box col-3">
    <h2>NOSOTROS</h2>
    <p>Somos (nombre), una desarrolladora de videosjuegos de horror y suspenso. Para saber mas hace click <a
            href="nosotros.html"><strong>aquí</strong></a>.</p>
</div>

<div class="logo" col-6>
    <a href="./index.html"><img src="./imagenes/control-de-juego.png" alt="logo"></a>
</div>

<div class="box col-3">
    <h2>SIGUENOS</h2>
    <ul class="nav-redes">
        <li><a href="#"><img src="./imagenes/facebook.png" alt="facebook"></a></li>
        <li><a href="#"><img src="./imagenes/gorjeo.png" alt="twitter"></a></li>
        <li><a href="#"><img src="./imagenes/instagram.png" alt="instagram"></a></li>
        <li><a href="#"><img src="./imagenes/youtube.png" alt="youtube"></a></li>
        <li><a href="#"><img src="./imagenes/discord.png" alt="discord"></a></li>
        <li><a href="#"><img src="./imagenes/tumblr.png" alt="tumblr"></a></li>
    </ul>
</div>
</div>
<div class="copyright">
<small>&copy; 2022 <strong>Grupo 4</strong> - Todos los Derechos Reservados</small>
</div>
`



//Mostrar/Ocular menú de celular
function showMenu(){
    let obj = document.getElementById("menu_hamb");
    if(obj.style.display=='none')
        {obj.style.display='flex'}
    else{obj.style.display='none'}
}




//Validación FORMULARIO - CONTACTO
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if (nombre.length == 0) {
        alert('No has escrito tu nombre');
        return;
    }

    var emailValue = document.getElementById('email').value;
    var email = document.getElementById('email');
    emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (emailValue.length==0 || emailRegex.test(email)) {
        alert('El email no es valido');
        return;
    }

    var tel = document.getElementById('telefono').value;
    if (tel.length !== 10) {
        alert('El numero ingresado no es valido');
        return;
    }

    var msg = document.getElementById('msg').value;
    if (msg.length == 0) {
        alert('No has escrito ningun mensaje');
        return;
    }

    this.submit();
}

function subscribirse(e){
    if(e && e.keyCode !== 0) {
        alert("¡Suscripción éxitosa!");
        return;
     }
}

// CARROUSEL
var textos = [
    {
        titulo: 'Juegos',
        descripcion: 'En (Nombre) ofrecemos experiencias inovidables, donde ponemos a prueba todos los sentidos del jugador. Explora nuestros juegos y sumergete en un mundo de supervivencia y horror.',
        img: 'imagenes/revillage.jpg',
        link: './juegos.html'
    },
    {
        titulo: 'Nuestra Compañia',
        descripcion: 'Somosss experiencias inovidables, donde ponemos a prueba todos los sentidos del jugador. Explora nuestros juegos y sumergete en un mundo de supervivencia y horror.',
        img: 'imagenes/outlast.jpg',
        link: './nosotros.html'
    },
    {
        titulo: 'Contacto',
        descripcion: 'dsadasdasdas ofrecemos experiencias inovidables, donde ponemos a prueba todos los sentidos del jugador. Explora nuestros juegos y sumergete en un mundo de supervivencia y horror.',
        img: 'imagenes/plaguetale.jpg',
        link: './contacto.html'
    },
];
var cont = 0;
function carrousel(contenedor){
    contenedor.addEventListener('click', e =>{
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = e.target;

        if(tgt == atras){
            if(cont > 0){
                img.src = textos[cont - 1].img;
                document.getElementById('text').innerHTML =`
                    <h2>${textos[cont - 1].titulo}</h2>
                    <p>${textos[cont - 1].descripcion}</p>
                    <a href="${textos[cont - 1].link}">Ver más</a>
                `;
                cont--;
            }else{
                img.src = textos[textos.length - 1].img;
                document.getElementById('text').innerHTML =`
                    <h2>${textos[textos.length - 1].titulo}</h2>
                    <p>${textos[textos.length - 1].descripcion}</p>
                    <a href="${textos[textos.length - 1].link}">Ver más</a>
                `;
                cont = textos.length-1;
            }
        } else if(tgt == adelante){
            if(cont < textos.length - 1){
                img.src = textos[cont+1].img;
                document.getElementById('text').innerHTML =`
                    <h2>${textos[cont+1].titulo}</h2>
                    <p>${textos[cont+1].descripcion}</p>
                    <a href="${textos[cont+1].link}">Ver más</a>
                `;
                cont++;
            }else{
                img.src = textos[0].img;
                document.getElementById('text').innerHTML =`
                    <h2>${textos[0].titulo}</h2>
                    <p>${textos[0].descripcion}</p>
                    <a href="${textos[0].link}">Ver más</a>
                `;
                cont=0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.container-full-carrusel')
    carrousel(contenedor);
});