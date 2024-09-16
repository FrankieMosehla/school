const { Router } = require('express');
const {
    sign_up,
    sign_in,
    createMaterial,
    buy_material,
    get_currentUser,
    get_materials,
} = require('../controllers/userControlers'); // Import all controller functions
const authenticate = require('../middleware/authMiddleware');

const route = Router();

// User routes
route.post('/api/signup', sign_up);   // Sign-up route
route.post('/api/signin', sign_in);  
route.get('/api/user', authenticate, get_currentUser)
route.get('/api/materials', authenticate, get_materials)
 // Sign-in route
route.post('/api/addMaterials',  authenticate, createMaterial)
route.post('/api/buy/:id', authenticate, buy_material)

module.exports = route;
