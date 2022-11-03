interface Photo {
  id: string;
  description: string;
  urls: PhotoSizes;
}

interface PhotoSizes {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}
