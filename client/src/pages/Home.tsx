import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Zap, Library, FileText, Mic, MessageCircle, ExternalLink, Search, TrendingUp, Users, Lightbulb, Sparkles } from "lucide-react";
import { APP_TITLE } from "@/const";
	import researchTopicsData from "@/data/research_topics.json";
	import { Link } from "wouter";

	export default function Home() {
	  // Get the latest 20 research topics (assuming they are the last 20 added)
	  const latestTopics = researchTopicsData.slice(-20).reverse();
  // Get category statistics
  const categoryStats = researchTopicsData.reduce((acc, item) => {
    const existing = acc.find(c => c.category === item.category);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ category: item.category, count: 1 });
    }
    return acc;
  }, [] as Array<{ category: string; count: number }>);

  const researchTopics = [
    {
      category: "العلوم الشرعية",
      count: categoryStats.find(c => c.category === "العلوم الشرعية")?.count || 0,
      description: "عناوين وأفكار بحثية في الفقه والعقيدة والقرآن والحديث والفكر الإسلامي",
      icon: BookOpen
    },
    {
      category: "العلوم الإنسانية والاجتماعية",
      count: categoryStats.find(c => c.category === "العلوم الإنسانية والاجتماعية")?.count || 0,
      description: "أفكار بحثية في العلوم السياسية والإدارة والقانون واللغة العربية",
      icon: Users
    },
    {
      category: "دراسات شخصيات ومؤلفات",
      count: categoryStats.find(c => c.category === "دراسات شخصيات ومؤلفات")?.count || 0,
      description: "دراسات متخصصة حول شخصيات علمية بارزة ومؤلفاتهم",
      icon: TrendingUp
    }
  ];

  const tools = [
    {
      title: "أدوات الذكاء الاصطناعي",
      description: "أحدث أدوات الذكاء الاصطناعي لتسهيل البحث العلمي والكتابة الأكاديمية",
      icon: Sparkles
    },
    {
      title: "المكتبات العلمية",
      description: "قائمة شاملة بأهم المكتبات العلمية والموارد الأكاديمية والمخطوطات",
      icon: Library
    },
    {
      title: "أدوات تحويل الملفات",
      description: "أسهل وأسرع طريقة لتحويل ملفات PDF إلى نصوص والصوت إلى نصوص",
      icon: FileText
    },
    {
      title: "المنهجية البحثية",
      description: "فوائد ودروس شاملة حول كيفية إجراء البحث العلمي بشكل احترافي",
      icon: Lightbulb
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">{APP_TITLE}</h1>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://t.me/zadalbaheth" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                تيلجرام
              </Button>
            </a>
            <a href="https://whatsapp.com/channel/0029VaDVCOmL7UVUKklLSO0z" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                واتس آب
              </Button>
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
	        {/* Hero Section */}
	        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              زاد الباحث
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              منصة متخصصة في جمع العناوين والأفكار البحثية المقترحة من المتخصصين في تخصصات متعددة، مع التركيز على المقترحات الحديثة التي تصلح لبحوث الماجستير والدكتوراه وبحوث الترقية والتحكيم.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/research-topics">
                <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
                  <Search className="w-5 h-5" />
                  استكشف الأفكار البحثية
                </Button>
              </a>
              <a href="/benefits">
                <Button size="lg" variant="outline" className="gap-2">
                  <Zap className="w-5 h-5" />
                  الفوائد والأدوات
                </Button>
              </a>
	            </div>
	          </div>
	        </section>
	
	        {/* Latest Topics Section */}
	        <section id="latest-topics" className="bg-white py-16 border-t border-slate-200">
	          <div className="container mx-auto px-4">
	            <div className="text-center mb-12">
	              <h3 className="text-3xl font-bold text-slate-900 mb-4">أحدث العناوين المقترحة في الإدارة</h3>
	              <p className="text-slate-600 max-w-2xl mx-auto">
	                أحدث 20 عنواناً مقترحاً في تخصص الإدارة والعلوم الإدارية، تصلح لرسائل الماجستير والدكتوراه.
	              </p>
	            </div>
	            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
	              {latestTopics.map((topic) => (
	                <Card key={topic.id} className="hover:shadow-lg transition-shadow">
	                  <CardHeader className="pb-2">
	                    <CardDescription className="text-xs text-blue-600 font-medium">
	                      {topic.category} / {topic.subcategory}
	                    </CardDescription>
	                    <CardTitle className="text-lg text-slate-900 leading-normal">
	                      {topic.title}
	                    </CardTitle>
	                  </CardHeader>
	                  <CardContent className="pt-0">
	                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">{topic.description}</p>
	                    <Link href={`/research-topics?id=${topic.id}`}>
	                      <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-700 gap-1">
	                        عرض التفاصيل
	                        <ExternalLink className="w-3 h-3" />
	                      </Button>
	                    </Link>
	                  </CardContent>
	                </Card>
	              ))}
	            </div>
	            <div className="text-center mt-10">
	              <Link href="/research-topics">
	                <Button size="lg" variant="outline" className="gap-2">
	                  <Search className="w-5 h-5" />
	                  استكشف جميع العناوين
	                </Button>
	              </Link>
	            </div>
	          </div>
	        </section>
	
	        {/* Research Topics Section */}
        <section id="research-topics" className="bg-white py-16 border-t border-slate-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">الأفكار والعناوين البحثية</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                مجموعة شاملة من {researchTopicsData.length}+ عنوان وفكرة بحثية مقترحة من متخصصين في مختلف التخصصات الأكاديمية
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {researchTopics.map((topic, idx) => {
                const Icon = topic.icon;
                return (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl text-slate-900">{topic.category}</CardTitle>
                          <CardDescription className="text-base text-blue-600 font-semibold mt-1">
                            {topic.count}+ عنوان وفكرة
                          </CardDescription>
                        </div>
                        <Icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{topic.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">الأدوات والموارد</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                مجموعة من الأدوات والموارد المتخصصة التي تساعد الباحثين في عملهم العلمي
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool, idx) => {
                const Icon = tool.icon;
                return (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-lg text-slate-900">{tool.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{tool.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-blue-50 py-16 border-t border-slate-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">فوائد البحث العلمي</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                معلومات وفوائد متنوعة حول البحث العلمي والمنهجية الأكاديمية
              </p>
            </div>
            <div className="bg-white rounded-lg border border-slate-200 p-8">
              <ul className="space-y-4 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>فهم الفجوة البحثية ودورها في اختيار عنوان البحث</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>علاقة الفجوة البحثية بالإضافة العلمية</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>صفات الفجوة البحثية وأنواعها وكيفية تحديدها</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>طرق اكتشاف الأفكار البحثية الأصلية</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>مواقع مساعدة على توليد فجوات بحثية وأفكار جديدة</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">تابع كل جديد</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              انضم إلى مجتمع الباحثين والأكاديميين وتابع أحدث العناوين والأفكار البحثية والموارد العلمية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://t.me/zadalbaheth" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  قناة التيلجرام
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
              <a href="https://whatsapp.com/channel/0029VaDVCOmL7UVUKklLSO0z" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  قناة واتس آب
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">عن زاد الباحث</h4>
              <p className="text-sm">
                منصة متخصصة في جمع العناوين والأفكار البحثية المقترحة من المتخصصين في تخصصات متعددة
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">تابعنا</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://t.me/zadalbaheth" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    قناة التيلجرام
                  </a>
                </li>
                <li>
                  <a href="https://whatsapp.com/channel/0029VaDVCOmL7UVUKklLSO0z" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    قناة واتس آب
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">الاتصال</h4>
              <p className="text-sm">للتواصل والاستفسارات، يرجى التواصل عبر قنواتنا على التيلجرام أو واتس آب</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2025 - 2026 جميع الحقوق محفوظة د. محمد إسماعيل</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
