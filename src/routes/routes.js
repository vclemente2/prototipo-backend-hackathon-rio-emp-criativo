import { Router } from 'express';
import companyLogin from '../controllers/authController.js';
import createCompany from '../controllers/companyController.js';
import createEvent from '../controllers/eventController.js';
import authCompany from '../middlewares/authMiddleware.js';
import verifyRequiredFieldCompany from '../middlewares/companyMiddleware.js';
import verifyRequiredFieldEvent from '../middlewares/eventMiddleware.js';

const routes = Router();

routes.post(
    '/company',
    verifyRequiredFieldCompany,
    createCompany
);

routes.post(
    '/login',
    companyLogin
)

routes.use(authCompany);

routes.post('/event', verifyRequiredFieldEvent, createEvent)

// routes.get('/event', () => { });
// routes.put('/event', () => { });
// routes.delete('/event', () => { });


export default routes;