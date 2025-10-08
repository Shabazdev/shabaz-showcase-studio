import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  {
    title: "Lirante - Food Delivery Solution",
    description: "A modern food delivery platform with intuitive UI and seamless ordering experience",
    image: portfolio3,
    tags: ["UI Design", "Mobile App"],
  },
  {
    title: "E-Commerce Platform",
    description: "Complete shopping experience with advanced filters and smooth checkout flow",
    image: portfolio2,
    tags: ["Web Design", "UX Research"],
  },
  {
    title: "Dashboard & Analytics",
    description: "Data visualization dashboard for business intelligence and reporting",
    image: portfolio1,
    tags: ["Dashboard", "Data Viz"],
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 px-4 bg-dark-section">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Lets have a look at<br />
            my <span className="text-primary">Portfolio</span>
          </h2>
          <Button 
            size="lg" 
            className="rounded-full"
          >
            See All
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden bg-card border-2 border-border hover:border-primary transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">View Project</span>
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
