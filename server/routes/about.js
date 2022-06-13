// Importar Express
const express = require('express');
// Importamos el enrutador de express
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  // render manda a renderizar (generar y entregar)

  res.render(
    'about',
    // Este es el View-Model
    {
      name: 'Ernesto rodriguez',
      email: 'ernestorodriguez643@gmail.com',
      url: 'www.rzant.com',
    }
  );
});

module.exports = router;
