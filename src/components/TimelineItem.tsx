interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image?: string;
}

const TimelineItem = ({ year, title, description, image }: TimelineItemProps) => {
  return (
    <div className="flex gap-6 group animate-fade-in">
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-bold shadow-medium group-hover:scale-110 transition-transform">
          {year.slice(0, 2)}
        </div>
        <div className="w-0.5 flex-1 bg-border mt-2" />
      </div>
      
      <div className="flex-1 pb-12">
        <div className="rounded-xl bg-card p-6 shadow-soft hover:shadow-medium transition-all border border-border">
          <div className="mb-2 text-sm font-semibold text-primary">{year}</div>
          <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
          {image && (
            <div className="mb-4 rounded-lg overflow-hidden">
              <img 
                src={image} 
                alt={title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
