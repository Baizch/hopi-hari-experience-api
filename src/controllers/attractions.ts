import { Request, Response } from 'express';
import Attraction from '../models/attraction';
import { IAttraction } from '../types/index';

export const createAttraction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      category,
      name,
      description,
      status,
      openingHours,
      minHeight,
      maxHeight,
      image,
      altImage,
      video,
      observation,
    } = req.body;

    const attraction = new Attraction<IAttraction>({
      category,
      name,
      description,
      status,
      openingHours,
      minHeight,
      maxHeight,
      image,
      altImage,
      video,
      observation,
    });

    attraction.save().then((savedAttraction: IAttraction) => {
      res.status(201).json({
        message: 'Attraction successfully created',
        attraction: savedAttraction,
      });
    });
  } catch (error: unknown) {
    return res.status(500).json({ message: error });
  }
};

export const getAttractions = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const attractions: IAttraction[] = await Attraction.find();

    if (!attractions || attractions.length === 0) {
      return res.status(404).json({ message: 'No attractions found' });
    }

    const children = attractions.filter(
      (attraction) => attraction.category === 'children'
    );

    const family = attractions.filter(
      (attraction) => attraction.category === 'family'
    );

    const radical = attractions.filter(
      (attraction) => attraction.category === 'radical'
    );

    return res.status(200).json({
      attractions: {
        children,
        family,
        radical,
      },
    });
  } catch (error: unknown) {
    return res.status(500).json({ message: error });
  }
};

export const updateAttraction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = { _id: req.params.id };
    const update = req.body;

    const attraction: IAttraction = await Attraction.findById(id);

    if (!attraction) {
      res.status(404).json({ message: 'No attraction found' });
      return;
    }

    const updatedAttraction: IAttraction = await Attraction.findOneAndUpdate(
      id,
      update,
      { new: true }
    );

    if (!updatedAttraction) {
      res.status(404).json({ message: 'Unable to update attraction' });
      return;
    }

    res.status(200).json({
      updatedAttraction,
    });
  } catch (error: unknown) {
    return res.status(500).json({ message: error });
  }
};
