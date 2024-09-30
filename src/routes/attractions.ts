import { Router, Request, Response } from 'express';
import * as attractionsController from '../controllers/attractions';

const router = Router();

router.post('/attractions', (req: Request, res: Response) => {
  attractionsController.createAttraction(req, res);
});

router.get('/attractions', (req: Request, res: Response) => {
  attractionsController.getAttractions(req, res);
});

router.patch('/attractions/:id', (req: Request, res: Response) => {
  attractionsController.updateAttraction(req, res);
});

export default router;
