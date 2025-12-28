import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  Users,
  Building,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  Target,
  BookOpen,
  GraduationCap,
} from "lucide-react";

export default function Barriers() {
  const barrierCategories = [
    {
      title: "حواجز مرتبطة بالمحيط",
      icon: Building,
      description: "عوائق بيئية ومادية تمنع الوصول والمشاركة",
      color: "bg-red-50 border-red-200",
      barriers: [
        {
          title: "بعد المدرسة",
          description: "بعد المسافة بين المنزل والمدرسة وصعوبة الوصول",
          examples: [
            "عدم وجود وسائل نقل مناسبة",
            "طرق غير آمنة",
            "تكلفة النقل الباهظة",
          ],
        },
        {
          title: "غياب الولوجيات",
          description: "عدم تكييف البنية التحتية لاستقبال جميع الأطفال",
          examples: [
            "سلالم بدون مصاعد",
            "أبواب ضيقة",
            "دورات مياه غير متاحة",
            "فصول دراسية غير مناسبة",
          ],
        },
        {
          title: "المناخ المدرسي",
          description: "بيئة غير مشجعة وغير متقبلة للتنوع",
          examples: ["التنمر", "التمييز", "عدم الدعم من الزملاء", "عزلة الطفل"],
        },
      ],
    },
    {
      title: "حواجز مرتبطة بالاتجاهات",
      icon: Users,
      description: "تمثلات سلبية وأحكام مسبقة تعيق الدمج",
      color: "bg-orange-50 border-orange-200",
      barriers: [
        {
          title: "التمثلات السلبية",
          description: "صور نمطية خاطئة حول الإعاقة والقدرات",
          examples: [
            "الاعتقاد بأن الإعاقة عقاب",
            "تقليل من قدرات الأطفال",
            "الخوف من الإعاقة",
          ],
        },
        {
          title: "التنميط",
          description: "وضع جميع الأطفال ذوي الإعاقة في قالب واحد",
          examples: [
            "الاعتقاد بأنهم جميعاً متشابهون",
            "تجاهل الفروق الفردية",
            "تعميم الصفات السلبية",
          ],
        },
        {
          title: "الأحكام المسبقة",
          description: "آراء مسبقة لا تستند إلى حقائق",
          examples: [
            "الاعتقاد بعدم جدوى التعليم",
            "توقع الفشل",
            "عدم الثقة في القدرات",
          ],
        },
      ],
    },
    {
      title: "حواجز ذات طبيعة مؤسساتية",
      icon: Shield,
      description: "عوائق متعلقة بالنظام والسياسات التعليمية",
      color: "bg-blue-50 border-blue-200",
      barriers: [
        {
          title: "جمود المناهج",
          description: "مناهج غير مرنة ولا تراعي التنوع",
          examples: [
            "محتوى موحد للجميع",
            "طرق تدريس واحدة",
            "تقييمات غير مناسبة",
            "غياب التكييفات",
          ],
        },
        {
          title: "نقص التكوين",
          description: "ضعف تأهيل المدرسين للتعامل مع التنوع",
          examples: [
            "غياب التكوين في التربية الدامجة",
            "عدم معرفة استراتيجيات الدعم",
            "قلة الموارد التعليمية",
          ],
        },
        {
          title: "غياب الأدوات",
          description: "نقص الموارد والوسائل المساعدة",
          examples: [
            "عدم وجود أخصائيين",
            "قلة الموارد التعليمية",
            "غياب التقنيات المساعدة",
          ],
        },
      ],
    },
  ];

  const solutions = [
    {
      category: "حلول للحواجز المحيطة",
      icon: Building,
      solutions: [
        {
          title: "تحسين الولوجيات",
          description: "تكييف البنية التحتية لتكون في متناول الجميع",
          actions: [
            "توفير مصاعد ومنحدرات",
            "تكييف دورات المياه والفصول",
            "ضمان طرق آمنة ومتاحة",
            "توفير وسائل نقل مناسبة",
          ],
        },
        {
          title: "توفير الموارد",
          description: "ضمان توفر الوسائل والأدوات المساعدة",
          actions: [
            "توفير التقنيات المساعدة",
            "مواد تعليمية متكيفة",
            "أجهزة سمعية وبصرية",
            "أثاث مناسب ومريح",
          ],
        },
        {
          title: "تحسين المناخ",
          description: "خلق بيئة مدرسية داعمة ومتقبلة",
          actions: [
            "برامج توعية للزملاء",
            "أنشطة تعزيز التقبل",
            "محاربة التنمر",
            "تشجيع التعاون",
          ],
        },
      ],
    },
    {
      category: "حلول لحواجز الاتجاهات",
      icon: Users,
      solutions: [
        {
          title: "التوعية والتكوين",
          description: "تغيير التمثلات السلبية عبر المعرفة",
          actions: [
            "حملات توعية مستمرة",
            "ورشات حول الإعاقة",
            "دعوة خبراء وذوي تجربة",
            "عرض قصص نجاح",
          ],
        },
        {
          title: "الإعلام والتواصل",
          description: "استخدام وسائل الإعلام لتغيير الصور النمطية",
          actions: [
            "برامج إعلامية إيجابية",
            "مواد تواصلية مناسبة",
            "استخدام لغة إيجابية",
            "تسليط الضوء على القدرات",
          ],
        },
        {
          title: "المشاركة الفعلية",
          description: "إشراك الأطفال ذوي الإعاقة في الحياة المدرسية",
          actions: [
            "تمثيل في المجالس المدرسية",
            "مشاركة في الأنشطة",
            "قيادة المبادرات",
            "التعبير عن الرأي",
          ],
        },
      ],
    },
    {
      category: "حلول للحواجز المؤسساتية",
      icon: Shield,
      solutions: [
        {
          title: "تطوير المناهج",
          description: "جعل المناهج مرنة ودامجة",
          actions: [
            "إدماج مبادئ التصميم الشامل",
            "تكييف المحتوى والطرق",
            "تنويع أساليب التقييم",
            "إدراج موضوع التنوع",
          ],
        },
        {
          title: "تكوين المدرسين",
          description: "تأهيل الكادر التعليمي للتربية الدامجة",
          actions: [
            "برامج تكوين مستمرة",
            "دعم فني وتربوي",
            "تبادل الخبرات",
            "موارد تعليمية متخصصة",
          ],
        },
        {
          title: "توفير الدعم",
          description: "ضمان وجود الدعم اللازم للجميع",
          actions: [
            "أخصائيون داعمون",
            "دعم نفسي واجتماعي",
            "إرشاد تربوي",
            "شراكة مع الأسر",
          ],
        },
      ],
    },
  ];

  const practicalStrategies = [
    {
      title: "تكييف الوتيرة",
      description: "ضبط سرعة التعلم حسب قدرات كل طفل",
      steps: [
        "تقسيم الدروس إلى وحدات صغيرة",
        "منح وقت إضافي عند الحاجة",
        "استخدام مراجعات منتظمة",
        "تكييف الواجبات المنزلية",
      ],
    },
    {
      title: "اعتماد المشروع الفردي",
      description: "تطوير خطة تعليمية مخصصة لكل طفل",
      steps: [
        "تحديد نقاط القوة والضعف",
        "وضع أهداف واقعية",
        "اختيار استراتيجيات مناسبة",
        "تقييم منتظم وتعديل",
      ],
    },
    {
      title: "تفعيل أدوار المدير",
      description: "دور المدير كقائد للعملية الدامجة",
      steps: [
        "توفير الموارد اللازمة",
        "دعم المدرسين",
        "تنسيق الشراكات",
        "تقييم سيرورة الدمج",
      ],
    },
    {
      title: "تدبير صعوبات التعلم",
      description: "استراتيجيات عملية لمواجهة التحديات",
      steps: [
        "استخدام وسائل متعددة الحواس",
        "تبسيط المفاهيم الصعبة",
        "توفير أمثلة ملموسة",
        "التشجيع والمكافأة",
      ],
    },
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
            <li className="text-gray-600 font-arabic">
              الحواجز المانعة للتمدرس
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="gradient-primary text-white rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic">
              الحواجز المانعة للتمدرس
            </h1>
            <p className="text-xl mb-8 text-blue-50 leading-relaxed font-arabic max-w-4xl">
              تحديد الحواجز التي تعيق تمدرس الأطفال في وضعية إعاقة واقتراح حلول
              عملية للتغلب عليها، بناءً على الأدلة الرسمية للتربية الدامجة.
            </p>
          </div>
        </section>

        {/* Barriers Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            أنواع الحواجز المانعة
          </h2>
          <div className="space-y-8">
            {barrierCategories.map((category, index) => {
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
                        {category.title}
                      </h3>
                      <p className="text-gray-700 font-arabic leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {category.barriers.map((barrier, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg p-6 shadow-md"
                      >
                        <h4 className="text-lg font-bold mb-3 font-arabic text-gray-800">
                          {barrier.title}
                        </h4>
                        <p className="text-gray-600 font-arabic leading-relaxed mb-4">
                          {barrier.description}
                        </p>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm font-arabic text-gray-700 mb-2">
                            أمثلة:
                          </p>
                          <ul className="space-y-1">
                            {barrier.examples.map((example, j) => (
                              <li
                                key={j}
                                className="text-gray-600 font-arabic text-sm flex items-start space-x-reverse space-x-2"
                              >
                                <AlertTriangle className="h-3 w-3 text-red-500 mt-0.5 shrink-0" />
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Solutions Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            حلول عملية لرفع الحواجز
          </h2>
          <div className="space-y-8">
            {solutions.map((solutionCategory, index) => {
              const Icon = solutionCategory.icon;
              return (
                <div
                  key={index}
                  className="bg-linear-to-r from-green-50 to-blue-50 rounded-xl p-8"
                >
                  <div className="flex items-center space-x-reverse space-x-4 mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                      <Icon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold font-arabic text-gray-800">
                      {solutionCategory.category}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {solutionCategory.solutions.map((solution, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg p-6 shadow-md"
                      >
                        <h4 className="text-lg font-bold mb-3 font-arabic text-gray-800">
                          {solution.title}
                        </h4>
                        <p className="text-gray-600 font-arabic leading-relaxed mb-4">
                          {solution.description}
                        </p>
                        <div className="space-y-2">
                          {solution.actions.map((action, j) => (
                            <div
                              key={j}
                              className="flex items-start space-x-reverse space-x-2"
                            >
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                              <span className="text-gray-700 font-arabic text-sm">
                                {action}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Practical Strategies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            استراتيجيات عملية للمدرسين
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {practicalStrategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200"
              >
                <div className="flex items-center space-x-reverse space-x-3 mb-4">
                  <Lightbulb className="h-8 w-8 text-yellow-500" />
                  <h3 className="text-xl font-bold font-arabic text-gray-800">
                    {strategy.title}
                  </h3>
                </div>
                <p className="text-gray-600 font-arabic leading-relaxed mb-6">
                  {strategy.description}
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold font-arabic text-gray-800 mb-3">
                    الخطوات العملية:
                  </h4>
                  <ol className="space-y-2">
                    {strategy.steps.map((step, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-reverse space-x-2"
                      >
                        <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-gray-700 font-arabic text-sm">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gray-100 text-gray-900 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 font-arabic">
              هل أنت مستعد لإزالة الحواجز؟
            </h2>
            <p className="text-xl mb-8 text-blue-800 font-arabic leading-relaxed max-w-2xl mx-auto">
              استكشف دلائلنا المتخصصة للحصول على استراتيجيات وأدوات عملية لتحقيق
              بيئة تعليمية دامجة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/teachers-guide"
                className="button-primary bg-white text-primary hover:bg-gray-100
               inline-flex items-center justify-center gap-2"
              >
                <GraduationCap className="h-5 w-5" />
                <span>دليل المدرسين</span>
              </Link>

              <Link
                href="/families-guide"
                className="button-secondary border-2 border-white text-white
               hover:bg-white hover:text-primary
               inline-flex items-center justify-center gap-2"
              >
                <BookOpen className="h-5 w-5" />
                <span>دليل الأسر</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
