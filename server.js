const express = require('express');
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

const app = express();
app.use('/list', listViewRouter);
app.use('/list', listEditRouter);

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
