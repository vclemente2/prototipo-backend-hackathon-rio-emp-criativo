import bcrypt from 'bcrypt';
import connection from '../config/database.js';

const createCompany = async (req, res) => {
    const { nome, cnpj, segmento, senha } = req.body;

    try {
        const senhaEncriptada = await bcrypt.hash(senha, 10);

        const company = await connection('companies').insert({ nome, cnpj, segmento, senha: senhaEncriptada }).returning(['id', 'nome', 'cnpj', 'segmento']);

        if (company.length === 0) {
            return res.status(500).json({ message: 'Internal error. registration not completed' });
        }

        return res.status(201).json(company[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export default createCompany;