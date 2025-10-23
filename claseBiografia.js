const texturas = {
  comunes: ['#fondo1', '#fondo2', '#fondo3', '#fondo4', '#fondo7']
};

class Biografia {
  constructor(id, txFrontal5, txFrontal6, texturaTrasera, scale = '1 1 1', position = '0 0 0') {
    this.id = id;
    this.texturasFrontales = [...texturas.comunes.slice(0, 4), txFrontal5, txFrontal6, texturas.comunes[4]];
    this.texturaTrasera = texturaTrasera;
    this.scale = scale;
    this.position = position;
  }

  crearPlano(src, yOffset) {
    const plano = document.createElement('a-plane');
    plano.setAttribute('material', `src: ${src}; side: double; transparent: true;`);
    plano.setAttribute('position', `0 ${yOffset} 0`);
    plano.setAttribute('scale', this.scale);
    plano.setAttribute('rotation', '-90 0 0');
    plano.setAttribute('width', '1.5');
    plano.setAttribute('height', '2');
    return plano;
  }

  crearEntidad() {
    const entidad = document.createElement('a-entity');
    entidad.setAttribute('id', this.id);
    entidad.setAttribute('position', this.position);
    entidad.setAttribute('scale', this.scale);

    // Planos frontales (1 al 7)
    this.texturasFrontales.forEach((src, i) => {
      const yOffset = (i * 0.1).toFixed(2); // Espaciado vertical
      entidad.appendChild(this.crearPlano(src, yOffset));
    });

    // Plano trasero
    const planoTrasero = this.crearPlano(this.texturaTrasera, '-0.25');
    entidad.appendChild(planoTrasero);

    return entidad;
  }
}