const verifyRequiredFieldEvent = async (req, res, next) => {
    const { nome, preco, data, hora, publico, cep, logradouro, numero, complemento, bairro, cidade, estado } = req.body;

    if (
        !nome || !data || !hora || !publico || !cep || !logradouro || !numero || !bairro || !cidade || !estado ||
        !nome.trim() || !publico.trim() || !cep.trim() || !logradouro.trim() || !numero.trim() || !bairro.trim() || !cidade.trim() || !estado.trim()
    ) {
        return res.status(400).json({ message: "All required fields must be written." })
    }

    req.event = {
        nome: nome.trim(),
        preco,
        data,
        hora,
        publico: publico.trim(),
        cep: cep.trim(),
        logradouro: logradouro.trim(),
        numero: numero.trim(),
        complemento: complemento || null,
        bairro: bairro.trim(),
        cidade: cidade.trim(),
        estado: estado.trim()
    }

    next();
}

export default verifyRequiredFieldEvent;