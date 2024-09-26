import { Request, Response } from 'express';
import Attraction from '../models/attraction';
import { IAttraction } from '../types/index';

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
    return res.status(500).json({ message: 'Server error' });
  }
};
