import profileImg from "../assets/images/profile.png";
import emriftProjectImg from "../assets/images/projects/emrift.png";
import portfolioProjectImg from "../assets/images/projects/portfolio.png";
import ogImageImg from "../assets/images/og-image.png";

export const assets = {
  profile: profileImg,
  ogImage: ogImageImg,
  projects: {
    emrift: emriftProjectImg,
    portfolio: portfolioProjectImg,
  },
};

export const assetMap = {
  "/images/profile.png": profileImg,
  "/images/projects/emrift.png": emriftProjectImg,
  "/images/projects/portfolio.png": portfolioProjectImg,
  "/images/og-image.png": ogImageImg,
};

export function resolveAsset(path) {
  if (!path) return path;
  return assetMap[path] || path;
}
