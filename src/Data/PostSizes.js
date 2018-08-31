import { fetchAPI } from '../services/api/index.js';

export const postSize = (body, endpoint) => fetchAPI(body, endpoint);
