const verifyRequiredField = (req, res, next) => {
    const { nome, cnpj, segmento, senha } = req.body;

    if (
        !nome || !cnpj || !segmento || !senha ||
        !nome.trim() || !cnpj.trim() || !segmento.trim() || !senha.trim()
    ) {
        return res.status(400).json({ message: 'All fields are required.' })
    }

    req.nome = nome.trim();
    req.cnpj = cnpj.trim();
    req.segmento = segmento.trim();
    req.senha = senha.trim();

    next();
}

export default verifyRequiredField;