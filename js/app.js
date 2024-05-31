console.log(Vue);

const estudiantes = [{ nombre: "Jimmy", apellido: "Ortega" },
{ nombre: "Juan", apellido: "Teran" },
{ nombre: "Lucas", apellido: "Cayambe" },
{ nombre: "Andrea", apellido: "Paez" },
{ nombre: "Tania", apellido: "Castillo" }
];

const app = Vue.createApp({
  /* template: `
     <div>
       <h1>Hola Mundo desde Vue.js</h1>
       <p>{{ 1 + 1 }}</p>
       <p>{{[1,2,3,4]}}</p>
       <p>{{[true?'True':'False']}}</p>
     </div>
   `
   */

  //Propiedades reactivas
  data() {
    return {
      mensaje: "Hola Mundo Propiedad Reactiva",
      valor: 7,
      lista: estudiantes,
      nombre: null,
      apellido: null


    }



  },
  //Tomar enfasis de modificador de acceso
  //metodos
  methods: {
    cambiarTexto() {  // toda propiedad reactiva debe utilizar la palabra this
      this.mensaje = "Texto Cambiado";

    },
    sumar() {
      this.valor = this.valor + 100;
    },
    agregar() {
      console.log(this.nombre);
      console.log(this.apellido);
      const nuevo = {
        nombre: this.nombre,
        apellido: this.apellido
      }
      this.lista.unshift(nuevo);
      this.resetear();
    },
    resetear() {
      this.nombre = null;
      this.apellido = null;
    },
    agregar2({ charCode }) {
      // console.log(event)
      console.log(charCode);

      if (charCode !== 13) return;
      if(this.nombre!==null && this.apellido!==null ){
        this.agregar();
      }
      
    }
  }

});

app.mount('#myApp');
