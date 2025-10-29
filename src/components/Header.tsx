import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import datarisLogo from "@/assets/dataris-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src={datarisLogo} 
                alt="Dataris" 
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
          <Link to="/contacto">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Contáctanos
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
