import { Schema, model } from 'mongoose';
import { IAttraction } from '../types/index';

const attractionSchema = new Schema<IAttraction>({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  openingHours: {
    type: String,
    required: true,
  },
  minHeight: {
    type: String,
    required: true,
  },
  maxHeight: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  altImage: {
    type: String,
    required: true,
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
