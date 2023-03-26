import connection from '../config/database.js';

const createEvent = async (req, res) => {
    const { user, event } = req;

    try {
        const eventCreated = await connection('events').insert({ ...event, company_id: user.id }).returning('*');

        return res.json(eventCreated[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export default createEvent;