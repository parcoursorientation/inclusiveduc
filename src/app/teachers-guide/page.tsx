import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowLeft,
  GraduationCap,
  Users,
  Target,
  BookOpen,
  CheckCircle,
  Award,
  FileText,
  Clock,
  Star,
  Lightbulb,
  ChevronRight,
  Download,
} from "lucide-react";

export const metadata = {
  title: "دليل المدرسين",
  description:
    "دليل شامل لتطبيق التربية الدامجة: كفايات مهنية، أدوات، ونماذج قابلة للتحميل",
};

export default function TeachersGuide() {
  const professionalCompetencies = [
    {
      title: "الكفايات التربوية",
      description: "القدرة على تصميم وتنفيذ تعليم دامج لجميع التلاميذ",
      competencies: [
        "تخطيط وتنمية المناهج الدامجة",
        "استخدام استراتيجيات تدريس متنوعة",
        "تكييف المحتوى والطرق البيداغوجية",
        "تقويم التعلمات بشكل عادل",
      ],
    },
    {
      title: "الكفايات الاجتماعية",
      description: "القدرة على خلق بيئة صفية إيجابية ومتقبلة",
      competencies: [
        "إدارة الفصل بشكل دامج",
        "تعزيز التعاون بين التلاميذ",
        "التواصل الفعال مع الأسر",
        "التعامل مع التنوع والاختلاف",
      ],
    },
    {
      title: "الكفايات التنظيمية",
      description: "القدرة على تنظيم وتنسيق الموارد والدعم",
      competencies: [
        "تنظيم القسم الدامج",
        "التنسيق مع الأخصائيين",
        "استخدام الموارد المتاحة",
        "إدارة الوقت والأنشطة",
      ],
    },
    {
      title: "الكفايات التأملية",
      description: "القدرة على تقييم وتطوير الممارسات الصفية",
      competencies: [
        "تقييم الممارسات اليومية",
        "البحث عن حلول للمشاكل",
        "التطوير المهني المستمر",
        "التعلم من التجارب",
      ],
    },
  ];

  const teacherRoles = [
    {
      title: "مصمم التعلمات",
      description: "تخطيط وتكييف التعليمات حسب احتياجات كل تلميذ",
      tasks: [
        "تحليل احتياجات التلاميذ",
        "تصميم أنشطة متكيفة",
        "اختيار استراتيجيات مناسبة",
        "إعداد مواد تعليمية متنوعة",
      ],
    },
    {
      title: "منسق الدعم",
      description: "تنظيم وتنسيق الدعم اللازم لنجاح الجميع",
      tasks: [
        "التنسيق مع الأخصائيين",
        "تنظيم الدعم الفردي",
        "إدارة مجموعات الدعم",
        "تتبع تطور التلاميذ",
      ],
    },
    {
      title: "ميسر التعلم",
      description: "خلق بيئة تشجع على التعلم والمشاركة",
      tasks: [
        "إدارة الحياة الصفية",
        "تحفيز التلاميذ",
        "خلق جو إيجابي",
        "دعم التفاعل الاجتماعي",
      ],
    },
    {
      title: "مقيم التقدم",
      description: "تقييم وتتبع تعلم كل تلميذ بشكل عادل",
      tasks: [
        "تقييم منتظم وشامل",
        "استخدام طرق تقييم متنوعة",
        "تحليل النتائج",
        "تكييف التقييم حسب الحاجة",
      ],
    },
  ];

  const classroomOrganization = [
    {
      title: "التنظيم الفيزيائي",
      description: "ترتيب الفصل لدعم التعلم الدامج",
      elements: [
        "توزيع مرن للطاولات",
        "مساحات عمل متنوعة",
        "توفير وسائل مساعدة",
        "إمكانية الوصول للجميع",
      ],
    },
    {
      title: "التنظيم الزمني",
      description: "إدارة الوقت لدعم احتياجات الجميع",
      elements: [
        "جدول زمني مرن",
        "فترات راحة كافية",
        "وقت للدعم الفردي",
        "أنشطة اختيارية",
      ],
    },
    {
      title: "التنظيم البيداغوجي",
      description: "تنظيم الأنشطة والتعلمات",
      elements: [
        "مجموعات عمل متنوعة",
        "أنشطة فردية وجماعية",
        "دورات تعلم متكيفة",
        "مراكز تعلم متعددة",
      ],
    },
    {
      title: "التنظيم الاجتماعي",
      description: "خلق علاقات إيجابية في الفصل",
      elements: [
        "قواعد سلوك واضحة",
        "فرص للقيادة",
        "التعاون بين التلاميذ",
        "دعم الأقران",
      ],
    },
  ];

  const individualProjectStructure = {
    title: "المشروع البيداغوجي الفردي (PPI)",
    description: "خطة تعليمية مخصصة لكل طفل في وضعية إعاقة",
    sections: [
      {
        title: "البيانات الشخصية",
        content: "معلومات أساسية عن الطفل ووضعيته",
      },
      {
        title: "التشخيص",
        content: "تحديد نقاط القوة والصعوبات والاحتياجات",
      },
      {
        title: "الأهداف",
        content: "أهداف تعليمية واقعية وقابلة للقياس",
      },
      {
        title: "الاستراتيجيات",
        content: "طرق وأساليب تحقيق الأهداف",
      },
      {
        title: "الموارد",
        content: "الموارد البشرية والمادية اللازمة",
      },
      {
        title: "التقييم",
        content: "طرق تتبع وتقييم التقدم",
      },
    ],
  };

  const lessonPlanning = [
    {
      phase: "التحضير",
      description: "التخطيط المسبق للحصة",
      steps: [
        "تحديد أهداف التعلم",
        "معرفة احتياجات التلاميذ",
        "اختيار الاستراتيجيات",
        "إعداد المواد اللازمة",
      ],
    },
    {
      phase: "التنفيذ",
      description: "تقديم الحصة بشكل دامج",
      steps: [
        "استخدام وسائل متعددة",
        "تنويع طرق الشرح",
        "إدارة المشاركة",
        "توفير الدعم الفردي",
      ],
    },
    {
      phase: "التقييم",
      description: "تقييم تعلمات التلاميذ",
      steps: [
        "ملاحظة المشاركة",
        "استخدام أسئلة متنوعة",
        "تقييم الأعمال",
        "جمع التغذية الراجعة",
      ],
    },
    {
      phase: "التكييف",
      description: "تعديل الحصة حسب الحاجة",
      steps: [
        "تحليل الصعوبات",
        "تعديل الاستراتيجيات",
        "توفير دعم إضافي",
        "تخطيط للتحسين",
      ],
    },
  ];

  const managingDifficulties = [
    {
      difficulty: "صعوبات الانتباه",
      strategies: [
        "استخدام تعليمات قصيرة وواضحة",
        "توفير بيئة هادئة",
        "استخدام حوافز بصرية",
        "فترات عمل قصيرة",
      ],
    },
    {
      difficulty: "صعوبات الفهم",
      strategies: [
        "استخدام أمثلة ملموسة",
        "تبسيط المفاهيم",
        "الربط بالخبرات السابقة",
        "استخدام الوسائل البصرية",
      ],
    },
    {
      difficulty: "صعوبات التعبير",
      strategies: [
        "توفير وقت إضافي",
        "قبول أشكال متعددة للتعبير",
        "استخدام الرسوم والصور",
        "التشجيع والمكافأة",
      ],
    },
    {
      difficulty: "صعوبات اجتماعية",
      strategies: [
        "توفير فرص للتعاون",
        "تعليم المهارات الاجتماعية",
        "استخدام مجموعات صغيرة",
        "دعم التفاعل الإيجابي",
      ],
    },
  ];

  const evaluationMethods = [
    {
      type: "التقييم التكويني",
      description: "تقييم مستمر أثناء عملية التعلم",
      tools: [
        "الملاحظة الصفية",
        "الأعمال اليومية",
        "المناقشات",
        "التمارين القصيرة",
      ],
    },
    {
      type: "التقييم الإجمالي",
      description: "تقييم نهائي لوحدة التعلم",
      tools: ["الاختبارات", "المشاريع", "العروض", "البورتفوليو"],
    },
    {
      type: "التقييم الذاتي",
      description: "تقييم التلميذ لتعلماته",
      tools: [
        "السجل الذاتي",
        "المناقشة الذاتية",
        "تقييم الأقران",
        "خطة التعلم الشخصية",
      ],
    },
    {
      type: "التقييم الشامل",
      description: "تقييم جميع جوانب التطور",
      tools: [
        "تقرير التقدم",
        "الملاحظات المتعددة",
        "آراء الأخصائيين",
        "ملاحظات الأسر",
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
            <li className="text-gray-600 font-arabic">دليل المدرسين</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="gradient-primary text-white rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic">
              دليل المدرسين
            </h1>
            <p className="text-xl mb-8 text-blue-50 leading-relaxed font-arabic max-w-4xl">
              دليل شامل للمدرسين الراغبين في تطبيق التربية الدامجة. يحتوي على
              الكفايات المهنية، الاستراتيجيات العملية، والأدوات اللازمة لنجاح
              جميع التلاميذ في بيئة تعليمية متكاملة.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Award className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">الكفايات المهنية</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Target className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">أدوار المدرس</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <FileText className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">المشروع الفردي</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">تخطيط الحصص</div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Competencies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            الكفايات المهنية للمدرس الدامج
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {professionalCompetencies.map((competency, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200"
              >
                <h3 className="text-xl font-bold mb-4 font-arabic text-gray-800">
                  {competency.title}
                </h3>
                <p className="text-gray-600 font-arabic leading-relaxed mb-6">
                  {competency.description}
                </p>
                <ul className="space-y-3">
                  {competency.competencies.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-reverse space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700 font-arabic">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Teacher Roles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            أدوار المدرس الدامج
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teacherRoles.map((role, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-blue-50 to-green-50 rounded-xl p-8"
              >
                <div className="flex items-center space-x-reverse space-x-3 mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-bold font-arabic text-gray-800">
                    {role.title}
                  </h3>
                </div>
                <p className="text-gray-600 font-arabic leading-relaxed mb-6">
                  {role.description}
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold font-arabic text-gray-800 mb-3">
                    المهام الرئيسية:
                  </h4>
                  <ul className="space-y-2">
                    {role.tasks.map((task, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-reverse space-x-2"
                      >
                        <ChevronRight className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700 font-arabic text-sm">
                          {task}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Classroom Organization */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            تنظيم القسم الدامج
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classroomOrganization.map((org, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold mb-3 font-arabic text-gray-800">
                  {org.title}
                </h3>
                <p className="text-gray-600 font-arabic leading-relaxed mb-4 text-sm">
                  {org.description}
                </p>
                <ul className="space-y-2">
                  {org.elements.map((element, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-reverse space-x-2"
                    >
                      <Star className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700 font-arabic text-xs">
                        {element}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Individual Project */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            المشروع البيداغوجي الفردي (PPI)
          </h2>
          <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 font-arabic text-gray-800">
                  {individualProjectStructure.title}
                </h3>
                <p className="text-gray-700 font-arabic leading-relaxed mb-6">
                  {individualProjectStructure.description}
                </p>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold font-arabic text-gray-800 mb-4">
                    أهمية المشروع الفردي:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-reverse space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700 font-arabic">
                        تخصيص التعليم حسب احتياجات الطفل
                      </span>
                    </li>
                    <li className="flex items-start space-x-reverse space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700 font-arabic">
                        تنسيق الجهود بين جميع الفاعلين
                      </span>
                    </li>
                    <li className="flex items-start space-x-reverse space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700 font-arabic">
                        تتبع التقدم وتقييم النتائج
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold font-arabic text-gray-800 mb-4">
                  مكونات المشروع:
                </h4>
                <div className="space-y-3">
                  {individualProjectStructure.sections.map((section, index) => (
                    <div key={index} className="bg-white rounded-lg p-4">
                      <div className="flex items-start space-x-reverse space-x-3">
                        <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                          {index + 1}
                        </span>
                        <div>
                          <h5 className="font-bold font-arabic text-gray-800">
                            {section.title}
                          </h5>
                          <p className="text-gray-600 font-arabic text-sm mt-1">
                            {section.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lesson Planning */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            تخطيط الحصص الدامجة
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {lessonPlanning.map((phase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200"
              >
                <div className="flex items-center space-x-reverse space-x-3 mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-bold font-arabic text-gray-800">
                    {phase.phase}
                  </h3>
                </div>
                <p className="text-gray-600 font-arabic leading-relaxed mb-6">
                  {phase.description}
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold font-arabic text-gray-800 mb-3">
                    الخطوات:
                  </h4>
                  <ol className="space-y-2">
                    {phase.steps.map((step, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-reverse space-x-2"
                      >
                        <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
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

        {/* Managing Difficulties */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            تدبير صعوبات التعلم
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {managingDifficulties.map((difficulty, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-orange-50 to-red-50 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold mb-4 font-arabic text-gray-800">
                  {difficulty.difficulty}
                </h3>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold font-arabic text-gray-800 mb-3">
                    استراتيجيات الدعم:
                  </h4>
                  <ul className="space-y-2">
                    {difficulty.strategies.map((strategy, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-reverse space-x-2"
                      >
                        <Lightbulb className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700 font-arabic text-sm">
                          {strategy}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Evaluation Methods */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            تقويم سيرورة الدمج
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {evaluationMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4 font-arabic text-gray-800">
                  {method.type}
                </h3>
                <p className="text-gray-600 font-arabic leading-relaxed mb-6">
                  {method.description}
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold font-arabic text-gray-800 mb-3">
                    الأدوات:
                  </h4>
                  <ul className="space-y-2">
                    {method.tools.map((tool, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-reverse space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-gray-700 font-arabic text-sm">
                          {tool}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Download Section */}
        <section className="mb-16">
          <div className="bg-linear-to-r from-primary to-secondary text-gray-800 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 font-arabic">
              نماذج جاهزة للتحميل
            </h2>
            <p className="text-xl mb-8 text-gray-800 font-arabic leading-relaxed max-w-2xl mx-auto">
              حمّل نماذج عملية للمشروع البيداغوجي الفردي واستمارات التتبع
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <button className="bg-primary text-gray-800 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-white/70 rounded-lg p-6 transition-colors duration-200 shadow">
                <Download className="h-8 w-8 mx-auto mb-3 text-gray-800" />
                <div className="font-bold font-arabic">نموذج PPI</div>
                <div className="text-sm font-arabic mt-2 text-gray-800/90">
                  مشروع بيداغوجي فردي
                </div>
              </button>
              <button className="bg-primary text-gray-800 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-white/70 rounded-lg p-6 transition-colors duration-200 shadow">
                <Download className="h-8 w-8 mx-auto mb-3 text-gray-800" />
                <div className="font-bold font-arabic">استمارة تتبع</div>
                <div className="text-sm font-arabic mt-2 text-gray-800/90">
                  تتبع التقدم الأسبوعي
                </div>
              </button>
              <button className="bg-primary text-gray-800 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-white/70 rounded-lg p-6 transition-colors duration-200 shadow">
                <Download className="h-8 w-8 mx-auto mb-3 text-gray-800" />
                <div className="font-bold font-arabic">دليل التقييم</div>
                <div className="text-sm font-arabic mt-2 text-gray-800/90">
                  طرق وأدوات التقييم
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gray-100 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 font-arabic text-gray-800">
              هل تحتاج إلى المزيد من الدعم؟
            </h2>
            <p className="text-xl mb-8 text-gray-600 font-arabic leading-relaxed max-w-2xl mx-auto">
              استكشف مواردنا المتخصصة واحصل على الدعم اللازم لتطبيق التربية
              الدامجة بنجاح
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources"
                className="button-primary bg-white text-primary hover:bg-gray-100
               inline-flex items-center justify-center gap-2"
              >
                <FileText className="h-5 w-5" />
                <span>موارد إضافية</span>
              </Link>

              <Link
                href="/families-guide"
                className="button-secondary border-2 border-white text-white
               hover:bg-white hover:text-primary
               inline-flex items-center justify-center gap-2"
              >
                <Users className="h-5 w-5" />
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
