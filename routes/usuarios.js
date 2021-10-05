
const { Router } = require('express');

const { usuariosGet, 
        usuariosPost, 
        usuariosPut, 
        usuariosPatch, 
        usuariosDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );
router.post('/', usuariosPost );
router.put('/:id', usuariosPut );
router.patch('/', usuariosPatch );
router.delete('/', usuariosDelete );

  /* router.put('/', (req, res)  => {
    res.status(400).json({
        msg: 'put Api'
    })
  });
  
  router.post('/', (req, res)  => {
    res.status(201).json({
        msg: 'post Api'
    })
  });

  router.delete('/', (req, res)  => {
    res.json({
        msg: 'delete Api'
    })
  });  
  
  router.patch('/', (req, res)  => {
    res.json({
        msg: 'patch Api'
    })
  });           
 */


module.exports = router;