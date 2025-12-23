"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Download,
  FileText,
  CheckSquare,
  Users,
  BookOpen,
  Calendar,
  Image as ImageIcon,
  Search,
  Star,
  Clock,
  Eye,
} from "lucide-react";

type DownloadFile = {
  title: string;
  description: string;
  type: string;
  size: string;
  downloads: number;
};

type DownloadCategory = {
  category: string;
  description: string;
  icon: any;
  color: string;
  files: DownloadFile[];
};

type VisualItem = {
  title: string;
  description: string;
  format: string;
  size: string;
};

type VisualCategory = {
  title: string;
  description: string;
  items: VisualItem[];
};

type VideoItem = {
  title: string;
  description: string;
  duration: string;
  views: number;
};

type VideoCategory = {
  title: string;
  description: string;
  videos: VideoItem[];
};

const searchFilters = [
  { label: "الكل", value: "all" as const },
  { label: "نماذج PPI", value: "ppi" as const },
  { label: "استمارات", value: "forms" as const },
  { label: "دلائل", value: "guides" as const },
  { label: "فيديوهات", value: "videos" as const },
  { label: "صور", value: "images" as const },
];

type FilterValue = (typeof searchFilters)[number]["value"];

function normalizeArabic(input: string) {
  return (
    (input || "")
      .toLowerCase()
      // remove diacritics
      .replace(/[\u0610-\u061A\u064B-\u065F\u06D6-\u06ED]/g, "")
      // normalize alef, yah, tah marbuta, waw-hamza etc.
      .replace(/[أإآا]/g, "ا")
      .replace(/ى/g, "ي")
      .replace(/[ؤئ]/g, "ء")
      .replace(/ة/g, "ه")
      .replace(/\u0640/g, "") // tatweel
      .trim()
  );
}

