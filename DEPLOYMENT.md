# تعليمات النشر والتطوير

## نشر المشروع

### 1. البيئة الإنتاجية

#### المتطلبات
- Node.js 18 أو أحدث
- pnpm 10 أو أحدث
- خادم ويب (Nginx أو Apache)

#### خطوات النشر

```bash
# 1. استنساخ المشروع
git clone <repository-url>
cd zad_albaheth

# 2. تثبيت المتطلبات
pnpm install

# 3. بناء المشروع
pnpm build

# 4. تشغيل المشروع
pnpm start
```

### 2. النشر على خوادم مختلفة

#### Vercel
```bash
# تثبيت Vercel CLI
npm i -g vercel

# النشر
vercel
```

#### Netlify
```bash
# تثبيت Netlify CLI
npm i -g netlify-cli

# النشر
netlify deploy --prod --dir=dist/public
```

#### خادم Linux عادي
```bash
# نسخ الملفات المبنية
scp -r dist/public/* user@server:/var/www/zad-albaheth/

# تشغيل الخادم
pm2 start dist/index.js --name "zad-albaheth"
```

### 3. متغيرات البيئة

إنشاء ملف `.env` في جذر المشروع:

```env
# تطوير
NODE_ENV=development
VITE_API_URL=http://localhost:3000

# إنتاج
NODE_ENV=production
VITE_API_URL=https://zad-albaheth.com
```

## التطوير المحلي

### 1. إعداد بيئة التطوير

```bash
# تثبيت المتطلبات
pnpm install

# تشغيل خادم التطوير
pnpm dev

# فتح المتصفح على
# http://localhost:3000
```

### 2. تعديل البيانات

#### إضافة عنوان بحثي جديد
1. فتح ملف `client/src/data/research_topics.json`
2. إضافة عنصر جديد بالتنسيق التالي:

```json
{
  "id": 47,
  "category": "العلوم الشرعية",
  "subcategory": "الفقه وأصوله",
  "title": "عنوان العنوان البحثي",
  "description": "وصف العنوان البحثي",
  "link": "https://example.com"
}
```

#### إضافة أداة جديدة
1. فتح ملف `client/src/data/benefits_and_tools.json`
2. إضافة عنصر جديد بالتنسيق التالي:

```json
{
  "id": 21,
  "category": "أدوات الذكاء الاصطناعي",
  "title": "اسم الأداة",
  "description": "وصف الأداة",
  "link": "https://example.com"
}
```

### 3. تطوير الصفحات

#### إضافة صفحة جديدة
1. إنشاء ملف جديد في `client/src/pages/NewPage.tsx`
2. إضافة المسار في `App.tsx`:

```tsx
<Route path={"/new-page"} component={NewPage} />
```

#### تعديل الأنماط
- استخدام Tailwind CSS للأنماط
- تعديل الألوان في `client/src/index.css`

### 4. اختبار المشروع

```bash
# فحص TypeScript
pnpm check

# تنسيق الكود
pnpm format

# بناء المشروع
pnpm build
```

## الصيانة والتحديثات

### تحديث المكتبات
```bash
pnpm update
```

### تنظيف الملفات المؤقتة
```bash
rm -rf node_modules dist
pnpm install
pnpm build
```

## استكشاف الأخطاء

### المشكلة: الصفحة لا تحمل البيانات
**الحل**: تحقق من أن ملفات JSON موجودة في `client/src/data/`

### المشكلة: البحث لا يعمل
**الحل**: تأكد من أن البيانات في ملفات JSON بالتنسيق الصحيح

### المشكلة: الروابط الخارجية لا تعمل
**الحل**: تحقق من أن الروابط صحيحة وتبدأ بـ `https://`

## الأداء والتحسينات

### تحسينات الأداء المطبقة
- تقسيم الكود (Code Splitting)
- ضغط الملفات (Gzip)
- تخزين مؤقت (Caching)
- تحميل سريع للصور

### قياس الأداء
```bash
# بناء المشروع وعرض حجم الملفات
pnpm build
```

## النسخ الاحتياطية

### نسخ احتياطية من البيانات
```bash
# نسخ ملفات البيانات
cp -r client/src/data backup/data-$(date +%Y%m%d)
```

## الأمان

### نصائح الأمان
1. لا تضع كلمات المرور في الكود
2. استخدم متغيرات البيئة للبيانات الحساسة
3. قم بتحديث المكتبات بانتظام
4. استخدم HTTPS في الإنتاج

## الدعم والمساعدة

للمساعدة والدعم:
- تيلجرام: https://t.me/zadalbaheth
- واتس آب: https://whatsapp.com/channel/0029VaDVCOmL7UVUKklLSO0z

---

**آخر تحديث**: نوفمبر 2025
