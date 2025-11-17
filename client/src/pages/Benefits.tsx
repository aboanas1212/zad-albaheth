import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, ExternalLink, Search, Filter } from "lucide-react";
import { useState, useMemo } from "react";
import benefitsData from "@/data/benefits_and_tools.json";

export default function Benefits() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(benefitsData.map(item => item.category));
    return Array.from(cats).sort();
  }, []);

  // Filter benefits based on search and category
  const filteredBenefits = useMemo(() => {
    return benefitsData.filter(benefit => {
      const matchesSearch = 
        benefit.title.includes(searchTerm) ||
        benefit.description.includes(searchTerm) ||
        benefit.category.includes(searchTerm);
      
      const matchesCategory = !selectedCategory || benefit.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Group filtered benefits by category
  const groupedBenefits = useMemo(() => {
    const grouped: { [key: string]: typeof benefitsData } = {};
    filteredBenefits.forEach(benefit => {
      if (!grouped[benefit.category]) {
        grouped[benefit.category] = [];
      }
      grouped[benefit.category].push(benefit);
    });
    return grouped;
  }, [filteredBenefits]);

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
            <h2 className="text-4xl font-bold mb-4">الفوائد والأدوات البحثية</h2>
            <p className="text-blue-100 text-lg">
              مجموعة شاملة من الموارد والأدوات المتخصصة التي تساعد الباحثين في عملهم العلمي
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <Input
                  placeholder="ابحث عن أداة أو فائدة..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-6 text-lg"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-5 h-5 text-slate-600" />
                <span className="font-semibold text-slate-900">التصنيفات:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  className="rounded-full"
                >
                  الكل
                </Button>
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="max-w-4xl mx-auto text-sm text-slate-600">
              تم العثور على <span className="font-semibold text-slate-900">{filteredBenefits.length}</span> نتيجة
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          {filteredBenefits.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">لم يتم العثور على نتائج. حاول تغيير معايير البحث.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8">
              {Object.entries(groupedBenefits).map(([category, benefits]) => (
                <div key={category}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {benefits.map((benefit) => (
                      <Card key={benefit.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <CardTitle className="text-xl text-slate-900">
                                {benefit.title}
                              </CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-700 mb-4">{benefit.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {benefit.link && (
                              <a href={benefit.link} target="_blank" rel="noopener noreferrer">
                                <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                                  <ExternalLink className="w-4 h-4" />
                                  اعرض المزيد
                                </Button>
                              </a>
                            )}
                            {!benefit.link && (
                              <Button variant="outline" disabled className="gap-2">
                                <span className="text-sm">غير متوفر برابط مباشر</span>
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

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
