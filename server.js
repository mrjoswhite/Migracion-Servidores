const express = require('express');
const app = express();
const tasks = [
    {
      id: '123456',
      isCompleted: false,
      description: 'Walk the dog',
    },

  ];
  
  app.get('/tasks', (req, res) => {
    res.json(tasks);
  });
  
  app.listen(3000, () => {
  console.log('Servidor Express iniciado en el puerto 3000');
});
