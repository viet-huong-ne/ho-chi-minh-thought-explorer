import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  image?: string;
  imageAlt?: string;
}

const ContentSection = ({ title, subtitle, children, image, imageAlt }: ContentSectionProps) => {
  return (
    <section className="my-16 animate-fade-up">
      <div className="mb-8 border-l-4 border-primary pl-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h2>
        {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
      </div>
      
      {image && (
        <div className="mb-8 rounded-xl overflow-hidden shadow-large">
          <img 
            src={image} 
            alt={imageAlt || title} 
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
