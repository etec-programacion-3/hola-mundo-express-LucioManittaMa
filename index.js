import express from 'express';

const app = express();
const port = 3000;

/**
 * Endpoint que saluda a la persona cuyo nombre se pasa como parámetro en la URL.
 *
 * @route GET /:nombre
 * @param {string} nombre - El nombre de la persona a saludar.
 * @returns {string} Un mensaje de saludo con el nombre.
 */
app.get('/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola ${nombre}!`);
});

/**
 * Endpoint principal que pide al usuario ingresar un nombre en la ruta.
 *
 * @route GET /
 * @returns {string} Un mensaje pidiendo al usuario que ingrese un nombre.
 */
app.get('/', (req, res) => {
  res.send(`Ingresa un nombre la ruta!`);
});

/**
 * Inicia el servidor y escucha en el puerto 3000.
 *
 * @name listen
 * @memberof app
 * @function
 * @param {number} port - El puerto en el que el servidor está escuchando.
 * @param {function} callback - La función a ejecutar cuando el servidor está listo.
 */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});