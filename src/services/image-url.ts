import no from "../assets/no-image.webp";

export const getCroppedImage = (url: string) => {
  if (!url) return no;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
