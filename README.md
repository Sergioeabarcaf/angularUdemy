# angularUdemy
Desarrollo del curso de angular 4 dictado en Udemy

#Instalaciones en el computador
*Nodejs
*Google Chrome
*TypeScript
*AngularCLI
*Ionic2
*git
*Atom
  -*Angular 2 Type Script Snippets
  -*Atom Bootstrap3
  -*Atom Typescript
  -*File Icons
  -*Platformio Ide Terminal
  -*V Bootstrap4
  -*autocomplete-js-import
    --habilitar fuzzy file matching
    --descartivar commonjs "require"
    --remove extension ".js, .ts"

#Uso de TypeScript y ES6
*TypeScript
  -para compilar un archivo .ts se debe ejecutar en la terminal
  tsc "nombre archivo" -w
  De esta forma TypeScript esta en modo observador para detectar los cambios y compilar nuevamente de manera automatica

  -Cuando se quiere observar mas de un archivo .ts a la vez, hay que inicializar un proyecto
  tsc -init

  -let = separa las variables locales de las globales. De esta forma Typescript le da un valor distinto para utilizarlo

  -var = variables gloables de js

  -const = variables que no se pueden cambiar y necesitan ser definidas al momento de declararlas

  las variables se declaran con el tipo de dato
  let "nombreVariable":"tipoDato" = "valorDato";
  let perro:string = "chocolo";
  tipos de datos: string, number, boolean,Date,any (flexibilizar la variable)

  -template literales:

  let texto = `hola, ${nombre} ${apellido} (${edad})`;

  -Parametro funciones
  Los parametros de las funciones pueden ser obligatorios, por defecto u opcionales
  function activar (quien:string (obligatorio), objeto:string = "algo" (por defecto),momento?:string(opcional))

  -funcion de flecha
  let funcion = function (a){return a;} (normal)
  let funcion = a => a; (flecha)

  -destruccion de objetos y arreglos
   -objetos

   let nombre = objeto.nombre;
   let apellido = objeto.apellido;

   let {nombre, apellido} = objeto;
   //Independientemente del orden, se tienen que tener el mismo nombre que las propiedades del objeto

   -arreglos
   let objeto:string[] = ["a1","a2","a3"];

   let [algo1,algo2,algo3] = objeto;

   //Mantiene el orden de los elementos, Independientemente del nombre

  *Promesas
    sirven para ejecutar codigos que cumplen o no con la condicion

  *Interfaces TS
    interface Algo{
      nombre:string,
      apellido:string
    }

    let cosa:Algo ={
      nombre:"cosa",
      apellido:"algo"
    }

  *POO
    -Clases
      class Algo{
        nombre:string = undefined;
        material:string = undefined;
        valor:number = 0;

        //constructor
        constructor(nombre:string,material:string){
          this.nombre = nombre;
          this.material = material;

        }
      }

      let caja:Algo = new Algo("caja","carton");
