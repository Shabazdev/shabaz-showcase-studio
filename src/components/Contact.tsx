import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have an Awesome Project<br />
            Idea? <span className="text-primary">Let's Discuss</span>
          </h2>
          <Button 
            size="lg" 
            className="rounded-full text-lg px-8"
          >
            <Mail className="w-5 h-5 mr-2" />
            SEND EMAIL
          </Button>
        </div>

        <div className="bg-dark-section rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-foreground">S</span>
                </div>
                <span className="text-xl font-bold">SHABAZ</span>
              </div>
              <p className="text-muted-foreground max-w-md">
                A PRODUCT DESIGNER LOCATED IN MUMBAI WHO LOVES CREATING ATTRACTIVE DESIGNS & EXPERIENCES. PASSIONATE ABOUT DELIVERING SOLUTIONS THAT DELIGHT USERS.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg mb-2">CONNECT WITH ME</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-card hover:bg-primary border-2 border-border hover:border-primary rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-card hover:bg-primary border-2 border-border hover:border-primary rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-card hover:bg-primary border-2 border-border hover:border-primary rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <Twitter className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-muted-foreground text-sm">
          © 2025 Shabaz - All Rights Reserved
        </div>
      </div>
    </section>
  );
};

export default Contact;
