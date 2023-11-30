

const fs = require('fs');

const loggerMiddleware = (req, res, next) => {
  const fechaActual = new Date();
  const formatoFecha = `${fechaActual.getFullYear()}/${(fechaActual.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${fechaActual.getDate().toString().padStart(2, '0')}`;
  const formatoHora = `${fechaActual.getHours().toString().padStart(2, '0')}:${fechaActual.getMinutes().toString().padStart(2, '0')}`;

  const log = `${formatoFecha} ${formatoHora} [${req.method}] ${req.url}\n`;

  // Guardar el log en un archivo
  fs.appendFile('logs.txt', log, (err) => {
    if (err) {
      console.error('Error al escribir en el archivo de logs:', err);
    }
  });

  next();
};

module.exports = loggerMiddleware;
