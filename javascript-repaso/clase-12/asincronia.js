// asincronia y promesas

/* 
    La sincronía y la asincronía en JavaScript se refieren a cómo se manejan las tareas en el entorno de ejecución del navegador o del servidor.

Sincronía:
En el modelo sincrónico, las tareas se ejecutan una tras otra en el orden en que se escriben en el código, de manera secuencial. Cuando una tarea se está ejecutando, el programa espera a que esa tarea se complete antes de pasar a la siguiente. Esto significa que si una tarea tarda mucho en completarse, puede bloquear la ejecución de otras tareas y hacer que la interfaz de usuario (en el caso del navegador) parezca lenta o congelada.

Asincronía:
En el modelo asíncrono, las tareas pueden iniciarse, ejecutarse y completarse en momentos diferentes, sin bloquear la ejecución de otras tareas. Esto se logra mediante el uso de callbacks, promesas, y en versiones más recientes de JavaScript, async/await. Cuando se inicia una tarea asíncrona, el programa no espera a que se complete antes de pasar a la siguiente tarea. En su lugar, se proporciona una función de callback que se ejecutará una vez que la tarea asíncrona esté completa.

La asincronía es especialmente útil para tareas que pueden llevar tiempo, como cargar recursos externos (como imágenes o datos de un servidor), realizar operaciones de entrada/salida (como leer archivos o hacer solicitudes de red) o realizar operaciones costosas en términos de procesamiento (como cálculos intensivos).

Un ejemplo de sincronía podría ser la lectura de un archivo de texto línea por línea, donde cada línea se procesa antes de pasar a la siguiente. Un ejemplo de asincronía podría ser realizar una solicitud AJAX para obtener datos de un servidor mientras el usuario sigue interactuando con la página web sin bloquearse.
*/

// seTimeout(funcion, tiempo)la función setTimeout se utiliza para simular una solicitud asíncrona al servidor que tarda 2 segundos en responder. Mientras tanto, el programa continúa ejecutándose y la línea console.log("Fin del programa") se ejecuta inmediatamente después de que se haya programado el temporizador.

console.log("Inicio del programa");

// Simulando una solicitud asíncrona al servidor que tarda 2 segundos en responder
setTimeout(() => {
    console.log("Datos del servidor recibidos después de 2 segundos");
    console.log("Fin del programa");
}, 2000);

// call stack
/* El "call stack" (pila de llamadas) es una estructura de datos que se utiliza en la programación para administrar la ejecución de las funciones en un programa. Funciona como una pila de datos, donde las funciones que se llaman se apilan unas encima de otras, y cuando una función se completa, se elimina de la pila.

Cuando se ejecuta un programa, el intérprete de JavaScript (o el motor de ejecución en el caso de Node.js) mantiene un seguimiento de las funciones que se están llamando en ese momento y en qué orden se están llamando, y lo hace utilizando la pila de llamadas.

Cuando una función es llamada, se coloca en la parte superior de la pila. El intérprete luego ejecuta esa función y, si dentro de esa función se llama a otra función, esa nueva función se coloca en la parte superior de la pila, y así sucesivamente. Cuando una función se completa (es decir, todas sus instrucciones han sido ejecutadas), se elimina de la pila y el control vuelve a la función que la llamó.

El seguimiento de la pila de llamadas es importante para entender el flujo de ejecución del programa y también para detectar errores de desbordamiento de pila (stack overflow) que pueden ocurrir cuando hay demasiadas funciones anidadas o una función recursiva no termina correctamente.

En resumen, el call stack es una estructura de datos fundamental en la ejecución de programas que ayuda a rastrear y gestionar las llamadas a funciones. */

/* 
Las promesas en JavaScript son objetos que representan el resultado eventual (éxito o fracaso) de una operación asíncrona. Son una forma de trabajar con código asíncrono de manera más intuitiva y flexible que los callbacks tradicionales. Las promesas tienen tres estados posibles:

Pendiente (Pending): Estado inicial de la promesa. Esto significa que la operación asíncrona aún no se ha completado.

Cumplida (Fulfilled): La operación asíncrona se completó con éxito y se cumplió la promesa. En este caso, se puede acceder al valor resultante de la operación.

Rechazada (Rejected): La operación asíncrona falló y la promesa fue rechazada. En este caso, se puede acceder al motivo del fallo.

Las promesas se pueden crear utilizando el constructor Promise, que toma una función como argumento, conocida como "executor". Esta función a su vez toma dos argumentos: resolve y reject. Dentro de esta función, puedes realizar una operación asíncrona, y cuando esa operación se complete, puedes llamar a resolve si la operación fue exitosa o a reject si hubo un error.
*/

const loadData = new Promise((resolve, reject) => {
    // Simulando una operación asíncrona (por ejemplo, una solicitud HTTP)
    setTimeout(() => {
        const success = true; // Cambiar a false para simular un error
        if (success) {
            resolve("Datos cargados exitosamente");
        } else {
            reject("Error al cargar datos");
        }
    }, 2000); // Simulamos un retardo de 2 segundos
});

loadData.then((data) => {
    console.log(data); // Imprime "Datos cargados exitosamente"
}).catch((error) => {
    console.error(error); // Imprime "Error al cargar datos"
});
 