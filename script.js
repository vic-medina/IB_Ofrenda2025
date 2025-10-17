window.onload = function () {
  const marcadorCelula = document.querySelector('#jacoboMarker');
  const marcadorAgave = document.querySelector('#antonioMarker');

  const personajes = [
    {
      id: 'bioJacobo',
      marcador: 'jacoboMarker',
      txFrontal1: '#jacobo1',
      txFrontal2: '#jacobo2',
      txFrontal3: '#jacobo3',
      txFrontal4: '#jacobo4',
      txFrontal5: '#jacobo5',
      txFrontal6: '#jacobo6',
      txFrontal7: '#jacobo7',
      reverso: '#jacoboR',
      scale: '1.25 1.25 1.25',
      pos: '0 0 0'
    },
    {
      id: 'bioAntonio',
      marcador: 'antonioMarker',
      txFrontal1: '#antonio1',
      txFrontal2: '#antonio2',
      txFrontal3: '#antonio3',
      txFrontal4: '#antonio4',
      txFrontal5: '#antonio5',
      txFrontal6: '#antonio6',
      txFrontal7: '#antonio7',
      reverso: '#antonioR',
      scale: '1.25 1.25 1.25',
      pos: '0 0 0'
    }
  ];

  personajes.forEach(p => {
  const bio = new Biografia(
    p.id, p.txFrontal1, p.txFrontal2, p.txFrontal3,
    p.txFrontal4, p.txFrontal5, p.txFrontal6, p.txFrontal7,
    p.reverso, p.scale, p.pos
  );

  const marcador = document.querySelector(`#${p.marcador}`);
  const entidad = bio.crearEntidad();
  marcador.appendChild(entidad);

  // Evento de rotación al hacer clic
  entidad.addEventListener('mousedown', () => {
    console.log(`¡Hola! Has hecho clic en ${p.id}`);
    let rotacion = entidad.getAttribute('rotation');
    let z = rotacion.z || 0;
    z += 180;
    entidad.setAttribute('rotation', `0 0 ${z}`);
  });
  });
} 