document.getElementById("header").innerHTML = `
<nav>
<a href="./index.html"><img src="./imagenes/control-de-juego.png" alt="logo"></a>

<!--Aparece en celulares-->
<svg class="menu-hamburger hide-l" viewBox="0 0 100 80" width="30" height="30">
  <rect width="100" height="20"></rect>
  <rect y="30" width="100" height="20"></rect>
  <rect y="60" width="100" height="20"></rect>
</svg>

    <!--El menú que se desplega en celulares-->
    <!--<div class="menu-desplegable">
        <ul class="menu-desplegable-pags">
            <li><a href="./index.html">Inicio</a></li>
            <li><a href="./juegos.html">Juegos</a></li>
            <li><a href="./nosotros.html">Nosotros</a></li>
            <li><a href="./contacto.html">Contacto</a></li>
        </ul> 
        <div>
            <h1>Siguenos</h1>
            <ul class="menu-desplegable-redes">
                <li><a href="#"><img src="./imagenes/facebook.png" alt="facebook"></a></li>
                <li><a href="#"><img src="./imagenes/gorjeo.png" alt="twitter"></a></li>
                <li><a href="#"><img src="./imagenes/instagram.png" alt="instagram"></a></li>
                <li><a href="#"><img src="./imagenes/youtube.png" alt="youtube"></a></li>
                <li><a href="#"><img src="./imagenes/discord.png" alt="discord"></a></li>
                <li><a href="#"><img src="./imagenes/tumblr.png" alt="tumblr"></a></li>
            </ul>
        </div>
    </div>-->



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
    <p>Lorem ipaaaaaaaaaaasum dolor sit amet consectetur adipisicing elit. Para saber mas hace click <a
            href="nosotros.html">AQUI</a></p>
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