import jwt from 'jsonwebtoken';
import connection from '../config/database.js';

const authCompany = async (req, res, next) => {
    const { authorization } = req.headers;
    console.log(authorization)
    if (!authorization) {
        return res.status(401).json({ message: 'An authentication token is required to access this feature.' });
    }
    console.log('passou aqui')
    try {
        const token = authorization.split(' ')[0];
        console.log(token);
        const { id } = jwt.verify(token, process.env.JWT_PASS);
        console.log(id);
        const company = await connection('companies').select(['id', 'nome', 'cnpj', 'segmento']).where({ id }).first();

        req.user = company;

        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'An authentication token is required to access this feature.' })
        }
        return res.status(500).json({ message: error.message });
    }
}

export default authCompany;