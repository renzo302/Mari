
const CANTIDAD_PETALOS = 20; 
const flores = document.querySelectorAll('.flor');

flores.forEach(flor => {
    const contenedor = flor.querySelector('.petalos-container');
    const grados = 360 / CANTIDAD_PETALOS;

    for (let i = 0; i < CANTIDAD_PETALOS; i++) {
        const petalo = document.createElement('div');
        petalo.classList.add('petalo-g');
        
      
        petalo.style.transform = `rotate(${i * grados}deg) translateY(-18px)`;
        contenedor.appendChild(petalo);
    }
});


const modal = document.getElementById('modal-mensaje');
const textoModal = document.getElementById('texto-mensaje');

flores.forEach(flor => {
    flor.addEventListener('click', () => {
        
        textoModal.textContent = flor.getAttribute('data-mensaje');
        modal.classList.remove('oculto');
    });
});


modal.addEventListener('click', () => {
    modal.classList.add('oculto');
});


const contenedorLluvia = document.getElementById('lluvia-petalos');

function crearPetaloFondo() {
    const p = document.createElement('div');
    p.style.position = 'absolute';
    p.style.backgroundColor = '#FFD700'; 
    p.style.borderRadius = '15px 0 15px 0'; 
    p.style.opacity = '0.6';
   
    const size = Math.random() * 8 + 8;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}vw`;
    
    
    const duracion = Math.random() * 3 + 4; 
    
    
    p.animate([
        { transform: 'translateY(-20px) rotate(0deg)' },
        { transform: `translateY(105vh) rotate(${Math.random() * 360 + 360}deg)` }
    ], { 
        duration: duracion * 1000, 
        easing: 'linear', 
        fill: 'forwards' 
    });

    contenedorLluvia.appendChild(p);

    
    setTimeout(() => p.remove(), duracion * 1000);
}


setInterval(crearPetaloFondo, 150);


const dedicatoria = "Te amo mucho mi amor, espero te guste este pequeño detalle asi no sea mucho, lo hice con todo mi amor y cariño pra ti mi vida.<3 <br><br> TE AMO CON TODO MI SER❤️ ";

const elementoTexto = document.getElementById('texto-escribiendo');
let i = 0;

function maquinaEscribir() {
    if (i < dedicatoria.length) {
        
        elementoTexto.innerHTML = dedicatoria.substring(0, i + 1) + '<span class="cursor"></span>';
        i++;
        
        
        setTimeout(maquinaEscribir, 70); 
    } else {
        
        elementoTexto.innerHTML = dedicatoria + '<span class="cursor"></span>';
    }
}




const btnAbrir = document.getElementById('btn-abrir');
const pantallaBienvenida = document.getElementById('pantalla-bienvenida');
const musica = document.getElementById('musica-fondo');

btnAbrir.addEventListener('click', () => {
    
    musica.play();
    
    
    document.body.classList.remove('esperando');
    
    // 3. Desvanece la pantalla de bienvenida
    pantallaBienvenida.style.opacity = '0';
    setTimeout(() => {
        pantallaBienvenida.style.display = 'none';
    }, 1000);

    
    setTimeout(maquinaEscribir, 4500);
});

