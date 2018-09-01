import { fetchAPIShirts } from '../services/api/index.js';

export const getShirts = (body) => fetchAPIShirts(body);
