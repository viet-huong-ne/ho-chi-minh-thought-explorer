interface QuoteCardProps {
  quote: string;
  author?: string;
}

const QuoteCard = ({ quote, author = "Hồ Chí Minh" }: QuoteCardProps) => {
  return (
    <div className="my-12 rounded-xl bg-gradient-primary p-8 shadow-large animate-fade-in">
      <div className="flex gap-4">
        <div className="text-6xl text-primary-foreground/30 leading-none">"</div>
        <div className="flex-1">
          <p className="text-xl md:text-2xl font-medium text-primary-foreground italic leading-relaxed">
            {quote}
          </p>
          <p className="mt-4 text-right text-lg text-primary-foreground/80">— {author}</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
