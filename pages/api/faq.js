import mongodb from '../../lib/mongodb';
import Faq from '../../models/Faq';

mongodb();

export default async function handler (req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const notes = await Faq.find({});

                res.status(200).json({ success: true, data: notes })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const note = await Faq.create(req.body);

                res.status(201).json({ success: true, data: note })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}