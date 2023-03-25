import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import connection from '../config/database.js';

const companyLogin = async (req, res) => {
    const { cnpj, senha } = req.body;

    if (!cnpj || !senha) {
        return res.status(400).json({ message: 'All fields are required.' })
    }

    try {
        const companyExists = await connection('companies').where({ cnpj }).first();

        if (!companyExists) {
            return res.status(403).json({ message: 'Incorrect cnpj or password' });
        }

        const correctPassword = await bcrypt.compare(senha, companyExists.senha);

        if (!correctPassword) {
            return res.status(403).json({ message: 'Incorrect cnpj or password' });
        }

        const token = jwt.sign({ id: companyExists.id }, process.env.JWT_PASS, { expiresIn: '8h' });


        const { senha: _, ...company } = companyExists;

        return res.status(201).json({ ...company, token });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export default companyLogin;