import { Request, Response } from 'express';
import { Actor } from '../models/actor';

export const getAllActors = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const actors = await Actor.findAll();
    res.status(200).json(actors);
  } catch (error) {
    console.error('Error fetching actors:', error);
    res.status(500).json({ message: 'Failed to fetch actors' });
  }
};
export const getActorById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const actor = await Actor.findByPk(id);

    if (!actor) {
      res.status(404).json({ message: 'Actor not found' });
      return;
    }

    res.status(200).json(actor);
  } catch (error) {
    console.error('Error fetching actor:', error);
    res.status(500).json({ message: 'Failed to fetch actor' });
  }
};
export const createActor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { first_name, last_name, last_update } = req.body;
    const newActor = await Actor.create({ first_name, last_name, last_update });
    res.status(201).json(newActor);
  } catch (error) {
    console.error('Error creating actor:', error);
    res.status(500).json({ message: 'Failed to create actor' });
  }
};
export const updateActor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { first_name, last_name, last_update } = req.body;

    const actor = await Actor.findByPk(id);

    if (!actor) {
      res.status(404).json({ message: 'Actor not found' });
      return;
    }

    const updatedActor = await actor.update({
      first_name,
      last_name,
      last_update,
    });
    res.status(200).json(updatedActor);
  } catch (error) {
    console.error('Error creating actor:', error);
    res.status(500).json({ message: 'Failed to create actor' });
  }
};
export const deleteActor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const actor = await Actor.findByPk(id);

    if (!actor) {
      res.status(404).json({ message: 'Actor not found' });
      return;
    }

    await actor.destroy();
    res.status(200).json({ message: 'Actor deleted successfully' });
  } catch (error) {}
};
