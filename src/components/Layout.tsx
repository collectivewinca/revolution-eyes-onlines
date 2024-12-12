import { Navigation } from "./Navigation";
import { SocialLinks } from "./SocialLinks";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Revolution Eyes</h3>
              <p className="text-white/80">Providing exceptional eye care to the Tribeca community since 2008.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-white/80 hover:text-white">Services</a></li>
                <li><a href="#about" className="text-white/80 hover:text-white">About</a></li>
                <li><a href="#eyewear" className="text-white/80 hover:text-white">Eyewear</a></li>
                <li><a href="#contact" className="text-white/80 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p className="text-white/80">
                Monday - Friday: 9am - 6pm<br />
                Saturday: 10am - 4pm<br />
                Sunday: Closed
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <SocialLinks />
              <div className="mt-4">
                <a
                  href="https://g.page/revolution-eyes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white inline-flex items-center"
                >
                  <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
                    alt="Google Business"
                    className="h-6 mr-2"
                  />
                  Review us on Google
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} Revolution Eyes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};