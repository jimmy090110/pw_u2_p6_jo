console.log(Vue);

const estudiantes = [{ nombre: "Jimmy", apellido: "Ortega" },
{ nombre: "Juan", apellido: "Teran" },
{ nombre: "Lucas", apellido: "Cayambe" },
{ nombre: "Andrea", apellido: "Paez" },
{ nombre: "Tania", apellido: "Castillo" },
{ nombre: "Pedro", apellido: "Martinez" }
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
      lista:estudiantes,
      
    }
  },
  //metodos
  methods: {
    cambiarTexto() {  // toda propiedad reactiva debe utilizar la palabra this
      this.mensaje = "Texto Cambiado";

    },
    sumar() {
      this.valor = this.valor + 100;
    },
    agregar(){
      const nuevo={
        nombre:"Jimmy",
        apellido:"Ortega"
      }
      this.lista.unshift(nuevo);

    }


  }

});

app.mount('#myApp');
