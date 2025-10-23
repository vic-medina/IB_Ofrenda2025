window.onload = function () {
  const personajes = [
    {
      id: 'bioAlfonso',
      marcador: 'alfonsoMarker',
      txFrontal3: '#alfonso3',
      txFrontal4: '#alfonso4',
      reverso: '#alfonsoR',
      scale: '1.25 1.25 1.25',
      pos: '0 0 0'
    },
    {
      id: 'bioCarlos',
      marcador: 'carlosMarker',
      txFrontal3: '#carlos3',
      txFrontal4: '#carlos4',
      reverso: '#carlosR',
      scale: '1.2 1.2 1.2',
      pos: '0 0 0'
    },
    {
      id: 'bioCuesta',
      marcador: 'cuestaMarker',
      txFrontal3: '#cuesta3',
      txFrontal4: '#cuesta4',
      reverso: '#cuestaR',
      scale: '1.2 1.2 1.2',
      pos: '0 0 0'
    },
    {
      id: 'bioClemente',
      marcador: 'clementeMarker',
      txFrontal3: '#clemente3',
      txFrontal4: '#clemente4',
      reverso: '#clementeR',
      scale: '1.2 1.2 1.2',
      pos: '0 0 0'
    },
    {
      id: 'bioEduardo',
      marcador: 'eduardoMarker',
      txFrontal3: '#eduardo3',
      txFrontal4: '#eduardo4',
      reverso: '#eduardoR',
      scale: '1.2 1.2 1.2',
      pos: '0 0 0'
    },
    {
      id: 'bioFederico',
      marcador: 'federicoMarker',
      txFrontal3: '#federico3',
      txFrontal4: '#federico4',
      reverso: '#federicoR',
      scale: '1.2 1.2 1.2',
      pos: '0 0 0'
    },
    {
      id: 'bioHelia',
      marcador: 'heliaMarker',
      txFrontal3: '#helia3',
      txFrontal4: '#helia4',
      reverso: '#heliaR',
      scale: '1.2 1.2 1.2',
      pos: '0 0 0'
    },
    {
      id: 'bioJacobo',
      marcador: 'jacoboMarker',
      txFrontal3: '#jacobo3',
      txFrontal4: '#jacobo4',
      reverso: '#jacoboR',
      scale: '1.2 1.2 1.2',
      pos: '0 0 0'
    },
    {
      id: 'bioJose',
      marcador: 'joseMarker',
      txFrontal3: '#jose3',
      txFrontal4: '#jose4',
      reverso: '#joseR',
      scale: '1.2 1.2 1.2',
      pos: '0 0 0'
    },
    {
      id: 'bioGomez',
      marcador: 'gomezMarker',
      txFrontal3: '#gomez3',
      txFrontal4: '#gomez4',
      reverso: '#gomezR',
      scale: '1.2 1.2 1.2',
      pos: '0 0 0'
    },
    {
      id: 'bioLeopoldo',
      marcador: 'leopoldoMarker',
      txFrontal3: '#leopoldo3',
      txFrontal4: '#leopoldo4',
      reverso: '#leopoldoR',
      scale: '1.2 1.2 1.2',
      pos: '0 0 0'
    }
  ];

  personajes.forEach(p => {
  const bio = new Biografia(
    p.id, p.txFrontal3, p.txFrontal4, p.reverso, p.scale, p.pos
  );
  const marcador = document.querySelector(`#${p.marcador}`);
    if (!marcador) {
      console.warn(`Marcador no encontrado: ${p.marcador}`);
      return;
    }

  const entidad = bio.crearEntidad();
  marcador.appendChild(entidad);

  let isAnimating = false;

  entidad.addEventListener('click', () => {
    if (isAnimating) return; // Ignora si ya está animando
    isAnimating = true;

    console.log(`¡Hola! Has hecho clic en ${p.id}`);

    const rotacionActual = entidad.getAttribute('rotation');
    const nuevaRotacionZ = (rotacionActual.z + 180) % 360;

    // Eliminar animaciones anteriores si existen
    entidad.removeAttribute('animation__rotar');

    // Agregar nueva animación
    entidad.setAttribute('animation__rotar', {
      property: 'rotation',
      to: `0 0 ${nuevaRotacionZ}`,
      dur: 500,
      easing: 'easeInOutQuad'
    });

    // Liberar la bandera después de la duración
    setTimeout(() => {
      isAnimating = false;
    }, 500);
  });
  });
};
