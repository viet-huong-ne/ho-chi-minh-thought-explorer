import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import quizHero from "@/assets/HCM.jpg";

interface Question {
  id: number;
  question: string;
  options: { label: string; value: string }[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Thuật ngữ "Tư tưởng Hồ Chí Minh" được Đảng ta chính thức sử dụng bắt đầu từ khi nào?',
    options: [
      { label: "A. Từ năm 1969", value: "A" },
      { label: "B. Từ năm 1986", value: "B" },
      { label: "C. Từ năm 1990", value: "C" },
      { label: "D. Từ năm 1991", value: "D" },
    ],
    correctAnswer: "D",
  },
  {
    id: 2,
    question: 'Thuật ngữ "Tư tưởng Hồ Chí Minh" được dùng theo nghĩa nào?',
    options: [
      { label: "A. Tư tưởng của một cá nhân", value: "A" },
      { label: "B. Tư tưởng của lãnh tụ", value: "B" },
      { label: "C. Tư tưởng của một giai cấp, một dân tộc", value: "C" },
      { label: "D. Tất cả những nghĩa trên", value: "D" },
    ],
    correctAnswer: "C",
  },
  {
    id: 3,
    question: '"Đảng lấy chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng và kim chỉ nam cho mọi hành động cách mạng". Câu nói trên được Đảng ta khẳng định lần đầu tiên tại Đại hội đại biểu toàn quốc lần thứ mấy?',
    options: [
      { label: "A. Đại hội lần thứ V", value: "A" },
      { label: "B. Đại hội lần thứ VI", value: "B" },
      { label: "C. Đại hội lần thứ VII", value: "C" },
      { label: "D. Đại hội lần thứ VIII", value: "D" },
    ],
    correctAnswer: "C",
  },
  {
    id: 4,
    question: "Tư tưởng Hồ Chí Minh là gì?",
    options: [
      { label: "A. Tư tưởng Hồ Chí Minh là kết quả của sự vận dụng sáng tạo chủ nghĩa Mác - Lênin vào điều kiện thực tế của nước ta.", value: "A" },
      { label: "B. Tư tưởng Hồ Chí Minh là kết quả của sự vận dụng và phát triển sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của nước ta", value: "B" },
      { label: "C. Tư tưởng Hồ Chí Minh là kết quả của sự phát triển sáng tạo chủ nghĩa Mác - Lênin vào điều kiện thực tế của nước ta.", value: "C" },
      { label: "D. Tư tưởng Hồ Chí Minh là chủ nghĩa Mác - Lênin ở Việt Nam.", value: "D" },
    ],
    correctAnswer: "B",
  },
  {
    id: 5,
    question: "Tư tưởng Hồ Chí Minh có vị trí như thế nào trong hệ thống tư tưởng của Đảng Cộng sản Việt Nam?",
    options: [
      { label: "A. Là một bộ phận trong hệ thống tư tưởng của Đảng", value: "A" },
      { label: "B. Là bộ phận quan trọng trong hệ thống tư tưởng của Đảng", value: "B" },
      { label: "C. Là bộ phận rất quan trọng trong hệ thống tư tưởng của Đảng", value: "C" },
      { label: "D. Là bộ phận nền tảng, kim chỉ nam cho hành động của Đảng", value: "D" },
    ],
    correctAnswer: "D",
  },
  {
    id: 6,
    question: "Vai trò của chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh được Đảng ta xác định như thế nào?",
    options: [
      { label: "A. Chủ nghĩa Mác - Lênin là nền tảng tư tưởng, kim chỉ nam cho hành động của Đảng ta.", value: "A" },
      { label: "B. Tư tưởng Hồ Chí Minh là nền tảng tư tưởng, kim chỉ nam cho hành động của Đảng ta.", value: "B" },
      { label: "C. Cùng với chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh là nền tảng tư tưởng và kim chỉ nam cho hành động cách mạng của Đảng ta.", value: "C" },
      { label: "D. Cùng với chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh là kim chỉ nam cho hành động cách mạng của Đảng ta.", value: "D" },
    ],
    correctAnswer: "C",
  },
  {
    id: 7,
    question: "Truyền thống quý báu nhất của dân tộc Việt Nam được Hồ Chí Minh kế thừa và phát triển là gì?",
    options: [
      { label: "A. Lòng nhân ái", value: "A" },
      { label: "B. Chủ nghĩa yêu nước", value: "B" },
      { label: "C. Tinh thần hiếu học", value: "C" },
      { label: "D. Cần cù lao động", value: "D" },
    ],
    correctAnswer: "B",
  },
  {
    id: 8,
    question: "Nguồn gốc hình thành tư tưởng Hồ Chí Minh.",
    options: [
      { label: "A. Giá trị truyền thống của dân tộc Việt Nam", value: "A" },
      { label: "B. Tinh hoa văn hóa nhân loại (trong đó có chủ nghĩa Mác - Lênin)", value: "B" },
      { label: "C. Nhân tố chủ quan Hồ Chí Minh", value: "C" },
      { label: "D. Tất cả các phương án đều đúng", value: "D" },
    ],
    correctAnswer: "D",
  },
  {
    id: 9,
    question: "Nguyễn Tất Thành ra nước ngoài tìm đường cứu nước vào thời gian nào?",
    options: [
      { label: "A. Ngày 6 tháng 5 năm 1911", value: "A" },
      { label: "B. Ngày 4 tháng 6 năm 1911", value: "B" },
      { label: "C. Ngày 2 tháng 6 năm 1911", value: "C" },
      { label: "D. Ngày 5 tháng 6 năm 1911", value: "D" },
    ],
    correctAnswer: "D",
  },
  {
    id: 10,
    question: "Bác Hồ tham gia sáng lập Đảng Cộng sản Pháp và trở thành người Cộng sản Việt Nam đầu tiên năm nào?",
    options: [
      { label: "A. Năm 1918", value: "A" },
      { label: "B. Năm 1919", value: "B" },
      { label: "C. Năm 1920", value: "C" },
      { label: "D. Năm 1921", value: "D" },
    ],
    correctAnswer: "C",
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questions[currentQuestion].id]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const percentage = (score / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <img
          src={quizHero}
          alt="Quiz về Tư tưởng Hồ Chí Minh"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Trắc nghiệm Tư tưởng HCM
          </h1>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Kiểm tra kiến thức của bạn với 10 câu hỏi
          </p>
        </div>
      </section>

      {/* Quiz Content */}
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        {!showResults ? (
          <Card className="p-6 md:p-8 animate-fade-in">
            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Câu hỏi {currentQuestion + 1}/{questions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
              {questions[currentQuestion].question}
            </h2>

            {/* Options */}
            <RadioGroup
              value={selectedAnswers[questions[currentQuestion].id] || ""}
              onValueChange={handleAnswerSelect}
              className="space-y-3"
            >
              {questions[currentQuestion].options.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center space-x-3 border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors cursor-pointer"
                >
                  <RadioGroupItem value={option.value} id={`option-${option.value}`} />
                  <Label
                    htmlFor={`option-${option.value}`}
                    className="flex-1 cursor-pointer text-base"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 gap-4">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outline"
                className="flex-1"
              >
                Quay lại
              </Button>
              <Button
                onClick={handleNext}
                disabled={!selectedAnswers[questions[currentQuestion].id]}
                className="flex-1"
              >
                {currentQuestion === questions.length - 1 ? "Nộp bài" : "Tiếp theo"}
              </Button>
            </div>
          </Card>
        ) : (
          <Card className="p-6 md:p-8 text-center animate-scale-in">
            <div className="mb-6">
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-4 ${
                percentage >= 80 ? "bg-green-100 dark:bg-green-900/30" :
                percentage >= 50 ? "bg-yellow-100 dark:bg-yellow-900/30" :
                "bg-red-100 dark:bg-red-900/30"
              }`}>
                <span className={`text-4xl font-bold ${
                  percentage >= 80 ? "text-green-600 dark:text-green-400" :
                  percentage >= 50 ? "text-yellow-600 dark:text-yellow-400" :
                  "text-red-600 dark:text-red-400"
                }`}>
                  {score}/{questions.length}
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-2">
                {percentage >= 80 ? "Xuất sắc!" : percentage >= 50 ? "Khá tốt!" : "Cần cố gắng thêm!"}
              </h2>
              <p className="text-muted-foreground text-lg">
                Bạn đã trả lời đúng {score} trên {questions.length} câu ({percentage.toFixed(0)}%)
              </p>
            </div>

            {/* Results Details */}
            <div className="space-y-4 mb-8 text-left">
              {questions.map((q, idx) => {
                const userAnswer = selectedAnswers[q.id];
                const isCorrect = userAnswer === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`border rounded-lg p-4 ${
                      isCorrect ? "border-green-500 bg-green-50 dark:bg-green-900/10" : "border-red-500 bg-red-50 dark:bg-red-900/10"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`font-bold ${isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                        {isCorrect ? "✓" : "✗"}
                      </span>
                      <div className="flex-1">
                        <p className="font-medium mb-1">Câu {idx + 1}: {q.question}</p>
                        <p className="text-sm text-muted-foreground">
                          Đáp án của bạn: <span className={isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>{userAnswer || "Không trả lời"}</span>
                        </p>
                        {!isCorrect && (
                          <p className="text-sm text-green-600 dark:text-green-400">
                            Đáp án đúng: {q.correctAnswer}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button onClick={handleRestart} size="lg" className="w-full md:w-auto px-8">
              Làm lại
            </Button>
          </Card>
        )}
      </main>
    </div>
  );
}
