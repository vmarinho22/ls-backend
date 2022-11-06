import { v2 } from 'cloudinary';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: () => {
    return v2.config({
      cloud_name: process.env.CN_NAME || '',
      api_key: process.env.CN_API_KEY || '',
      api_secret: process.env.CN_API_SECRET || ''
    });
  }
};
