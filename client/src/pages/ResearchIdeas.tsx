import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, ExternalLink, Search } from "lucide-react";
import { useState } from "react";

export default function ResearchIdeas() {
  const [searchTerm, setSearchTerm] = useState("");

  const researchIdeas = [
    {
      category: "الفقه والقضاء",
      count: 40,
      description: "أفكار بحثية في الفقه الإسلامي والقضاء الشرعي",
      link: "https://t.me/c7e4FkbOwM05Yjk0/3",
      ideas: [
        "الفقه الإسلامي المقارن",
        "أصول الفقه والقياس",
        "الفقه والقضاء الإسلامي",
        "الفكر الإسلامي والفرق",
        "المذاهب الفقهية المختلفة"
      ]
    },
    {
      category: "التفسير وعلوم القرآن",
      count: 500,
      description: "أكثر من 500 فكرة بحثية في التفسير وعلوم القرآن الكريم",
      link: "https://t.me/c7e4FkbOwM05Yjk0/12",
      ideas: [
        "التفسير الموضوعي",
        "علوم القرآن الكريم",
        "الإعجاز القرآني",
        "الناسخ والمنسوخ",
        "أسباب النزول"
      ]
    },
    {
      category: "الحديث وعلومه",
      count: 190,
      description: "أكثر من 190 فكرة بحثية في الحديث الشريف وعلومه",
      link: "https://t.me/c7e4FkbOwM05Yjk0/20",
      ideas: [
        "علم مصطلح الحديث",
        "الحديث الضعيف والموضوع",
        "الرجال والجرح والتعديل",
        "شروح الحديث",
        "السنة النبوية"
      ]
    },
    {
      category: "العلوم السياسية",
      count: 100,
      description: "100 فكرة وعنوان مقترح في العلوم السياسية",
      link: "https://t.me/c7e4FkbOwM05Yjk0/24",
      ideas: [
        "السياسة المقارنة والأنظمة السياسية",
        "العلاقات الدولية والدبلوماسية",
        "الفلسفة السياسية والنظريات",
        "الإدارة العامة والحكومية",
        "السياسة والتفاوض الدولي"
      ]
    },
    {
      category: "القانون",
      count: 80,
      description: "عناوين وأفكار بحثية في القانون والنظم القانونية",
      link: "https://t.me/c7e4FkbOwM05Yjk0/21",
      ideas: [
        "القانون الدستوري",
        "القانون الإداري",
        "القانون المدني",
        "القانون الجنائي",
        "القانون الدولي"
      ]
    },
    {
      category: "إدارة الأعمال",
      count: 75,
      description: "عناوين بحوث مقترحة في إدارة الأعمال والإدارة العامة",
      link: "https://t.me/c7e4FkbOwM05Yjk0/13",
      ideas: [
        "إدارة الموارد البشرية",
        "الإدارة الاستراتيجية",
        "إدارة المشاريع",
        "التسويق الإداري",
        "الإدارة المالية"
      ]
    },
    {
      category: "العلوم التربوية",
      count: 120,
      description: "عناوين بحوث ورسائل في العلوم التربوية والتعليم",
      link: "https://t.me/c7e4FkbOwM05Yjk0/14",
      ideas: [
        "التربية الإسلامية",
        "المناهج التعليمية",
        "طرق التدريس الحديثة",
        "التعليم الإلكتروني",
        "الإدارة التربوية"
      ]
    },
    {
      category: "الإدارة التربوية",
      count: 85,
      description: "عناوين وأفكار بحثية متخصصة في الإدارة التربوية",
      link: "https://t.me/c7e4FkbOwM05Yjk0/22",
      ideas: [
        "القيادة التربوية",
        "إدارة المؤسسات التعليمية",
        "التخطيط التربوي",
        "تطوير المناهج",
        "الجودة في التعليم"
      ]
    },
    {
      category: "أصول الفقه",
      count: 95,
      description: "موضوعات بحثية متقدمة في علم أصول الفقه",
      link: "https://t.me/c7e4FkbOwM05Yjk0/25",
      ideas: [
        "القياس والاستحسان",
        "المصالح المرسلة",
        "العرف والعادة",
        "سد الذرائع",
        "الاستصحاب"
      ]
    },
    {
      category: "الفكر الإسلامي",
      count: 110,
      description: "أفكار بحثية في الفكر الإسلامي والفرق الإسلامية",
      link: "https://t.me/c7e4FkbOwM05Yjk0/15",
      ideas: [
        "الفرق الإسلامية",
        "الفكر السياسي الإسلامي",
        "الفكر الاقتصادي الإسلامي",
        "الفكر الاجتماعي الإسلامي",
        "الفكر العلمي الإسلامي"
      ]
    },
    {
      category: "تخصصات متعددة",
      count: 150,
      description: "عناوين وأفكار بحثية مقترحة في تخصصات متعددة",
      link: "https://t.me/c7e4FkbOwM05Yjk0/7",
      ideas: [
        "البحث العلمي والمنهجية",
        "الدراسات الاجتماعية",
        "الدراسات الاقتصادية",
        "الدراسات الثقافية",
        "الدراسات التاريخية"
      ]
    }
  ];

  const filteredIdeas = researchIdeas.filter(category =>
    category.category.includes(searchTerm) ||
    category.description.includes(searchTerm) ||
    category.ideas.some(idea => idea.includes(searchTerm))
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">زاد الباحث</h1>
          </div>
          <a href="/">
            <Button variant="outline" size="sm">العودة للرئيسية</Button>
          </a>
        </nav>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">أفكار بحثية متخصصة</h2>
            <p className="text-blue-100 text-lg">
              مجموعة شاملة من الأفكار والعناوين البحثية المقترحة من المتخصصين في تخصصات متعددة
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              <Input
                placeholder="ابحث عن تخصص أو فكرة بحثية..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 text-lg"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="space-y-8">
            {filteredIdeas.map((category, idx) => (
              <div key={idx}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {category.category}
                  </h3>
                  <p className="text-slate-600 mb-3">{category.description}</p>
                  <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold">
                    <span className="bg-blue-100 px-3 py-1 rounded-full">
                      {category.count}+ أفكار بحثية
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {category.ideas.map((idea, ideaIdx) => (
                    <div
                      key={ideaIdx}
                      className="bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                    >
                      <p className="text-slate-900 font-medium">{idea}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 mb-8 pb-8 border-b border-slate-200">
                  <a href={category.link} target="_blank" rel="noopener noreferrer">
                    <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="w-4 h-4" />
                      اعرض جميع الأفكار على التيلجرام
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {filteredIdeas.length === 0 && (
          <section className="container mx-auto px-4 py-12 text-center">
            <p className="text-slate-600 text-lg">
              لم يتم العثور على نتائج تطابق البحث. يرجى محاولة كلمات مفتاحية أخرى.
            </p>
          </section>
        )}
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 زاد الباحث. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
