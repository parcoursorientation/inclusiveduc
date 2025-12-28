"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  Heart,
  MessageCircle,
  Search,
  Filter,
  ChevronRight,
  Award,
  BookOpen,
  Target,
} from "lucide-react";

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "إطلاق برنامج جديد لتكوين المدرسين في التربية الدامجة",
      category: "تكوينات",
      date: "27-26-25 نونبر 2025",
      location: "طنجة",
      image:
        "https://parcours-orientation.net/storage/images/exclusive/formation.jpeg",
      excerpt:
        "برنامج تكويني متكامل يهدف إلى تكوين 100 مدرس في مجال التربية الدامجة على مستوى مديرية الفحص-أنجرة",
      content:
        "أطلقت وزارة التربية الوطنية بالتعاون مع الشركاء الدوليين برنامجاً جديداً لتكوين المدرسين في مجال التربية الدامجة...",
      tags: ["تكوين", "مدرسين", "تربية دامجة"],
      featured: true,
      views: 2450,
    },
    {
      id: 2,
      title: "نجاح تجربة دمج 150 طفلاً ذوي إعاقة في المدارس العمومية",
      category: "قصص نجاح",
      date: "10 ديسمبر 2025",
      location: "الدار البيضاء",
      image: "/api/placeholder/400/250",
      excerpt:
        "تجربة رائدة في جهة الدار البيضاء سطات تثبت نجاح الدمج المدرسي للأطفال ذوي الإعاقة",
      content:
        "أظهرت النتائج الأولية لتجربة دمج الأطفال ذوي الإعاقة في المدارس العمومية بجهة الدار البيضاء سطات نجاحاً كبيراً...",
      tags: ["نجاح", "دمج", "أطفال"],
      featured: true,
      views: 3890,
    },
    {
      id: 3,
      title: "ندوة وطنية حول التحديات وفرص التربية الدامجة",
      category: "لقاءات",
      date: "5 ديسمبر 2024",
      location: "مراكش",
      image: "/api/placeholder/400/250",
      excerpt:
        "ندوة تجمع الخبراء والممارسين لمناقشة مستقبل التربية الدامجة في المغرب",
      content:
        "نظمت وزارة التربية الوطنية بالتعاون مع منظمة اليونسكو ندوة وطنية حول التحديات وفرص التربية الدامجة...",
      tags: ["ندوة", "خبراء", "يونسكو"],
      featured: false,
      views: 1560,
    },
    {
      id: 4,
      title: "توزيع معدات مساعدة على 100 مؤسسة تعليمية",
      category: "أنشطة",
      date: "1 ديسمبر 2024",
      location: "البيضاء",
      image: "/api/placeholder/400/250",
      excerpt:
        "توزيع معدات تكنولوجية مساعدة لدعم الطلاب ذوي الإعاقة في المؤسسات التعليمية",
      content:
        "في إطار برنامج دعم التربية الدامجة، تم توزيع معدات تكنولوجية مساعدة على 100 مؤسسة تعليمية...",
      tags: ["معدات", "تكنولوجيا", "دعم"],
      featured: false,
      views: 980,
    },
    {
      id: 5,
      title: "ورشة عمل حول تصميم المناهج الدامجة",
      category: "تكوينات",
      date: "28 نوفمبر 2024",
      location: "فاس",
      image: "/api/placeholder/400/250",
      excerpt:
        "ورشة عمل تدريبية لتأهيل المصممين التربويين في مجال المناهج الدامجة",
      content:
        "نظمت المديرية العامة للمناهج ورشة عمل حول تصميم المناهج الدامجة بمشاركة 50 مصمماً تربوياً...",
      tags: ["مناهج", "تصميم", "تكوين"],
      featured: false,
      views: 720,
    },
    {
      id: 6,
      title: 'حملة توعية تحت شعار "الدمج حق للجميع"',
      category: "أنشطة",
      date: "25 نوفمبر 2024",
      location: "طنجة",
      image: "/api/placeholder/400/250",
      excerpt:
        "انطلاق حملة وطنية للتوعية بأهمية التربية الدامجة وحقوق الأطفال ذوي الإعاقة",
      content:
        'انطلقت الحملة الوطنية للتوعية بالتربية الدامجة تحت شعار "الدمج حق للجميع" في عدة مدن مغربية...',
      tags: ["توعية", "حملة", "حقوق"],
      featured: false,
      views: 2100,
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "المؤتمر الدولي للتربية الدامجة",
      date: "20-22 يناير 2025",
      location: "الرباط",
      type: "مؤتمر",
      description:
        "مؤتمر دولي يجمع الخبراء من مختلف دول العالم لمناقشة أحدث التوجهات في التربية الدامجة",
      registration: true,
      participants: 500,
    },
    {
      id: 2,
      title: "ورشة عمل حول التقنيات المساعدة",
      date: "15 يناير 2025",
      location: "الدار البيضاء",
      type: "ورشة عمل",
      description:
        "ورشة عملية حول استخدام التقنيات المساعدة في دعم الطلاب ذوي الإعاقة",
      registration: true,
      participants: 50,
    },
    {
      id: 3,
      title: "يوم دراسي حول إدارة الفصول الدامجة",
      date: "10 يناير 2025",
      location: "مراكش",
      type: "يوم دراسي",
      description:
        "يوم دراسي للمدرسين حول استراتيجيات إدارة الفصول الدامجة بفعالية",
      registration: true,
      participants: 100,
    },
  ];

  const successStories = [
    {
      id: 1,
      title: "قصة سارة: من العزلة إلى التفوق",
      category: "قصص نجاح",
      date: "8 ديسمبر 2024",
      image: "/api/placeholder/300/200",
      excerpt:
        "قصة طفلة توحدي تم دمجها بنجاح في المدرسة العادية وتفوقت دراسياً",
      content:
        "سارة طفلة في التاسعة من عمرها، تم تشخيصها بالتوحد في سن الثالثة. بفضل الدعم الأسري والمدرسي المناسب...",
      tags: ["توحد", "نجاح", "تفوق"],
      rating: 5,
    },
    {
      id: 2,
      title: "تجربة مدرسة النصر في الدمج",
      category: "تجارب",
      date: "5 ديسمبر 2024",
      image: "/api/placeholder/300/200",
      excerpt: "كيف حولت مدرسة النصر بيئتها لتصبح مدرسة دامجة نموذجية",
      content:
        "مدرسة النصر الابتدائية بالدار البيضاء بدأت رحلتها نحو التربية الدامجة قبل ثلاث سنوات...",
      tags: ["مدرسة", "نموذج", "تجربة"],
      rating: 5,
    },
    {
      id: 3,
      title: "أمين: من الصعوبات إلى القيادة",
      category: "قصص نجاح",
      date: "2 ديسمبر 2024",
      image: "/api/placeholder/300/200",
      excerpt: "قصة طفل يعاني من صعوبات التعلم أصبح قائداً لمجموعة في فصله",
      content:
        "أمين طالب في السادسة ابتدائي، كان يعاني من صعوبات في القراءة والكتابة. بفضل الدعم المناسب...",
      tags: ["صعوبات تعلم", "قيادة", "نجاح"],
      rating: 4,
    },
  ];

  const categories = [
    { name: "الكل", value: "all", count: 24 },
    { name: "تكوينات", value: "training", count: 8 },
    { name: "لقاءات", value: "meetings", count: 6 },
    { name: "قصص نجاح", value: "success", count: 5 },
    { name: "أنشطة", value: "activities", count: 5 },
  ];

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
            <li className="text-gray-600 font-arabic">الأخبار والأنشطة</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="gradient-primary text-white rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic">
              الأخبار والأنشطة
            </h1>
            <p className="text-xl mb-8 text-blue-50 leading-relaxed font-arabic max-w-4xl">
              تابع آخر المستجدات والفعاليات في مجال التربية الدامجة. قصص نجاح،
              تكوينات، لقاءات، وأنشطة تهدف إلى تعزيز الدمج المدرسي.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-2 flex items-center space-x-reverse space-x-2">
                <Search className="h-6 w-6 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="ابحث في الأخبار والأنشطة..."
                  className="flex-1 px-4 py-2 text-gray-800 placeholder-gray-500 focus:outline-none font-arabic"
                />
                <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-arabic">
                  بحث
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            الأخبار المميزة
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {newsItems
              .filter((item) => item.featured)
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="aspect-video bg-gray-200 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-arabic">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-reverse space-x-4 text-sm text-gray-500 font-arabic mb-3">
                      <div className="flex items-center space-x-reverse space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center space-x-reverse space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center space-x-reverse space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{item.views.toLocaleString()} مشاهدة</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-arabic text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-arabic leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-arabic"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      {item.title === "إطلاق برنامج جديد لتكوين المدرسين في التربية الدامجة" ? (
                        <Link
                          href="/news/teacher-training-program"
                          className="text-primary hover:text-primary/80 font-arabic text-sm flex items-center space-x-reverse space-x-1"
                        >
                          <span>قراءة المزيد</span>
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      ) : (
                        <Link
                          href={`/news/${item.id}`}
                          className="text-primary hover:text-primary/80 font-arabic text-sm flex items-center space-x-reverse space-x-1"
                        >
                          <span>قراءة المزيد</span>
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Categories Filter */}
        <section className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Link
                key={category.value}
                href={`/news?category=${category.value}`}
                className={`px-4 py-2 rounded-full font-arabic transition-colors duration-200 inline-block ${
                  category.value === "all"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name} ({category.count})
              </Link>
            ))}
          </div>
        </section>

        {/* All News */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            جميع الأخبار
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <div className="aspect-video bg-gray-200 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-arabic">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-reverse space-x-4 text-sm text-gray-500 font-arabic mb-3">
                    <div className="flex items-center space-x-reverse space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center space-x-reverse space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 font-arabic text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-arabic leading-relaxed mb-4 text-sm">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-reverse space-x-1 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{item.views.toLocaleString()}</span>
                    </div>
                    {item.title === "إطلاق برنامج جديد لتكوين المدرسين في التربية الدامجة" ? (
                      <Link
                        href="/news/teacher-training-program"
                        className="text-primary hover:text-primary/80 font-arabic text-sm flex items-center space-x-reverse space-x-1"
                      >
                        <span>قراءة المزيد</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      <Link
                        href={`/news/${item.id}`}
                        className="text-primary hover:text-primary/80 font-arabic text-sm flex items-center space-x-reverse space-x-1"
                      >
                        <span>قراءة المزيد</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            الفعاليات القادمة
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-linear-to-br from-blue-50 to-green-50 rounded-xl p-8 border-2 border-blue-200"
              >
                <div className="flex items-center space-x-reverse space-x-3 mb-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-bold font-arabic text-gray-800">
                    {event.title}
                  </h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-reverse space-x-2 text-gray-600 font-arabic">
                    <Clock className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2 text-gray-600 font-arabic">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2 text-gray-600 font-arabic">
                    <Users className="h-4 w-4" />
                    <span>{event.participants} مشارك</span>
                  </div>
                </div>
                <p className="text-gray-700 font-arabic leading-relaxed mb-6">
                  {event.description}
                </p>
                {event.registration && (
                  <Link
                    href={`/events/register/${event.id}`}
                    className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-arabic inline-block text-center"
                  >
                    التسجيل في الفعالية
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            قصص نجاح ملهمة
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <div className="aspect-video bg-gray-200 relative">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-arabic">
                      {story.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-reverse space-x-1 text-sm text-gray-500 font-arabic">
                      <Calendar className="h-4 w-4" />
                      <span>{story.date}</span>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < story.rating
                              ? "text-yellow-500 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 font-arabic text-gray-800">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 font-arabic leading-relaxed mb-4 text-sm">
                    {story.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-arabic"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/success-stories/${story.id}`}
                    className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors duration-200 font-arabic text-sm inline-block text-center"
                  >
                    اقرأ القصة الكاملة
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="bg-gray-100 text-center text-gray-800 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 font-arabic">
              اشترك في نشرتنا الإخبارية
            </h2>
            <p className="text-xl mb-8 text-blue-800 font-arabic leading-relaxed max-w-2xl mx-auto">
              احصل على آخر الأخبار والفعاليات وقصص النجاح مباشرة في بريدك
              الإلكتروني
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-6 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 font-arabic"
              />
              <button
                type="submit"
                className="button-primary bg-white text-primary hover:bg-gray-100 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  // Ajouter ici la logique d'inscription à la newsletter
                  alert("شكراً لاشتراكك في نشرتنا الإخبارية!");
                }}
              >
                اشتراك
              </button>
            </form>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gray-100 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 font-arabic text-gray-800">
              هل لديك قصة نجاح تشاركها؟
            </h2>
            <p className="text-xl mb-8 text-gray-600 font-arabic leading-relaxed max-w-2xl mx-auto">
              شاركنا تجربتك في التربية الدامجة وكن مصدر إلهام للآخرين
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="button-primary bg-white text-primary hover:bg-gray-100
               inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>شارك قصتك</span>
              </Link>

              <Link
                href="/resources"
                className="button-secondary border-2 border-white text-white
               hover:bg-white hover:text-primary
               inline-flex items-center justify-center gap-2"
              >
                <BookOpen className="h-5 w-5" />
                <span>موارد إضافية</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
