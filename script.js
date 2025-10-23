window.onload = function () {
  const personajes = [
    /*
      id: 'bioAntonio',
      marcador: 'antonioMarker',
      txFrontal5: '#antonio5',
      txFrontal6: '#antonio6',
      reverso: '#antonioR',
      scale: '1.25 1.25 1.25',
      pos: '0 0 0'
    },
    {
      id: 'bioCarlos',
      marcador: 'carlosMarker',
      txFrontal5: '#carlos5',
      txFrontal6: '#carlos6',
      reverso: '#carlosR',
      scale: '1.25 1.25 1.25',
      pos: '0 0 0'
    },
    {
      id: 'bioCuesta',
      marcador: 'cuestaMarker',
      txFrontal5: '#cuesta5',
      txFrontal6: '#cuesta6',
      reverso: '#cuestaR',
      scale: '1.25 1.25 1.25',
      pos: '0 0 0'
    },
    {
      id: 'bioClemente',
      marcador: 'clementeMarker',
      txFrontal5: '#clemente5',
      txFrontal6: '#clemente6',
      reverso: '#clementeR',
      scale: '1.25 1.25 1.25',
      pos: '0 0 0'
    },
    {
      id: 'bioEduardo',
      marcador: 'eduardoMarker',
      txFrontal5: '#eduardo5',
      txFrontal6: '#eduardo6',
      reverso: '#eduardoR',
      scale: '1.25 1.25 1.25',
      pos: '0 0 0'
    },
    {
      id: 'bioFrancisco',
      marcador: 'franciscoMarker',
      txFrontal5: '#francisco5',
      txFrontal6: '#francisco6',
      reverso: '#franciscoR',
      scale: '1.25 1.25 1.25',
      pos: '0 0 0'
    },
    {
      id: 'bioMulleried',
      marcador: 'mulleriedMarker',
      txFrontal5: '#mulleried5',
      txFrontal6: '#mulleried6',
      reverso: '#mulleriedR',
      scale: '1.25 1.25 1.25',
      pos: '0 0 0'
    },*/
    {
      id: 'bioHelia',
      marcador: 'heliaMarker',
      txFrontal5: '#helia5',
      txFrontal6: '#helia6',
      reverso: '#heliaR',
      scale: '1.25 1.25 1.25',
      pos: '0 0 0'
    },
    {
      id: 'bioIssac',
      marcador: 'issacMarker',
      txFrontal5: '#issac5',
      txFrontal6: '#issac6',
      reverso: '#issacR',
      scale: '1.25 1.25 1.25',
      pos: '0 0 0'
    },
    {
      id: 'bioJose',
      marcador: 'joseMarker',
      txFrontal5: '#jose5',
      txFrontal6: '#jose6',
      reverso: '#joseR',
      scale: '1.25 1.25 1.25',
      pos: '0 0 0'
    }/*,
    {
      id: 'bioGomez',
      marcador: 'gomezMarker',
      txFrontal5: '#gomez5',
      txFrontal6: '#gomez6',
      reverso: '#gomezR',
      scale: '1.25 1.25 1.25',
      pos: '0 0 0'
    },    
    {
      id: 'bioLeopoldo',
      marcador: 'leopoldoMarker',
      txFrontal5: '#leopoldo5',
      txFrontal6: '#leopoldo6',
      reverso: '#leopoldoR',
      scale: '1.25 1.25 1.25',
      pos: '0 0 0'
    },
    {
      id: 'bioLuis',
      marcador: 'luisMarker',
      txFrontal5: '#luis5',
      txFrontal6: '#luis6',
      reverso: '#luisR',
      scale: '1.25 1.25 1.25',
      pos: '0 0 0'
    },*/

  ];

  personajes.forEach(p => {
  const bio = new Biografia(
    p.id, p.txFrontal5, p.txFrontal6, p.reverso, p.scale, p.pos
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
