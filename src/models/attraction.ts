import { Schema, model } from 'mongoose';
import { IAttraction } from '../types/index';

const attractionSchema = new Schema<IAttraction>({
  category: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
  },
  openingHours: {
    type: String,
  },
  minHeight: {
    type: String,
  },
  maxHeight: {
    type: String,
  },
  image: {
    type: String,
  },
  altImage: {
    type: String,
  },
  video: {
    type: String,
  },
  observation: {
    type: String,
  },
});

const Attraction = model<IAttraction>('Attraction', attractionSchema);

export const schema = model.schema;
export default Attraction;
