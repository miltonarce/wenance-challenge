# Wenance-Challenge By Milton Arce

FrontEnd Challenge to Wenance

Para correr el proyecto ejecutar:

> npm install

> npm start

- El proyecto va a correr en http://localhost:5000/

# Tecnologías usadas:

- Webpack
- React
- Redux
- Styled Componets
- Axios

# Resumen:

A lo largo del challenge se trato de armar de manera escalable por eso se agrupan cada componente en sus propias carpetas con sus estilos unicos, en el caso de estilos compartidos se agregan en assets ya que funciona para varios componentes. La misma logica fue aplicada para casi todo, servicios, componentes, redux, etc.

- En cuanto a UI/UX se trato de darle información inicial al usuario como un listado en el cual ya pueda sugerirle personas sin necesidad de buscar.

- Se pueden filtar por medio del search las mismas. Ubiese estado bueno utilizar el search para buscar con en la API pero la misma no permite busqueda por coincidencias solo por id, y limita el /people a 10 resultados solamente de los 82 que provee. Si se quisieran ver más se podria agregar un paginador para traer los restantes.

- Se agrego Manejo de errores, spinners, y la funcion que elimina personas lo hace directamente del store de redux como se pidio.
