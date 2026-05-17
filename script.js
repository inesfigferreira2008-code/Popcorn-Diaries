/* =========================
   CARROSSEL DE IMAGENS
========================= */

let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

/* Botões */
if (nextBtn) nextBtn.addEventListener('click', nextImage);
if (prevBtn) prevBtn.addEventListener('click', prevImage);

/* Autoplay */
if (images.length > 0) {
    showImage(0);
    setInterval(nextImage, 4000);
}


/* =========================
   MENU STICKY
========================= */

const menu = document.querySelector('.menu');
const claquete = document.querySelector('.topo-claquete');

if (menu && claquete) {

    const menuPlaceholder = document.createElement('div');
    menuPlaceholder.style.height = menu.offsetHeight + 'px';
    menuPlaceholder.style.display = 'none';

    menu.parentNode.insertBefore(menuPlaceholder, menu);

    window.addEventListener('scroll', () => {

        if (window.scrollY >= claquete.offsetHeight) {

            menu.classList.add('sticky');
            menuPlaceholder.style.display = 'block';
        } else {
            menu.classList.remove('sticky');
            menuPlaceholder.style.display = 'none';
        }
    });
}

/* ==========================
    ACESSIBILIDADE
=============================*/

let accessibilityBtn = document.getElementById("accessibility-btn");
const accessibilityMenu = document.getElementById("accessibility-menu");

if (!accessibilityBtn && accessibilityMenu) {
    accessibilityBtn = document.createElement('button');
    accessibilityBtn.id = 'accessibility-btn';
    accessibilityBtn.setAttribute('aria-label', 'Menu de acessibilidade');
    accessibilityBtn.innerText = '❔';
    document.body.appendChild(accessibilityBtn);
}

if (accessibilityBtn) {
    accessibilityBtn.addEventListener("click", () => {
        if (!accessibilityMenu) return;

        if (accessibilityMenu.style.display === "flex") {
            accessibilityMenu.style.display = "none";
        } else {
            accessibilityMenu.style.display = "flex";
        }
    });
}


// TAMANHO TEXTO
let currentFontSize = 100;

function changeFontSize(value) {

    currentFontSize += value * 10;

    document.body.style.fontSize = currentFontSize + "%";
}


// ALTO CONTRASTE
function toggleContrast() {
    document.body.classList.toggle("high-contrast");
}


// ESCALA CINZENTOS
function toggleGrayscale() {
    const pageContent = document.getElementById('page-content');
    const accessibilityBtn = document.getElementById('accessibility-btn');
    const accessibilityMenu = document.getElementById('accessibility-menu');

    if (pageContent) {
        pageContent.classList.toggle('grayscale');
    } else {
        document.body.classList.toggle('grayscale');
    }

    if (accessibilityBtn) accessibilityBtn.classList.toggle('grayscale');
    if (accessibilityMenu) accessibilityMenu.classList.toggle('grayscale');
}


// FONTE LEGÍVEL
function toggleReadableFont() {
    document.body.classList.toggle("readable-font");
}


// NARRADOR
function readPage() {

    const text = document.body.innerText;

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "pt-PT";

    window.speechSynthesis.speak(speech);
}



/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.getElementById('menuToggle');
const menuList = document.querySelector('.menu ul');

if (menuToggle && menuList) {

    menuToggle.addEventListener('click', () => {
        menuList.classList.toggle('active');
    });

}

// Fallback para mailto (força location.href se o link não funcionar)
document.addEventListener('DOMContentLoaded', () => {
    const footerEmail = document.getElementById('footer-email');
    if (footerEmail) {
        footerEmail.addEventListener('click', (e) => {
            // tenta abrir normalmente; se não houver suporte, usa location.href como fallback
            try {
                // small timeout to allow default action — if it doesn't navigate, we force it
                setTimeout(() => {
                    if (!document.hasFocus()) return;
                    window.location.href = footerEmail.href;
                }, 100);
            } catch (err) {
                window.location.href = footerEmail.href;
            }
        });
    }
});