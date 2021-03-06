import { Router, Request, Response } from 'express';

const msg_router = Router();

msg_router.get('/msg', (req: Request, res: Response) => {
    return res.json({
        ok: true,
        msg: 'GET - Ready'
    });
});

msg_router.post('/msg', (req: Request, res: Response) => {
    const { from, body } = req.body;
    
    return res.json({
        ok: true,
        msg: 'POST - Ready',
        from,
        body
    });
});

msg_router.post('/msg/:id', (req: Request, res: Response) => {
    const { from, body } = req.body;
    const { id } = req.params;

    return res.json({
        ok: true,
        msg: 'POST - Ready',
        from,
        body,
        id
    });
});

export default msg_router;

