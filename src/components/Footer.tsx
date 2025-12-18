import { Link } from "react-router-dom";
import { Shield, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold">PikSign</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              AI Proof. Tamper Resistant. Future Ready.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-smooth">How It Works</Link></li>
              <li><Link to="/technology" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Technology</Link></li>
              <li><Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-smooth">FAQ</Link></li>
              <li><Link to="/beneficiaries" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Use Cases</Link></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Whitepaper</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Contact</Link></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">About</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">Patent</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Patent-pending. © 2025 PikSign. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            <code className="bg-muted px-2 py-1 rounded">noai, noimageai</code>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
