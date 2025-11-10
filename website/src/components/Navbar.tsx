import { Link } from "react-router-dom";
import { CartDrawer } from "./CartDrawer";
import { User } from "lucide-react";

const SHOPIFY_CUSTOMER_LOGIN_URL = "https://kick-off-couture-urq1r.myshopify.com/account/login";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-playfair font-bold tracking-tight">
              Kick Off <span className="text-accent">Couture</span>
            </h1>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Collection
            </Link>
            <Link
              to="/blog"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Blog
            </Link>
            <a
              href={SHOPIFY_CUSTOMER_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
            >
              <User className="h-4 w-4" />
              Login
            </a>
            <CartDrawer />
          </div>
        </div>
      </div>
    </nav>
  );
};
