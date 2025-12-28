"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  User,
  MapPin,
  Clock,
  Users,
  Target,
  BookOpen,
  Award,
  ChevronRight,
} from "lucide-react";

export default function TeacherTrainingProgramPage() {
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
            <li>
              <Link
                href="/news"
                className="text-primary hover:underline font-arabic"
              >
                الأخبار
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600 font-arabic">
              إطلاق برنامج جديد لتكوين المدرسين في التربية الدامجة
            </li>
          </ol>
        </nav>

        {/* Hero Image */}
        <section className="mb-12">
          <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative">
            <img
              src="https://parcours-orientation.net/storage/images/exclusive/formation.jpeg"
              alt="إطلاق برنامج جديد لتكوين المدرسين في التربية الدامجة"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-arabic">
                  تكوينات
                </span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-arabic">
                  تربية دامجة
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-6 font-arabic text-gray-800 text-right">
              إطلاق برنامج جديد لتكوين المدرسين في التربية الدامجة
            </h1>

            <div className="flex flex-wrap items-center justify-end gap-4 text-sm text-gray-500 mb-8 font-arabic">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>25 نونبر 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>المديرية الإقليمية للفحص أنجرة</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>المديرية الإقليمية للفحص أنجرة</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-right font-arabic">
              <p className="mb-6 leading-relaxed">
                في إطار تنزيل البرنامج الإقليمي للتكوين المستمر والإطار الإجرائي
                لخارطة الطريق 2022–2026، وتفعيل البرنامج الوطني الرامي إلى تعزيز
                شبكة التربية الدامجة، انطلقت يوم الإثنين 25 نونبر 2025 بمقر
                المديرية الإقليمية للفحص أنجرة دورة تكوينية لفائدة السيدات
                والسادة الأطر التربوية العاملة بالمؤسسات المحنة لقاعات الموارد
                للتأهيل والدعم وتلك التي تحتضن حالات تلميذات و تلاميذ في وضعية
                إعاقة.
              </p>

              <p className="mb-6 leading-relaxed">
                الدورة التكوينية التي يؤطرها كل من السيد اسماعيل بوصباطة، مفتش
                تربوي مكلف بالدمج التربوي، والسيد يوسف لمهوض، مستشار في التوجيه
                التربوي ورئيس مكتب الصحة المدرسية والتربية الدامجة بالمديرية
                ستكون مناسبة لتبادل التجارب والممارسات الفضلى وفرصة لمناقشة سبل
                الارتقاء بخدمات التربية الدامجة وضمان تكافؤ الفرص بين جميع
                المتعلمين.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
                أهداف البرنامج التكويني
              </h2>
              <p className="mb-6 leading-relaxed">
                يهدف هذا البرنامج التكويني إلى تمكين الأطر التربوية من اكتساب
                الكفاءات اللازمة لتطبيق ممارسات التربية الدامجة في الفصول
                الدراسية، مع التركيز على:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2 text-right">
                <li>
                  تطوير استراتيجيات التدريس الملائمة لاحتياجات المتعلمين
                  المختلفة
                </li>
                <li>استخدام التقنيات المساعدة لدعم المتعلمين في وضعية إعاقة</li>
                <li>بناء بيئات تعليمية شاملة ومحفزة للجميع</li>
                <li>تطوير آليات التقييم المناسبة للتعليم الدامج</li>
                <li>تعزيز التعاون بين المدرسين وأولياء الأمور والمختصين</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
                محاور الدورة التكوينية
              </h2>
              <p className="mb-6 leading-relaxed">
                تتناول الدورة التكوينية عدة محاور أساسية من بينها:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2 text-right">
                <li>أسس ومبادئ التربية الدامجة</li>
                <li>تصميم وتكييف المناهج الدراسية</li>
                <li>استراتيجيات التدريس الفارقي</li>
                <li>إدارة السلوك في الفصول الدامجة</li>
                <li>التقييم والتدخل المبكر</li>
                <li>الشراكة الأسرية والمجتمعية</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">
                شهادات المشاركة
              </h2>
              <p className="mb-6 leading-relaxed">
                سيحصل المشاركون في هذه الدورة التكوينية على شهادات معتمدة من
                المديرية الإقليمية للفحص أنجرة، مع إمكانية الاستفادة من برامج
                تكوينية متقدمة في المستقبل. كما سيتم تزويدهم بحزمة من الموارد
                التعليمية والأدوات العملية التي يمكن تطبيقها مباشرة في المؤسسات
                التعليمية.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 font-arabic text-gray-800 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                معلومات الحدث
              </h3>
              <div className="space-y-3 text-right font-arabic">
                <div className="flex justify-between">
                  <span className="text-gray-600">التاريخ:</span>
                  <span className="font-medium">25 نونبر 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">المكان:</span>
                  <span className="font-medium">
                    المديرية الإقليمية للفحص أنجرة
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">المدة:</span>
                  <span className="font-medium">3 أيام</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">عدد المشاركين:</span>
                  <span className="font-medium">30 إطاراً تربوياً</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 font-arabic text-gray-800 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                المؤطرون
              </h3>
              <div className="space-y-3 text-right font-arabic">
                <div>
                  <h4 className="font-medium">السيد اسماعيل بوصباطة</h4>
                  <p className="text-sm text-gray-600">
                    مفتش تربوي مكلف بالدمج التربوي
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">السيد يوسف لمهوض</h4>
                  <p className="text-sm text-gray-600">
                    مستشار في التوجيه التربوي ورئيس مكتب الصحة المدرسية والتربية
                    الدامجة
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 font-arabic text-gray-800 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                البرامج ذات الصلة
              </h3>
              <div className="space-y-3">
                <Link
                  href="/disability-types"
                  className="block p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <h4 className="font-medium font-arabic mb-1">
                    أنواع الإعاقة
                  </h4>
                  <p className="text-sm text-gray-600 font-arabic">
                    تعرف على مختلف أنواع الإعاقة وخصائصها
                  </p>
                </Link>
                <Link
                  href="/teachers-guide"
                  className="block p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <h4 className="font-medium font-arabic mb-1">
                    دليل المدرسين
                  </h4>
                  <p className="text-sm text-gray-600 font-arabic">
                    مصادر وأدوات للتربية الدامجة
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            مقالات ذات صلة
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/news" className="group block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="aspect-video bg-gray-200 relative">
                  <img
                    src="/api/placeholder/400/250"
                    alt="آخر أخبار التربية الدامجة"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-arabic text-gray-800 group-hover:text-primary transition-colors">
                    آخر أخبار التربية الدامجة
                  </h3>
                  <p className="text-gray-600 font-arabic text-sm">
                    اطّلع على جميع المقالات والأنشطة المتعلقة بالتربية الدامجة
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/teachers-guide" className="group block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="aspect-video bg-gray-200 relative">
                  <img
                    src="/api/placeholder/400/250"
                    alt="دليل المدرسين"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-arabic text-gray-800 group-hover:text-primary transition-colors">
                    دليل المدرسين
                  </h3>
                  <p className="text-gray-600 font-arabic text-sm">
                    مصادر وأدوات عملية لتطبيق التربية الدامجة في الفصول الدراسية
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/resources" className="group block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="aspect-video bg-gray-200 relative">
                  <img
                    src="/api/placeholder/400/250"
                    alt="الموارد التعليمية"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 font-arabic text-gray-800 group-hover:text-primary transition-colors">
                    الموارد التعليمية
                  </h3>
                  <p className="text-gray-600 font-arabic text-sm">
                    مواد تعليمية وأدوات مساعدة للتربية الدامجة
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="bg-linear-to-r from-blue-50 to-green-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 font-arabic text-gray-800">
              اشترك في نشرتنا الإخبارية
            </h2>
            <p className="text-xl mb-8 text-gray-600 font-arabic leading-relaxed max-w-2xl mx-auto">
              احصل على آخر الأخبار والفعاليات والموارد المتعلقة بالتربية الدامجة
              مباشرة في بريدك الإلكتروني
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-6 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 font-arabic"
              />
              <button
                type="submit"
                className="button-primary bg-primary text-white hover:bg-primary/90"
                onClick={(e) => {
                  e.preventDefault();
                  alert("شكراً لاشتراكك في نشرتنا الإخبارية!");
                }}
              >
                اشتراك
              </button>
            </form>
          </div>
        </section>

        {/* Back to News */}
        <section className="text-center">
          <Link
            href="/news"
            className="inline-flex items-center justify-center gap-2 button-secondary border-2 border-primary text-primary hover:bg-primary hover:text-white font-arabic px-6 py-3 rounded-lg transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>العودة إلى الأخبار</span>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}

