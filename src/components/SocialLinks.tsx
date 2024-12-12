import { Facebook, Instagram } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="https://facebook.com/revolutioneyes"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 hover:text-white transition-colors"
      >
        <Facebook className="h-6 w-6" />
      </a>
      <a
        href="https://instagram.com/revolutioneyes"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 hover:text-white transition-colors"
      >
        <Instagram className="h-6 w-6" />
      </a>
    </div>
  );
};