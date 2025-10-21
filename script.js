window.onload = function () {
  const marcHelia = document.querySelector('#heliaMarker');
  const marcIssac = document.querySelector('#issacMarker');
  const marcJose = document.querySelector('#joseMarker');

  const personajes = [
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
    }

  ];

  personajes.forEach(p => {
  const bio = new Biografia(
    p.id, p.txFrontal5, p.txFrontal6, p.reverso, p.scale, p.pos
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