function useDebounced<T>(value: T, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

function highlightText(text: string, query: string) {
  if (!query) return text;
  const normText = normalizeArabic(text);
  const normQuery = normalizeArabic(query);
  if (!normQuery) return text;

  // Build regex over original text positions by splitting on query words
  const idx = normText.indexOf(normQuery);
  if (idx === -1) return text;

  // Fallback simple highlighter using plain index mapping length
  const start = idx;
  const end = idx + normQuery.length;

  // This naive mapping assumes same length after normalization, which may differ.
  // As a safer approach, fall back to case-insensitive highlight without normalization.
  const safeRegex = new RegExp(
    `(${query.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")})`,
    "gi"
  );
  const parts = text.split(safeRegex);
  return parts.map((part, i) =>
    safeRegex.test(part) ? (
      <mark key={i} className="bg-yellow-200 rounded px-0.5">
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function Resources() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterValue>("all");
  const debouncedSearch = useDebounced(search, 250);

  const downloadableResources: DownloadCategory[] = [
    {
      category: "مشروع بيداغوجي فردي (PPI)",
      description: "نماذج جاهزة للمشروع البيداغوجي الفردي",
      icon: FileText,
      color: "bg-blue-50 border-blue-200",
      files: [
        {
          title: "نموذج PPI أساسي",
          description: "قالب شامل للمشروع البيداغوجي الفردي",
          type: "Word",
          size: "2.5 MB",
          downloads: 1250,
        },
        {
          title: "نموذج PPI مبسط",
          description: "نسخة مبسطة للبدء السريع",
          type: "PDF",
          size: "1.2 MB",
          downloads: 890,
        },
        {
          title: "دليل ملء PPI",
          description: "شرح مفصل لكل قسم من المشروع",
          type: "PDF",
          size: "3.8 MB",
          downloads: 2100,
        },
      ],
    },
    {
      category: "استمارات التتبع",
      description: "نماذج لتتبع تقدم الأطفال",
      icon: CheckSquare,
      color: "bg-green-50 border-green-200",
      files: [
        {
          title: "بطاقة تتبع أسبوعية",
          description: "متابعة التطور الأسبوعي للطفل",
          type: "Excel",
          size: "890 KB",
          downloads: 1560,
        },
        {
          title: "تقرير التقدم الشهري",
          description: "تقرير شامل للتقدم المحرز",
          type: "Word",
          size: "1.5 MB",
          downloads: 980,
        },
        {
          title: "سجل الملاحظات الصفية",
          description: "تسجيل الملاحظات اليومية",
          type: "PDF",
          size: "650 KB",
          downloads: 720,
        },
      ],
    },
    {
      category: "استمارات التقييم",
      description: "أدوات تقييم متنوعة للتعلمات",
      icon: Users,
      color: "bg-purple-50 border-purple-200",
      files: [
        {
          title: "شبكة تقييم الكفايات",
          description: "تقييم الكفايات المهنية للمدرس",
          type: "Excel",
          size: "1.1 MB",
          downloads: 1450,
        },
        {
          title: "استمارة تقييم الطفل",
          description: "تقييم شامل للطفل في وضعية إعاقة",
          type: "Word",
          size: "2.2 MB",
          downloads: 1890,
        },
        {
          title: "تقييم البيئة الصفية",
          description: "تقييم مدى دمج الفصل الدراسي",
          type: "PDF",
          size: "980 KB",
          downloads: 650,
        },
      ],
    },
    {
      category: "دلائل عملية",
      description: "كتيبات إرشادية للممارسة اليومية",
      icon: BookOpen,
      color: "bg-orange-50 border-orange-200",
      files: [
        {
          title: "دليل المدرس الدامج",
          description: "دليل شامل للمدرسين",
          type: "PDF",
          size: "5.2 MB",
          downloads: 3200,
        },
        {
          title: "دليل الأسرة",
          description: "دليل عملي للأسر",
          type: "PDF",
          size: "3.8 MB",
          downloads: 2800,
        },
        {
          title: "دليل المدير",
          description: "دليل للمديرين والمنسقين",
          type: "PDF",
          size: "4.1 MB",
          downloads: 1200,
        },
      ],
    },
  ];

  const visualResources: VisualCategory[] = [
    {
      title: "خطاطات بصرية",
      description: "رسوم توضيحية للتربية الدامجة",
      items: [
        {
          title: "مخطط مقارنة أنماط التربية",
          description: "مقارنة بين التربية العادية والخاصة والإدماجية والدامجة",
          format: "PNG",
          size: "2.1 MB",
        },
        {
          title: "مخطط الحواجز والحلول",
          description: "تصنيف الحواجز والحلول المقترحة",
          format: "PNG",
          size: "1.8 MB",
        },
        {
          title: "مخطط أدوار المدرس الدامج",
          description: "الأدوار المتعددة للمدرس الدامج",
          format: "PNG",
          size: "1.5 MB",
        },
      ],
    },
    {
      title: "ملصقات توعوية",
      description: "ملصقات للتوعية بالتربية الدامجة",
      items: [
        {
          title: 'ملصق "الدمج حق للجميع"',
          description: "ملصق توعوي للمدارس",
          format: "PDF",
          size: "3.2 MB",
        },
        {
          title: 'ملصق "قبلات الاختلاف"',
          description: "ملصق لتشجيع قبول التنوع",
          format: "PDF",
          size: "2.8 MB",
        },
        {
          title: 'ملصق "كل طفل يتعلم"',
          description: "ملصق تحفيزي للتربية الدامجة",
          format: "PDF",
          size: "2.5 MB",
        },
      ],
    },
    {
      title: "أدوات تعليمية",
      description: "بطاقات ووسائل تعليمية دامجة",
      items: [
        {
          title: "بطاقات التواصل",
          description: "بطاقات مساعدة للتواصل",
          format: "PDF",
          size: "1.2 MB",
        },
        {
          title: "بطاقات الحوافز",
          description: "بطاقات تحفيزية للسلوك الإيجابي",
          format: "PDF",
          size: "980 KB",
        },
        {
          title: "بطاقات التنظيم",
          description: "بطاقات لتنظيم الروتين اليومي",
          format: "PDF",
          size: "1.5 MB",
        },
      ],
    },
  ];

  const videoResources: VideoCategory[] = [
    {
      title: "فيديوهات تعليمية",
      description: "مقاطع فيديو للتدريب والتوعية",
      videos: [
        {
          title: "مقدمة في التربية الدامجة",
          description: "فيديو تعريفي شامل",
          duration: "15:30",
          views: 5420,
        },
        {
          title: "استراتيجيات التدريس الدامج",
          description: "طرق عملية للصف الدامج",
          duration: "22:15",
          views: 3890,
        },
        {
          title: "إدارة الفصل الدامج",
          description: "نصائح للمدرسين",
          duration: "18:45",
          views: 2760,
        },
      ],
    },
    {
      title: "شهادات واقعية",
      description: "قصص نجاح وتجارب واقعية",
      videos: [
        {
          title: "قصة نجاح: طفل توحدي",
          description: "تجربة دمج ناجحة",
          duration: "12:20",
          views: 8900,
        },
        {
          title: "شهادة مدرسة دامجة",
          description: "تجربة مدرسة في الدمج",
          duration: "16:40",
          views: 6780,
        },
        {
          title: "شهادة أسرة",
          description: "تجربة أسرة مع الدمج",
          duration: "14:10",
          views: 5430,
        },
      ],
    },
  ];

  const matchText = (text: string, q: string) =>
    normalizeArabic(text).includes(normalizeArabic(q));

  const showDownloads =
    filter === "all" ||
    filter === "ppi" ||
    filter === "forms" ||
    filter === "guides";
  const showImages = filter === "all" || filter === "images";
  const showVideos = filter === "all" || filter === "videos";

  const filteredDownloadable = useMemo(() => {
    if (!showDownloads) return [] as DownloadCategory[];

    const q = debouncedSearch;
    return downloadableResources
      .map((cat) => {
        // map category to type for filter refinement
        const catType: FilterValue = cat.category.includes("PPI")
          ? "ppi"
          : cat.category.includes("استمارات")
          ? "forms"
          : cat.category.includes("دلائل")
          ? "guides"
          : "all";

        if (filter !== "all" && filter !== catType) {
          return { ...cat, files: [] as DownloadFile[] };
        }

        if (!q) return cat;

        const files = cat.files.filter(
          (f) =>
            matchText(f.title, q) ||
            matchText(f.description, q) ||
            matchText(cat.category, q)
        );
        return { ...cat, files };
      })
      .filter((cat) => cat.files.length > 0);
  }, [debouncedSearch, filter]);

  const filteredVisuals = useMemo(() => {
    if (!showImages) return [] as VisualCategory[];
    const q = debouncedSearch;
    return visualResources
      .map((res) => {
        if (!q) return res;
        const items = res.items.filter(
          (it) => matchText(it.title, q) || matchText(it.description, q)
        );
        return { ...res, items };
      })
      .filter((res) => res.items.length > 0);
  }, [debouncedSearch, filter]);

  const filteredVideos = useMemo(() => {
    if (!showVideos) return [] as VideoCategory[];
    const q = debouncedSearch;
    return videoResources
      .map((res) => {
        if (!q) return res;
        const videos = res.videos.filter(
          (v) => matchText(v.title, q) || matchText(v.description, q)
        );
        return { ...res, videos };
      })
      .filter((res) => res.videos.length > 0);
  }, [debouncedSearch, filter]);

  const totalResults = useMemo(() => {
    const d = filteredDownloadable.reduce((acc, c) => acc + c.files.length, 0);
    const i = filteredVisuals.reduce((acc, c) => acc + c.items.length, 0);
    const v = filteredVideos.reduce((acc, c) => acc + c.videos.length, 0);
    return d + i + v;
  }, [filteredDownloadable, filteredVisuals, filteredVideos]);

  const noResults = totalResults === 0;

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container-custom section-padding">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="الرابط التشعبي">
          <ol className="flex items-center space-x-reverse space-x-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-primary hover:underline font-arabic"
              >
                الرئيسية
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600 font-arabic">الموارد</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="gradient-primary text-white rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic">
              نماذج وموارد قابلة للتحميل
            </h1>
            <p className="text-xl mb-8 text-blue-50 leading-relaxed font-arabic max-w-4xl">
              مكتبة شاملة من النماذج العملية والاستمارات الجاهزة والدلائل
              الإرشادية لدعم التربية الدامجة. جميع الموارد متاحة للتحميل مجاناً.
            </p>

            {/* Search Bar */}
            <div
              className="max-w-2xl mx-auto"
              role="search"
              aria-label="بحث عن الموارد"
            >
              <div className="bg-white rounded-lg p-2 flex items-center space-x-reverse space-x-2">
                <Search
                  className="h-6 w-6 text-gray-400 mr-3"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  placeholder="ابحث عن موارد..."
                  className="flex-1 px-4 py-2 text-gray-800 placeholder-gray-500 focus:outline-none font-arabic"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="مربع البحث"
                />
                <button
                  className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-arabic"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  aria-label="تنفيذ البحث"
                >
                  بحث
                </button>
              </div>
              <div className="sr-only" aria-live="polite">
                عدد النتائج: {totalResults}
              </div>
            </div>

            {/* Filters */}
            <div
              className="flex flex-wrap justify-center gap-3 mt-6"
              role="tablist"
              aria-label="تصفية النتائج"
            >
              {searchFilters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  role="tab"
                  aria-selected={filter === f.value}
                  className={`px-4 py-2 rounded-full font-arabic transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/60 ${
                    filter === f.value
                      ? "bg-white text-primary"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Results summary */}
            <div
              className="text-center mt-4 text-blue-100 font-arabic"
              aria-hidden="true"
            >
              {debouncedSearch || filter !== "all" ? (
                <span>نتائج مطابقة: {totalResults}</span>
              ) : null}
            </div>
          </div>
        </section>

        {noResults ? (
          <section className="mb-16">
            <div className="bg-white rounded-2xl p-12 text-center shadow">
              <h2 className="text-2xl font-bold mb-3 font-arabic text-gray-800">
                لا توجد نتائج
              </h2>
              <p className="text-gray-600 font-arabic mb-6">
                جرّب كلمات مفتاحية أخرى أو اختر تصنيفاً مختلفاً.
              </p>
              <button
                className="button-secondary"
                onClick={() => {
                  setSearch("");
                  setFilter("all");
                }}
              >
                إعادة تعيين البحث
              </button>
            </div>
          </section>
        ) : null}

        {/* Downloadable Resources */}
        {filteredDownloadable.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
              موارد قابلة للتحميل
            </h2>
            <div className="space-y-8">
              {filteredDownloadable.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    className={`border-2 rounded-xl p-8 ${category.color}`}
                  >
                    <div className="flex items-center space-x-reverse space-x-4 mb-6">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                        <Icon className="h-8 w-8 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 font-arabic text-gray-800">
                          {debouncedSearch ? (
                            <>
                              {highlightText(
                                category.category,
                                debouncedSearch
                              )}
                            </>
                          ) : (
                            category.category
                          )}
                        </h3>
                        <p className="text-gray-700 font-arabic leading-relaxed">
                          {debouncedSearch ? (
                            <>
                              {highlightText(
                                category.description,
                                debouncedSearch
                              )}
                            </>
                          ) : (
                            category.description
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      {category.files.map((file, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="font-bold font-arabic text-gray-800 mb-2">
                                {debouncedSearch ? (
                                  <>
                                    {highlightText(file.title, debouncedSearch)}
                                  </>
                                ) : (
                                  file.title
                                )}
                              </h4>
                              <p className="text-gray-600 font-arabic text-sm leading-relaxed">
                                {debouncedSearch ? (
                                  <>
                                    {highlightText(
                                      file.description,
                                      debouncedSearch
                                    )}
                                  </>
                                ) : (
                                  file.description
                                )}
                              </p>
                            </div>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-arabic">
                              {file.type}
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-sm text-gray-500 font-arabic mb-4">
                            <span>{file.size}</span>
                            <div className="flex items-center space-x-reverse space-x-1">
                              <Download className="h-4 w-4" />
                              <span>{file.downloads}</span>
                            </div>
                          </div>

                          <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-arabic flex items-center justify-center space-x-reverse space-x-2">
                            <Download className="h-4 w-4" />
                            <span>تحميل</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Visual Resources */}
        {filteredVisuals.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
              موارد بصر��ة
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {filteredVisuals.map((resource, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-center space-x-reverse space-x-3 mb-6">
                    <ImageIcon
                      className="h-8 w-8 text-purple-600"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-bold font-arabic text-gray-800">
                      {debouncedSearch ? (
                        <>{highlightText(resource.title, debouncedSearch)}</>
                      ) : (
                        resource.title
                      )}
                    </h3>
                  </div>
                  <p className="text-gray-600 font-arabic leading-relaxed mb-6">
                    {debouncedSearch ? (
                      <>
                        {highlightText(resource.description, debouncedSearch)}
                      </>
                    ) : (
                      resource.description
                    )}
                  </p>
                  <div className="space-y-4">
                    {resource.items.map((item, i) => (
                      <div
                        key={i}
                        className="border rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
                      >
                        <h4 className="font-bold font-arabic text-gray-800 mb-2">
                          {debouncedSearch ? (
                            <>{highlightText(item.title, debouncedSearch)}</>
                          ) : (
                            item.title
                          )}
                        </h4>
                        <p className="text-gray-600 font-arabic text-sm mb-3">
                          {debouncedSearch ? (
                            <>
                              {highlightText(item.description, debouncedSearch)}
                            </>
                          ) : (
                            item.description
                          )}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 font-arabic">
                            {item.format} • {item.size}
                          </span>
                          <button className="text-purple-600 hover:text-purple-800 font-arabic text-sm flex items-center space-x-reverse space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>معاينة</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Video Resources */}
        {filteredVideos.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
              موارد فيديو
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {filteredVideos.map((resource, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 font-arabic text-gray-800">
                    {debouncedSearch ? (
                      <>{highlightText(resource.title, debouncedSearch)}</>
                    ) : (
                      resource.title
                    )}
                  </h3>
                  <p className="text-gray-600 font-arabic leading-relaxed mb-6">
                    {debouncedSearch ? (
                      <>
                        {highlightText(resource.description, debouncedSearch)}
                      </>
                    ) : (
                      resource.description
                    )}
                  </p>
                  <div className="space-y-4">
                    {resource.videos.map((video, i) => (
                      <div
                        key={i}
                        className="border rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="flex items-start space-x-reverse space-x-4">
                          <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                            <Calendar className="h-8 w-8 text-gray-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold font-arabic text-gray-800 mb-1">
                              {debouncedSearch ? (
                                <>
                                  {highlightText(video.title, debouncedSearch)}
                                </>
                              ) : (
                                video.title
                              )}
                            </h4>
                            <p className="text-gray-600 font-arabic text-sm mb-2">
                              {debouncedSearch ? (
                                <>
                                  {highlightText(
                                    video.description,
                                    debouncedSearch
                                  )}
                                </>
                              ) : (
                                video.description
                              )}
                            </p>
                            <div className="flex items-center space-x-reverse space-x-4 text-sm text-gray-500 font-arabic">
                              <div className="flex items-center space-x-reverse space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{video.duration}</span>
                              </div>
                              <div className="flex items-center space-x-reverse space-x-1">
                                <Eye className="h-4 w-4" />
                                <span>{video.views.toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Popular Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            الموارد الأكثر تحميلاً
          </h2>
          <div className="bg-linear-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "دليل المدرس الدامج",
                  type: "PDF",
                  size: "5.2 MB",
                  downloads: 3200,
                  rating: 4.8,
                },
                {
                  title: "نموذج PPI أساسي",
                  type: "Word",
                  size: "2.5 MB",
                  downloads: 1250,
                  rating: 4.6,
                },
                {
                  title: "دليل ملء PPI",
                  type: "PDF",
                  size: "3.8 MB",
                  downloads: 2100,
                  rating: 4.7,
                },
                {
                  title: "استمارة تقييم الطفل",
                  type: "Word",
                  size: "2.2 MB",
                  downloads: 1890,
                  rating: 4.5,
                },
              ].map((resource, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md text-center"
                >
                  <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                  <h4 className="font-bold font-arabic text-gray-800 mb-2">
                    {resource.title}
                  </h4>
                  <div className="text-sm text-gray-500 font-arabic mb-3">
                    {resource.type} • {resource.size}
                  </div>
                  <div className="flex items-center justify-center space-x-reverse space-x-2 text-sm text-gray-600 font-arabic mb-4">
                    <Download className="h-4 w-4" />
                    <span>{resource.downloads.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(resource.rating)
                            ? "text-yellow-500 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="mr-2 text-sm text-gray-600 font-arabic">
                      {resource.rating}
                    </span>
                  </div>
                  <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-arabic text-sm">
                    تحميل
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gray-100 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 font-arabic text-gray-800">
              هل تبحث عن شيء محدد؟
            </h2>
            <p className="text-xl mb-8 text-gray-600 font-arabic leading-relaxed max-w-2xl mx-auto">
              إذا لم تجد المورد الذي تبحث عنه، فلا تتردد في التواصل معنا
              لمساعدتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="button-primary">
                تواصل معنا
              </Link>
              <Link href="/faq" className="button-secondary">
                الأسئلة الشائعة
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
