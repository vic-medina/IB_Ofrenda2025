window.onload = function () {
  const personajes = [
    {
      id: 'bioAlfonso',
      marcador: 'alfonsoMarker',
      txFrontal3: '#alfonso3',
      txFrontal4: '#alfonso4',
      reverso: '#alfonsoR',
    },
    {
      id: 'bioAntonio',
      marcador: 'antonioMarker',
      txFrontal3: '#antonio3',
      txFrontal4: '#antonio4',
      reverso: '#antonioR',
    },
    {
      id: 'bioCarlos',
      marcador: 'carlosMarker',
      txFrontal3: '#carlos3',
      txFrontal4: '#carlos4',
      reverso: '#carlosR',
    },
    {
      id: 'bioCuesta',
      marcador: 'cuestaMarker',
      txFrontal3: '#cuesta3',
      txFrontal4: '#cuesta4',
      reverso: '#cuestaR',
    },
    {
      id: 'bioClemente',
      marcador: 'clementeMarker',
      txFrontal3: '#clemente3',
      txFrontal4: '#clemente4',
      reverso: '#clementeR',
    },
    {
      id: 'bioEduardo',
      marcador: 'eduardoMarker',
      txFrontal3: '#eduardo3',
      txFrontal4: '#eduardo4',
      reverso: '#eduardoR',
    },
    {
      id: 'bioFederico',
      marcador: 'federicoMarker',
      txFrontal3: '#federico3',
      txFrontal4: '#federico4',
      reverso: '#federicoR',
    },
    {
      id: 'bioHelia',
      marcador: 'heliaMarker',
      txFrontal3: '#helia3',
      txFrontal4: '#helia4',
      reverso: '#heliaR',
    },
    {
      id: 'bioJacobo',
      marcador: 'jacoboMarker',
      txFrontal3: '#jacobo3',
      txFrontal4: '#jacobo4',
      reverso: '#jacoboR',
    },
    {
      id: 'bioJose',
      marcador: 'joseMarker',
      txFrontal3: '#jose3',
      txFrontal4: '#jose4',
      reverso: '#joseR',
    },
    {
      id: 'bioGomez',
      marcador: 'gomezMarker',
      txFrontal3: '#gomez3',
      txFrontal4: '#gomez4',
      reverso: '#gomezR',
    },
    {
      id: 'bioLeopoldo',
      marcador: 'leopoldoMarker',
      txFrontal3: '#leopoldo3',
      txFrontal4: '#leopoldo4',
      reverso: '#leopoldoR',
    }
  ];

  personajes.forEach(p => {
  const bio = new Biografia(
    p.id, p.txFrontal3, p.txFrontal4, p.reverso, p.scale
  );
  const marcador = document.querySelector(`#${p.marcador}`);
    if (!marcador) {
      console.warn(`Marcador no encontrado: ${p.marcador}`);
      return;
    }

  const entidad = bio.crearEntidad();
  marcador.appendChild(entidad);

  let marcadorVisible = null;

// Escucha cuando cada marcador aparece o desaparece
document.querySelectorAll('a-marker').forEach(marker => {
  marker.addEventListener('markerFound', () => marcadorVisible = marker);
  marker.addEventListener('markerLost', () => marcadorVisible = null);
});

// Escucha el toque real del usuario

document.body.addEventListener('touchstart', () => {
  if (!marcadorVisible) return; // si no hay marcador, no hace nada

  // busca la entidad hija (tu biografía)
  const entidad = marcadorVisible.firstElementChild;
  if (!entidad) return;

  if (entidad.isAnimating) return;
  entidad.isAnimating = true;

  const rot = entidad.getAttribute('rotation');
  const nuevaZ = (rot.z + 180) % 360;

  entidad.removeAttribute('animation__rotar');
  entidad.setAttribute('animation__rotar', {
    property: 'rotation',
    to: `0 0 ${nuevaZ}`,
    dur: 500,
    easing: 'easeInOutQuad'
  });

  setTimeout(() => entidad.isAnimating = false, 500);
});
});
}