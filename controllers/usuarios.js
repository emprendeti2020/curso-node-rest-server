
const { response,request } = require('express');

const usuariosGet = (req, res)  => {

  const query = req.query;

    res.json({
        msg: 'get Api controlador',
        query
    });
  }

  const usuariosPost = (req = request, res)  => {

    const body = req.body;
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post Api controlador',
        nombre,
        edad
    });
  }

  const usuariosPut = (req, res)  => {

    //const id = req.params.id;
    const id = req.params;

    res.json({
        msg: 'put Api controlador',
        id
    });
  }

  const usuariosPatch = (req, res)  => {
    res.json({
        msg: 'patch Api controlador'
    });
  }

  const usuariosDelete = (req, res)  => {
    res.json({
        msg: 'delete Api controlador'
    });
  }



  module.exports = {
      usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete
  }