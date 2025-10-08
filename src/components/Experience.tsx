import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Lead UX Designer",
    company: "Cognizant, Mumbai",
    period: "Jul 21 - Current",
    color: "bg-primary",
  },
  {
    role: "Experience Designer",
    company: "Experience Design Studio",
    period: "Jan 20 - Jul 21",
    color: "bg-orange-500",
  },
  {
    role: "UI/UX Designer",
    company: "Sugee Pvt Limited, Mumbai",
    period: "Sep 18 - Dec 19",
    color: "bg-yellow-500",
  },
  {
    role: "Lead UX Designer",
    company: "Cinetstox, Mumbai",
    period: "May 16 - Aug 18",
    color: "bg-primary",
  },
];

const Experience = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-primary">Work Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-8 items-start">
                {/* Timeline dot */}
                <div className={`hidden md:flex w-16 h-16 ${exp.color} rounded-full items-center justify-center flex-shrink-0 relative z-10`}>
                  <Briefcase className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 md:pt-4">
                  <div className="bg-card border-2 border-border rounded-2xl p-6 hover:border-primary transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
