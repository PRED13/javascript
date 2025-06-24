const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Base de datos en memoria
let tareas = [];

// Obtener todas las tareas
app.get('/tareas', (req, res) => {
  res.json(tareas);
});

// Crear una nueva tarea
app.post('/tareas', (req, res) => {
  const { titulo } = req.body;

  if (!titulo) {
    return res.status(400).json({ error: 'El título es obligatorio' });
  }

  const nuevaTarea = {
    id: uuidv4(),
    titulo,
    completada: false
  };

  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

// Actualizar una tarea existente
app.put('/tareas/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, completada } = req.body;

  const tarea = tareas.find(t => t.id === id);
  if (!tarea) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  if (titulo !== undefined) tarea.titulo = titulo;
  if (completada !== undefined) tarea.completada = completada;

  res.json(tarea);
});

// Eliminar una tarea
app.delete('/tareas/:id', (req, res) => {
  const { id } = req.params;
  const index = tareas.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  tareas.splice(index, 1);
  res.json({ mensaje: 'Tarea eliminada' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
