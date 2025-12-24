import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowLeft,
  Scale,
  BookOpen,
  Globe,
  CheckCircle,
  FileText,
  Download,
  Star,
  Award,
  Shield,
  Users,
  Target,
} from "lucide-react";

export default function Legislation() {
  const nationalFramework = {
    title: "الإطار المرجعي للتربية الدامجة 2019",
    description:
      "الوثيقة المرجعية الرسمية التي تحدد المبادئ والأسس المنهجية للتربية الدامجة في المغرب",
    principles: [
      {
        title: "مبدأ الحق في التعليم",
        description: "التعليم حق أساسي لجميع الأطفال دون تمييز",
        articles: [
          "المادة 28 من اتفاقية حقوق الطفل",
          "المادة 24 من اتفاقية حقوق الأشخاص ذوي الإعاقة",
          "المادة 31 من الدستور المغربي",
        ],
      },
      {
        title: "مبدأ الإدماج",
        description: "ضمان مشاركة جميع الأطفال في النظام التعليمي",
        articles: [
          "سياسة إدماج الطفولة في وضعية صعوبة",
          "الميثاق الوطني للتربية والتكوين",
          "الرؤية الاستراتيجية 2015-2030",
        ],
      },
      {
        title: "مبدأ التكيف",
        description: "تكييف البيئة التعليمية لتناسب جميع المتعلمين",
        articles: [
          "تكييف المناهج والبرامج",
          "توفير الولوجيات والوسائل المساعدة",
          "تكوين الكادر التعليمي",
        ],
      },
      {
        title: "مبدأ الشراكة",
        description: "التعاون بين جميع الفاعلين لضمان نجاح الدمج",
        articles: [
          "شراكة وزارة التربية مع القطاعات الحكومية",
          "تعاون مع الجمعيات والمجتمع المدني",
          "إشراك الأسر في العملية التعليمية",
        ],
      },
    ],
  };

  const internationalConventions = [
    {
      title: "اتفاقية حقوق الطفل (1989)",
      description: "الإطار الدولي لحماية حقوق جميع الأطفال",
      keyArticles: [
        {
          article: "المادة 2",
          content: "مبدأ عدم التمييز - يجب احترام حقوق جميع الأطفال دون تمييز",
        },
        {
          article: "المادة 23",
          content: "الطفل ذو الإعاقة - الحق في التعليم والتدريب وخدمات الرعاية",
        },
        {
          article: "المادة 28",
          content:
            "الحق في التعليم - إتاحة التعليم للجميع على أساس تكافؤ الفرص",
        },
        {
          article: "المادة 29",
          content:
            "أهداف التعليم - تنمية شخصية الطفل ومواهبه واحترام حقوق الإنسان",
        },
      ],
    },
    {
      title: "اتفاقية حقوق الأشخاص ذوي الإعاقة (2006)",
      description: "الإطار العالمي لحقوق الأشخاص ذوي الإعاقة",
      keyArticles: [
        {
          article: "المادة 3",
          content:
            "المبادئ العامة - الكرامة والاستقلالية وعدم التمييز والمشاركة الكاملة",
        },
        {
          article: "المادة 5",
          content: "المساواة وعدم التمييز - اتخاذ تدابير مناسبة لضمان المساواة",
        },
        {
          article: "المادة 7",
          content:
            "الأطفال ذوو الإعاقة - اتخاذ تدابير لضمان تمتعهم بالحقوق على قدم المساواة",
        },
        {
          article: "المادة 24",
          content:
            "التعليم - ضمان حق الأشخاص ذوي الإعاقة في التعليم الدامج على جميع المستويات",
        },
      ],
    },
    {
      title: "إعلان سالامانكا (1994)",
      description: "إطار عمل عالمي للتربية الخاصة والدمج",
      principles: [
        "التربية للجميع",
        "المدارس للجميع",
        "الإدماج كاستراتيجية",
        "دعم التلاميذ ذوي الاحتياجات الخاصة",
      ],
    },
  ];

  const nationalLaws = [
    {
      title: "الدستور المغربي 2011",
      description: "الأساس الدستوري لحقوق الأشخاص ذوي الإعاقة",
      articles: [
        {
          number: "المادة 31",
          content:
            "تضمن الدولة للمواطنين والمواطنات الحق في التعليم والصحة وحماية الصحة الاجتماعية",
        },
        {
          number: "المادة 34",
          content: "تعمل الدولة على تحقيق مبدأ المساواة بين الرجل والمرأة",
        },
        {
          number: "المادة 134",
          content: "تؤسس للمجلس الاستشاري للأسرة والطفولة",
        },
      ],
    },
    {
      title: "قانون إدماج الأشخاص ذوي الإعاقة",
      description: "الإطار القانوني الوطني لحماية حقوق الأشخاص ذوي الإعاقة",
      provisions: [
        "تعريف الإعاقة والشخص ذوي الإعاقة",
        "الحقوق الأساسية في التعليم والعمل والمشاركة",
        "التزامات الدولة والمجتمع",
        "آليات الحماية والإنفاذ",
      ],
    },
    {
      title: "الميثاق الوطني للتربية والتكوين",
      description: "الإطار المرجعي لإصلاح المنظومة التعليمية",
      chapters: [
        "مبادئ التربية والتعليم",
        "أهداف المنظومة التعليمية",
        "هيكلة المنظومة",
        "آليات التطوير والتقييم",
      ],
    },
    {
      title: "قرار لوزير التربية الوطنية رقم 047_19",
      description:
        "قرار بشأن التربية الدامجة للتلميذات والتلاميذ في وضعية إعاقة ",
      chapters: [
        "الباب الأول: الإطار القانوني والتنظيمي العام",
        "الباب الثاني: الأهداف والمهام",
        "الباب الثالث: مجالات التدخل والمسؤوليات",
        "الباب الرابع: حقوق وواجبات الأطراف المعنية",
        "الباب الخامس: الإجراءات الإدارية والتربوية",
        "الباب السادس: آليات التتبع والتقويم",
        "نماذج ومحاضر جاهزة للاستعمال",
      ],
    },
  ];

  const ministerialNotes = [
    {
      title: "مذكرة وزارة التربية الوطنية رقم 150",
      date: "2019",
      subject: "تطبيق الإطار المرجعي للتربية الدامجة",
      objectives: [
        "تعميم مبدأ التربية الدامجة",
        "تأهيل المؤسسات التعليمية",
        "تكوين الكادر التعليمي",
        "توفير الموارد اللازمة",
      ],
    },
    {
      title: "مذكرة حول إدماج الطفولة في وضعية صعوبة",
      date: "2015",
      subject: "آليات إدماج الأطفال ذوي الإعاقة",
      mechanisms: [
        "تحديد الاحتياجات",
        "وضع برامج تربوية فردية",
        "توفير الدعم التربوي",
        "تتبع وتقييم الإدماج",
      ],
    },
    {
      title: "دليل عمليات الإدماج",
      date: "2018",
      subject: "الإجراءات العملية للإدماج المدرسي",
      procedures: [
        "التسجيل والقبول",
        "التقييم والتشخيص",
        "وضع خطة الدعم",
        "المتابعة والتقييم",
      ],
    },
  ];

  const universalDesignLearning = {
    title: "التصميم الشامل للتعلم (UDL)",
    description: "إطار عمل لتصميم تعليم يصلح للجميع",
    principles: [
      {
        title: "مبدأ الوسائل المتعددة",
        description: "تقديم المعلومات بطرق متعددة",
        applications: [
          "استخدام النصوص والصور والأصوات",
          "توفير مواد في صيغ مختلفة",
          "استخدام التقنيات المساعدة",
          "تنويع طرق الشرح",
        ],
      },
      {
        title: "مبدأ الإجراءات المتعددة",
        description: "توفير طرق متعددة للتعبير والممارسة",
        applications: [
          "تنويع طرق التقييم",
          "استخدام وسائل تعبير مختلفة",
          "توفير خيارات متعددة للمشاركة",
          "دعم المهارات المختلفة",
        ],
      },
      {
        title: "مبدأ الدافعية المتعددة",
        description: "تحفيز الاهتمام والمشاركة",
        applications: [
          "ربط التعلم باهتمامات المتعلم",
          "توفير خيارات وتحكم",
          "تعزيز الثقة بالنفس",
          "خلق بيئة داعمة",
        ],
      },
    ],
  };

  const implementationGuide = {
    title: "دليل التطبيق العملي",
    description: "خطوات عملية لتطبيق التشريعات على أرض الواقع",
    steps: [
      {
        step: "التشخيص",
        description: "تقييم الوضع الحالي",
        actions: [
          "تحليل البنية التحتية",
          "تقييم الكفاءات",
          "تحديد الاحتياجات",
          "دراسة الحواجز",
        ],
      },
      {
        step: "التخطيط",
        description: "وضع خطة عمل",
        actions: [
          "تحديد الأهداف",
          "اختيار الاستراتيجيات",
          "تخصيص الموارد",
          "جدولة الأنشطة",
        ],
      },
      {
        step: "التنفيذ",
        description: "تطبيق الخطة",
        actions: [
          "تكوين الفرق",
          "تنفيذ الأنشطة",
          "توفير الدعم",
          "مراقبة الجودة",
        ],
      },
      {
        step: "التقييم",
        description: "قياس النتائج",
        actions: [
          "جمع البيانات",
          "تحليل النتائج",
          "إعداد التقارير",
          "التخطيط للتحسين",
        ],
      },
    ],
  };

  const currentChallenges = [
    "ضعف تعميم التربية الدامجة على صعيد المؤسسات والأقسام، مع محدودية عدد الأقسام الدامجة مقارنة بالحاجيات الفعلية",
    "نقص الولوجيات والبنيات التحتية الملائمة في عدد من المؤسسات التعليمية وضعف تكييف الفضاءات والوسائل الداعمة",
    "خصاص في الوسائل التعليمية المعوضة والأجهزة التعويضية والدعامات التقنية وخدمات الدعم الوظيفي",
    "قصور في التكوين الأساس والمستمر للأطر التربوية والإدارية حول مفاهيم الدمج، التصميم الشامل للتعلم، والتدبير المستند على المعطيات",
    "ضعف التنسيق البَيْقطَاعي واستدامة الشراكات مع الفاعلين الصحيين، الاجتماعيين، والجمعويين، مما يحد من التدخل المتعدد التخصصات",
    "صعوبات في التشخيص المبكر وتتبع الحالات ووضع مشاريع تربوية فردية فعّالة (PPI) وآليات مراقبة وتقييم واضحة",
    "محدودية الموارد المالية والبشرية المخصصة للدمج على المستوى المحلي وصعوبة تدبيرها بكفاءة وشفافية",
    "تمثلات سلبية وممارسات إقصائية في بعض البيئات المدرسية تعيق المشاركة الكاملة وتحد من قبول التنوع",
    "غياب قاعدة بيانات موحدة ومؤشرات قياس منتظمة لنتائج الدمج على التعلم، المشاركة والإنصاف",
  ];

  const highCouncilRecommendations = [
    "ترسيخ حق جميع الأطفال، بمن فيهم ذوو الإعاقة أو في وضعيات صعبة، في تعليم دامج ذي جودة وعلى جميع المستويات والمسارات",
    "الانتقال من المقاربات العلاجية/الانتقائية إلى مقاربة دامجة شاملة قائمة على إزالة الحواجز وتمكين المتعلمين وفق مبادئ التصميم الشامل للتعلم",
    "إرساء مسارات مبكرة للكشف والتدخل المبكر والتتبع، مع دعم متعدد التخصصات (تربوي، نفسي، اجتماعي، صحي) داخل المدرسة وبالاستناد إلى شراكات محلية",
    "تعميم إرساء المشاريع التربوية الفردية (PPI) وخطط الدعم الفردي مع إشراك الأسرة والطفل في التخطيط واتخاذ القرار",
    "تنويع أساليب التقويم والدعم التربوي وملاءمة المناهج والطرائق ووسائل التعلم وتوفير تعددية الوسائط",
    "تأهيل الفضاء المدرسي والولوجيات وتوفير الأجهزة التعويضية والموارد الرقمية المساعدة",
    "تكوين الأساتذة والأطر الإدارية تكوينا أوليا ومستمرا في التربية الدامجة، وإدماج كفايات UDL وإدارة التنوع ضمن مراجع التكوين",
    "تعزيز الحكامة والتمويل القائم على النتائج، وتوضيح الأدوار والمسؤوليات على المستويات المركزية والجهوية والمحلية",
    "إرساء منظومة للرصد والتتبع والتقويم بمؤشرات واضحة وقاعدة بيانات وطنية موحدة حول الدمج التعليمي",
    "تحسيس المجتمع المدرسي والأسر ومكونات المجتمع المدني لمحاربة الوصم وترسيخ ثقافة القبول والإنصاف",
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
            <li className="text-gray-600 font-arabic">التشريعات الوطنية</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="gradient-primary text-white rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic">
              التشريعات الوطنية والمرجعيات
            </h1>
            <p className="text-xl mb-8 text-blue-50 leading-relaxed font-arabic max-w-4xl">
              الإطار القانوني والحقوقي للتربية الدامجة في المغرب. استعراض شامل
              للاتفاقيات الدولية، القوانين الوطنية، والمبادئ التوجيهية التي تحكم
              حق الأطفال ذوي الإعاقة في التعليم.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Scale className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">الإطار القانوني</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Globe className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">اتفاقيات دولية</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">مذكرات وزارية</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">التصميم الشامل</div>
              </div>
            </div>
          </div>
        </section>

        {/* National Framework */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            الإطار المرجعي للتربية الدامجة 2019
          </h2>
          <div className="bg-linear-to-br from-blue-50 to-green-50 rounded-xl p-8">
            <p className="text-lg text-gray-700 font-arabic leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              {nationalFramework.description}
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {nationalFramework.principles.map((principle, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-3 font-arabic text-gray-800">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 font-arabic leading-relaxed mb-4">
                    {principle.description}
                  </p>
                  <div className="space-y-2">
                    {principle.articles.map((article, i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-reverse space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-gray-700 font-arabic text-sm">
                          {article}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* International Conventions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            الاتفاقيات الدولية
          </h2>
          <div className="space-y-8">
            {internationalConventions.map((convention, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200"
              >
                <h3 className="text-2xl font-bold mb-4 font-arabic text-gray-800">
                  {convention.title}
                </h3>
                <p className="text-gray-600 font-arabic leading-relaxed mb-6">
                  {convention.description}
                </p>

                {convention.keyArticles ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {convention.keyArticles.map((article, i) => (
                      <div key={i} className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-bold font-arabic text-gray-800 mb-2">
                          {article.article}
                        </h4>
                        <p className="text-gray-700 font-arabic text-sm leading-relaxed">
                          {article.content}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4">
                    {convention.principles?.map((principle, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-reverse space-x-3 bg-green-50 rounded-lg p-4"
                      >
                        <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                        <span className="text-gray-700 font-arabic">
                          {principle}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* National Laws */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            القوانين الوطنية
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {nationalLaws.map((law, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center space-x-reverse space-x-3 mb-4">
                  <Scale className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-bold font-arabic text-gray-800">
                    {law.title}
                  </h3>
                </div>
                <p className="text-gray-600 font-arabic leading-relaxed mb-6">
                  {law.description}
                </p>

                {law.articles && (
                  <div className="space-y-3">
                    {law.articles.map((article, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-bold font-arabic text-gray-800 mb-1">
                          {article.number}
                        </h4>
                        <p className="text-gray-700 font-arabic text-sm leading-relaxed">
                          {article.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {law.provisions && (
                  <div className="space-y-2">
                    {law.provisions.map((provision, i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-reverse space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-gray-700 font-arabic text-sm">
                          {provision}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {law.chapters && (
                  <div className="space-y-2">
                    {law.chapters.map((chapter, i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-reverse space-x-2"
                      >
                        <Star className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700 font-arabic text-sm">
                          {chapter}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Ministerial Notes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            المذكرات الوزارية
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {ministerialNotes.map((note, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-purple-50 to-pink-50 rounded-xl p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold font-arabic text-gray-800">
                    {note.title}
                  </h3>
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-arabic">
                    {note.date}
                  </span>
                </div>
                <p className="text-gray-600 font-arabic leading-relaxed mb-6">
                  {note.subject}
                </p>

                {note.objectives && (
                  <div className="mb-4">
                    <h4 className="font-bold font-arabic text-gray-800 mb-3">
                      الأهداف:
                    </h4>
                    <ul className="space-y-2">
                      {note.objectives.map((objective, i) => (
                        <li
                          key={i}
                          className="flex items-start space-x-reverse space-x-2"
                        >
                          <Target className="h-4 w-4 text-purple-600 mt-0.5 shrink-0" />
                          <span className="text-gray-700 font-arabic text-sm">
                            {objective}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {note.mechanisms && (
                  <div>
                    <h4 className="font-bold font-arabic text-gray-800 mb-3">
                      الآليات:
                    </h4>
                    <ul className="space-y-2">
                      {note.mechanisms.map((mechanism, i) => (
                        <li
                          key={i}
                          className="flex items-start space-x-reverse space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          <span className="text-gray-700 font-arabic text-sm">
                            {mechanism}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Universal Design for Learning */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            التصميم الشامل للتعلم (UDL)
          </h2>
          <div className="bg-linear-to-r from-orange-50 to-red-50 rounded-xl p-8">
            <p className="text-lg text-gray-700 font-arabic leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              {universalDesignLearning.description}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {universalDesignLearning.principles.map((principle, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-3 font-arabic text-gray-800">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 font-arabic leading-relaxed mb-4">
                    {principle.description}
                  </p>
                  <div className="space-y-2">
                    {principle.applications.map((application, i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-reverse space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 shrink-0" />
                        <span className="text-gray-700 font-arabic text-sm">
                          {application}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            دليل التطبيق العملي
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 font-arabic leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              {implementationGuide.description}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {implementationGuide.steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-linear-to-br from-blue-50 to-green-50 rounded-lg p-6"
                >
                  <div className="flex items-center space-x-reverse space-x-3 mb-4">
                    <div className="w-10 h-10 bg-linear-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold font-arabic text-gray-800">
                      {step.step}
                    </h3>
                  </div>
                  <p className="text-gray-600 font-arabic leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.actions.map((action, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-reverse space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-gray-700 font-arabic text-sm">
                          {action}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            التحديات الراهنة للتربية الدامجة
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <ul className="space-y-3">
              {currentChallenges.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-reverse space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700 font-arabic leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            توصيات المجلس الأعلى للتربية والتكوين والبحث العلمي
          </h2>
          <div className="bg-linear-to-br from-blue-50 to-green-50 rounded-xl p-8">
            <p className="text-lg text-gray-700 font-arabic leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              خلاصة عملية لأهم التدابير المقترحة لتسريع الانتقال نحو مدرسة دامجة
              للجميع.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {highCouncilRecommendations.map((rec, i) => (
                <div key={i} className="bg-white rounded-lg p-5 shadow">
                  <div className="flex items-start space-x-reverse space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-gray-800 font-arabic text-sm leading-relaxed">
                      {rec}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="mb-16">
          <div className="bg-linear-to-r from-primary to-secondary text-gray-800 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 font-arabic">
              حمل الوثائق الرسمية
            </h2>
            <p className="text-xl mb-8 text-gray-800 font-arabic leading-relaxed max-w-2xl mx-auto">
              احصل على نسخ PDF من جميع التشريعات والمرجعيات الرئيسية
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a
                href="https://www.unicef.org/morocco/media/1866/file/%D8%A7%D9%84%D8%A5%D8%B7%D8%A7%D8%B1%20%D8%A7%D9%84%D9%85%D8%B1%D8%AC%D8%B9%D9%8A%20%D9%84%D9%84%D8%AA%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AF%D8%A7%D9%85%D8%AC%D8%A9%20%D9%84%D9%81%D8%A7%D8%A6%D8%AF%D8%A9%20%D8%A7%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84%20%D9%81%DB%8C%20%D9%88%D8%B6%D8%B9%D9%8A%D8%A9%20%D8%A5%D8%B9%D8%A7%D9%82%D8%A9-2019.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary hover:bg-gray-100 rounded-lg p-6 transition-colors duration-200 block"
              >
                <Download className="h-8 w-8 mx-auto mb-3" />
                <div className="font-bold font-arabic">الإطار المرجعي</div>
                <div className="text-sm font-arabic mt-2">PDF • 1.4 MB</div>
              </a>
              <button className="bg-white text-primary hover:bg-gray-100 rounded-lg p-6 transition-colors duration-200">
                <Download className="h-8 w-8 mx-auto mb-3" />
                <div className="font-bold font-arabic">المذكرات الوزارية</div>
                <div className="text-sm font-arabic mt-2">PDF • 5.2 MB</div>
              </button>
              <button className="bg-white text-primary hover:bg-gray-100 rounded-lg p-6 transition-colors duration-200">
                <Download className="h-8 w-8 mx-auto mb-3" />
                <div className="font-bold font-arabic">دليل UDL</div>
                <div className="text-sm font-arabic mt-2">PDF • 3.8 MB</div>
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gray-100 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 font-arabic text-gray-800">
              هل تحتاج إلى مساعدة قانونية؟
            </h2>
            <p className="text-xl mb-8 text-gray-600 font-arabic leading-relaxed max-w-2xl mx-auto">
              فريقنا متخصص في تقديم الدعم القانوني والاستشارات حول تطبيق
              التشريعات
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="button-primary">
                استشارة قانونية
              </Link>
              <Link href="/faq" className="button-secondary">
                أسئلة قانونية
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
