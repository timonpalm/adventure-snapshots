import { Photo } from "../types";


export function getImages(): Photo[] {
  const dirpath: string = "/photos";

  // Read all files in the directory that are in a image format
  const files = require.context('/public/photos', false)

  // Get all file paths
  const images = files.keys().map((key) => {
    console.log(key);
    return dirpath + key.slice(1);
  });

  // Map to Photo type
  const mappedPhotos = images.map((path) => ({
    src: path,
    thumb: path,
    width: 1200,
    height: 1200,
    alt: "alt",
    likes: 0,
  }));

  return mappedPhotos;
}
