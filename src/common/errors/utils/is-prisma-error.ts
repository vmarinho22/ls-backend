import { PrismaClientError } from './../types/PrismaClientError';
export const isPrismaError = (e: PrismaClientError) =>
  typeof e.code === 'string' &&
  typeof e.clientVersion === 'string' &&
  (typeof e.meta === 'undefined' || typeof e.meta === 'object');
