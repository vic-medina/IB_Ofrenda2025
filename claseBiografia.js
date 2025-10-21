const texturas = {
  text1: "#fondo1",
  text2: "#fondo2",
  text3: "#fondo3",
  text4: "#fondo4",
  text7: "#fondo7"
};

class Biografia {

  constructor(id, txFrontal5, txFrontal6, texturaTrasera, scale = '1 1 1', position = '0 0 0') {
    this.id = id;
    this.texturaFrontal1 = texturas.text1;
    this.texturaFrontal2 = texturas.text2;
    this.texturaFrontal3 = texturas.text3;
    this.texturaFrontal4 = texturas.text4;
    this.texturaFrontal5 = txFrontal5;
    this.texturaFrontal6 = txFrontal6;
    this.texturaFrontal7 = texturas.text7;
    this.texturaTrasera = texturaTrasera;
    this.scale = scale;
    this.position = position;
  }

  crearEntidad() {
    const entidad = document.createElement('a-entity');
    entidad.setAttribute('id', this.id);
    entidad.setAttribute('position', this.position);
    entidad.setAttribute('scale', this.scale);

    // Plano frontal1
    const planoFrontal1 = document.createElement('a-plane');
    planoFrontal1.setAttribute('material', `src: ${this.texturaFrontal1}; side: double; transparent: true;`);
    planoFrontal1.setAttribute('position', '0 0 0');
    planoFrontal1.setAttribute('scale', this.scale);
    planoFrontal1.setAttribute('rotation', '-90 0 0');
    planoFrontal1.setAttribute('width', '1.5');
    planoFrontal1.setAttribute('height', '2');
    
    // Plano frontal2
    const planoFrontal2 = document.createElement('a-plane');
    planoFrontal2.setAttribute('material', `src: ${this.texturaFrontal2}; side: double; transparent: true;`);
    planoFrontal2.setAttribute('position', '0 .15 0');
    planoFrontal2.setAttribute('scale', this.scale);
    planoFrontal2.setAttribute('rotation', '-90 0 0');
    planoFrontal2.setAttribute('width', '1.5');
    planoFrontal2.setAttribute('height', '2');

    // Plano frontal3
    const planoFrontal3 = document.createElement('a-plane');
    planoFrontal3.setAttribute('material', `src: ${this.texturaFrontal3}; side: double; transparent: true;`);
    planoFrontal3.setAttribute('position', '0 .25 0');
    planoFrontal3.setAttribute('scale', this.scale);
    planoFrontal3.setAttribute('rotation', '-90 0 0');
    planoFrontal3.setAttribute('width', '1.5');
    planoFrontal3.setAttribute('height', '2');

    // Plano frontal4
    const planoFrontal4 = document.createElement('a-plane');
    planoFrontal4.setAttribute('material', `src: ${this.texturaFrontal4}; side: double; transparent: true;`);
    planoFrontal4.setAttribute('position', '0 .35 0');
    planoFrontal4.setAttribute('scale', this.scale);
    planoFrontal4.setAttribute('rotation', '-90 0 0');
    planoFrontal4.setAttribute('width', '1.5');
    planoFrontal4.setAttribute('height', '2');

    // Plano frontal5
    const planoFrontal5 = document.createElement('a-plane');
    planoFrontal5.setAttribute('material', `src: ${this.texturaFrontal5}; side: double; transparent: true;`);
    planoFrontal5.setAttribute('position', '0 .45 0');
    planoFrontal5.setAttribute('scale', this.scale);
    planoFrontal5.setAttribute('rotation', '-90 0 0');
    planoFrontal5.setAttribute('width', '1.5');
    planoFrontal5.setAttribute('height', '2');

    // Plano frontal6
    const planoFrontal6 = document.createElement('a-plane');
    planoFrontal6.setAttribute('material', `src: ${this.texturaFrontal6}; side: double; transparent: true;`);
    planoFrontal6.setAttribute('position', '0 .55 0');
    planoFrontal6.setAttribute('scale', this.scale);
    planoFrontal6.setAttribute('rotation', '-90 0 0');
    planoFrontal6.setAttribute('width', '1.5');
    planoFrontal6.setAttribute('height', '2');

    // Plano frontal7
    const planoFrontal7 = document.createElement('a-plane');
    planoFrontal7.setAttribute('material', `src: ${this.texturaFrontal7}; side: double; transparent: true;`);
    planoFrontal7.setAttribute('position', '0 .65 0');
    planoFrontal7.setAttribute('scale', this.scale);
    planoFrontal7.setAttribute('rotation', '-90 0 0');
    planoFrontal7.setAttribute('width', '1.5');
    planoFrontal7.setAttribute('height', '2');

    // Plano trasero
    const planoTrasero = document.createElement('a-plane');
    planoTrasero.setAttribute('material', `src: ${this.texturaTrasera}; side: double`);
    planoTrasero.setAttribute('position', '0 -.25 0');
    planoTrasero.setAttribute('scale', this.scale);
    planoTrasero.setAttribute('rotation', '-90 0 0');
    planoTrasero.setAttribute('width', '1.5');
    planoTrasero.setAttribute('height', '2');

    entidad.appendChild(planoFrontal1);
    entidad.appendChild(planoFrontal2);
    entidad.appendChild(planoFrontal3);
    entidad.appendChild(planoFrontal4);
    entidad.appendChild(planoFrontal5);
    entidad.appendChild(planoFrontal6);
    entidad.appendChild(planoFrontal7);
    entidad.appendChild(planoTrasero);

    return entidad;
  }
}