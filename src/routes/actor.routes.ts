import { Router } from 'express';
import {
  getAllActors,
  getActorById,
  createActor,
  updateActor,
  deleteActor,
} from '../controllers/actor.controller';

const router = Router();

router.get('/', getAllActors);
router.get('/:id', getActorById);
router.post('/', createActor);
router.put('/:id', updateActor);
router.delete('/:id', deleteActor);

export default router;
