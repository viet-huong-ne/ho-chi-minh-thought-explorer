import heroImage from "@/assets/HCM.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hồ Chí Minh" 
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(rgba(224, 167, 167, 0.85), rgba(180, 40, 40, 0.85))",
          }}
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="mb-6 text-5xl md:text-6xl font-bold text-primary-foreground leading-tight">
            Phần 1: Cơ sở hình thành tư tưởng Hồ Chí Minh
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
            Nền tảng lịch sử, văn hóa, tư tưởng và chủ quan hình thành nên hệ tư tưởng cách mạng vĩ đại.
          </p>
          {/* <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-lg bg-card/90 px-6 py-3 backdrop-blur-sm shadow-medium">
              <div className="text-sm text-muted-foreground">Thời kỳ</div>
              <div className="text-lg font-bold text-foreground">1890 - 1969</div>
            </div>
            <div className="rounded-lg bg-card/90 px-6 py-3 backdrop-blur-sm shadow-medium">
              <div className="text-sm text-muted-foreground">Học thuyết</div>
              <div className="text-lg font-bold text-foreground">Mác - Lênin</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
