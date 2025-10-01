interface ImageGridProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}

const ImageGrid = ({ images }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {images.map((image, idx) => (
        <div 
          key={idx} 
          className="group rounded-xl overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 animate-zoom-in"
          style={{ animationDelay: `${idx * 0.1}s` }}
        >
          <div className="relative aspect-square overflow-hidden">
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          {image.caption && (
            <div className="p-4 bg-card">
              <p className="text-sm text-muted-foreground">{image.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
