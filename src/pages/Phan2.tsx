import { useState } from "react";
import Header from "@/components/Header";
import ContentSection from "@/components/ContentSection";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import formationProcess from "@/assets/qua-trinh-hinh-thanh.png";
import period1890 from "@/assets/period-1890.jpg";
import period1920 from "@/assets/period-1920.jpg";
import period1945 from "@/assets/co-ban-tu-tuong-cach-mang.jpg";

interface TimelinePeriod {
  year: string;
  title: string;
  content: string;
  image?: string;
}

const Phan2 = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<TimelinePeriod | null>(null);

  const timelinePeriods: TimelinePeriod[] = [
    {
      year: "1890 – 1911",
      title: "Hình thành tư tưởng yêu nước và chí hướng cứu nước",
      content: `
        <p><strong>Bối cảnh & tác động:</strong> Sinh ra trong gia đình nhà Nho yêu nước; chịu ảnh hưởng truyền thống quê hương Nghệ An; chứng kiến đất nước mất độc lập, phong trào Cần Vương thất bại.</p>
        <p><strong>Đặc điểm nổi bật:</strong> Hình thành tư tưởng yêu nước, khát vọng giành độc lập; chưa có hệ thống lý luận nhưng đã xuất hiện chí hướng tìm con đường mới.</p>
        <p><strong>Ý nghĩa:</strong> Chuẩn bị về mặt tình cảm và động lực cho hành trình sau này.</p>
      `,
      image: period1890
    },
    {
      year: "1911 – 1920",
      title: "Tìm tòi, khảo nghiệm và đến với chủ nghĩa Mác – Lênin",
      content: `
        <p><strong>Mốc quan trọng:</strong> 1911 ra đi từ Bến Nhà Rồng.</p>
        <p><strong>Hoạt động:</strong> Qua nhiều nước; làm nhiều nghề; tìm hiểu học thuyết, phong trào dân chủ, lao động; quan sát thực tiễn các nước tư bản.</p>
        <p><strong>Tư tưởng hình thành:</strong> Bác bỏ con đường cũ; 1919 gửi Bản yêu sách; 1920 tiếp cận Luận cương của Lênin và khẳng định chỉ có chủ nghĩa Mác – Lênin mới giải phóng dân tộc.</p>
        <p><strong>Ý nghĩa:</strong> Bước ngoặt quyết định, chuyển từ chủ nghĩa yêu nước đến lập trường cách mạng vô sản.</p>
      `,
      image: period1920
    },
    {
      year: "1920 – 1930",
      title: "Xác định con đường cách mạng Việt Nam",
      content: `
        <p><strong>Hoạt động chính:</strong> Tham gia sáng lập Đảng Cộng sản Pháp (1920); viết báo; hoạt động Quốc tế Cộng sản; 1925 lập Hội VN Cách mạng Thanh niên, đào tạo cán bộ.</p>
        <p><strong>Tư tưởng trọng tâm:</strong> Độc lập dân tộc gắn liền cách mạng vô sản; cách mạng thuộc địa có thể thắng trước chính quốc; xây dựng lực lượng công – nông là nền tảng.</p>
        <p><strong>Kết quả:</strong> 1930 thành lập Đảng Cộng sản Việt Nam; thông qua Cương lĩnh đầu tiên, khẳng định con đường <em>Độc lập dân tộc gắn liền với CNXH</em>.</p>
      `
    },
    {
      year: "1930 – 1945",
      title: "Hình thành cơ bản tư tưởng cách mạng Việt Nam",
      content: `
        <p><strong>Khó khăn:</strong> Bị truy nã; hoạt động ở nhiều nước; một thời gian bị bắt giam (Hồng Kông 1931).</p>
        <p><strong>Phát triển tư tưởng:</strong> Khẳng định vai trò lãnh đạo của Đảng; chiến lược giải phóng dân tộc trong bối cảnh Thế chiến II; chủ trương lập Mặt trận Việt Minh (1941).</p>
        <p><strong>Đỉnh cao:</strong> Cách mạng Tháng Tám 1945; thành lập nước Việt Nam Dân chủ Cộng hòa.</p>
        <p><strong>Ý nghĩa:</strong> Hoàn thiện cơ bản đường lối; chứng minh giá trị tư tưởng qua thực tiễn thắng lợi.</p>
      `,
      image: period1945
    },
    {
      year: "1945 – 1969",
      title: "Tiếp tục phát triển, hoàn thiện tư tưởng",
      content: `
        <p><strong>Lãnh đạo sau 1945:</strong> Xây dựng Nhà nước của dân, do dân, vì dân; bảo vệ độc lập dân tộc, xây dựng xã hội mới.</p>
        <p><strong>Kháng chiến:</strong> Toàn dân, toàn diện, lâu dài, tự lực cánh sinh; đề cao đoàn kết quốc tế.</p>
        <p><strong>Phát triển lý luận:</strong> Gắn độc lập dân tộc với CNXH; xây dựng Đảng, đạo đức cách mạng, bồi dưỡng thế hệ cách mạng.</p>
        <p><strong>Di sản:</strong> Di chúc 1969 – tổng kết sâu sắc tư tưởng và tầm nhìn chiến lược.</p>
      `
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative h-[400px] overflow-hidden">
        <img 
          src={formationProcess} 
          alt="Quá trình hình thành tư tưởng" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            Phần 2: Quá trình hình thành và phát triển tư tưởng
          </h1>
          <p className="text-xl text-primary-foreground/90 animate-fade-in">
            Dòng thời gian các giai đoạn chính. Bấm vào mốc để xem chi tiết.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <ContentSection 
          title="Dòng thời gian lịch sử"
          subtitle="Từ 1890 đến 1969 - Hành trình hình thành tư tưởng cách mạng"
        >
          <div className="space-y-0">
            {timelinePeriods.map((period, index) => (
              <div key={index} className="flex gap-6 group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-bold shadow-medium group-hover:scale-110 transition-transform cursor-pointer">
                    {period.year.slice(0, 4).slice(2)}
                  </div>
                  {index < timelinePeriods.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2 min-h-[100px]" />
                  )}
                </div>
                
                <div className="flex-1 pb-12">
                  <div className="rounded-xl bg-card p-6 shadow-soft hover:shadow-medium transition-all border border-border">
                    <div className="mb-2 text-sm font-semibold text-primary">{period.year}</div>
                    <h3 className="mb-3 text-xl font-bold text-foreground">{period.title}</h3>
                    <Button 
                      onClick={() => setSelectedPeriod(period)}
                      variant="outline"
                      className="mt-2"
                    >
                      Xem chi tiết
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContentSection>
      </main>

      <Dialog open={!!selectedPeriod} onOpenChange={() => setSelectedPeriod(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              {selectedPeriod?.year}: {selectedPeriod?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {selectedPeriod?.image && (
              <img 
                src={selectedPeriod.image} 
                alt={selectedPeriod.title}
                className="w-full rounded-lg shadow-medium"
              />
            )}
            <div 
              className="prose prose-lg max-w-none text-foreground"
              dangerouslySetInnerHTML={{ __html: selectedPeriod?.content || "" }}
            />
          </div>
        </DialogContent>
      </Dialog>

      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2025 – Trang đọc tài liệu lịch sử về Tư tưởng Hồ Chí Minh</p>
        </div>
      </footer>
    </div>
  );
};

export default Phan2;
