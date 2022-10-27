Si miramos el use context vemos que se renderiza 2 veces, intentar con un consolelog

redux 
- permite manejar el state, mejora eso y de manera más sencilla y escalable
- MANEJA DATOS CONFORME A LAS ACCIONES REALIZADA POR EL USUARIO

caracteristicas
Solo hay un state principal
El state se modifica acorde a las acciones que hace el usuario


Elementos
-Store: Contiene el state(1 por app)
-Action: Tienen un tipo de acción y payload (datos)
-Reducer: Funciones que saben que hacer con el payload
-Dispatch: Encargado de las acciones que actualizan el state
-Suscribe: funcion que se ejecuta cuando sucede un evento

Flujo
Action --- Reduce --- store
   |	                |
   |-------- Ui---------|

El store envia el state a los componentes
el componente envia la interacción del usuario al Action (Agregar elemento, buscar, eliminar)
el action ejecutan el dispatch con la acción al reducer
el reducer actualiza el nuevo state



---------------------------------------------------------------------------------
React
Manejo de State
Context
React Router Dom
Manejo de Boostrap o Cualquier Framework CSS
