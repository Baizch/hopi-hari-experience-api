import { Router, Request, Response } from 'express';
import * as attractionsController from '../controllers/attractions';

const router = Router();

router.get('/attractions', (req: Request, res: Response) => {
  attractionsController.getAttractions(req, res);
});

// TO DO: create route to update attraction status & opening hours

export default router;
