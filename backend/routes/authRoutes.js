const { Router } = require('express');
const sign_up = require('../controllers/authControler');

const routes = Router();

routes.post('/api/signup', sign_up);

module.exports = routes
