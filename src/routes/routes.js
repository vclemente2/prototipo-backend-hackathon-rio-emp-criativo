import { Router } from 'express';
import companyLogin from '../controllers/authController.js';
import createCompany from '../controllers/companyController.js';
import verifyRequiredField from '../middlewares/companyMiddlewares.js';

const routes = Router();

routes.post(
    '/company',
    verifyRequiredField,
    createCompany
);

routes.post('/login', companyLogin)

routes.post('/event', () => { });
routes.get('/event', () => { });
routes.put('/event', () => { });
routes.delete('/event', () => { });


export default routes;