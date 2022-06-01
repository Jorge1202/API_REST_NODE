const express = require('express');
const router = express.Router();

router.get('/:category/productos/:idProduct', (req, res) => {
  const { category, idProduct } = req.params;
  res.json({
    category,
    idProduct,
    idname: 2,
    name: 'Jorge',
  });
});

module.exports = router;
