import { ADD_POSITIONS } from './positionsConstants.js';

export const addPositions = (positions) => ({
  type: ADD_POSITIONS,
  positions
});