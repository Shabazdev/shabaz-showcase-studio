import { Palette, Globe, Layout, ArrowUpRight } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Create intuitive and beautiful user interfaces that engage and delight users.",
    color: "bg-primary/10",
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "Design responsive and modern websites that work seamlessly across all devices.",
    color: "bg-accent/10",
  },
  {
    icon: Layout,
    title: "Landing Page",
    description: "Craft high-converting landing pages that capture attention and drive action.",
    color: "bg-primary/10",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-dark-section">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">👋</span>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I HAVE 10+ YEARS OF PRODUCT DESIGN EXPERIENCE, CREATING SUCCESSFUL SOLUTIONS FOR VARIOUS INDUSTRIES AND CLIENTS WORLDWIDE
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group p-8 bg-card hover:bg-primary/5 transition-all duration-300 cursor-pointer border-2 hover:border-primary relative overflow-hidden"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
