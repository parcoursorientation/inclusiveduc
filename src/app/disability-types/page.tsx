"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Brain,
  Eye,
  Ear,
  Accessibility,
  BookOpen,
  ChevronRight,
  Heart,
  AlertCircle,
  GraduationCap,
} from "lucide-react";

export default function DisabilityTypes() {
  const disabilityTypes = [
    {
      title: "القصور الحركي",
      icon: Accessibility,
      description: "صعوبات في الحركة والتنقل والقيام بالأنشطة الجسدية",
      characteristics: [
        "صعوبة في المشي أو الحركة",
        "مشاكل في التوازن والتنسيق",
        "ضعف العضلات أو تشنجات",
        "الحاجة إلى أجهزة مساعدة",
      ],
      learningStyle:
        "تعتمد على الوسائل البصرية والسمعية، مع تكييف المكان والأنشطة",
      teacherSupport: [
        "تأمين مكان دراسي مناسب",
        "استخدام أجهزة مساعدة",
        "تكييف الأنشطة البدنية",
        "منح وقت إضافي للحركة",
      ],
      familySupport: [
        "التعاون مع الأخصائيين",
        "توفير بيئة منزلية آمنة",
        "تشجيع الاستقلالية",
        "الدعم النفسي والاجتماعي",
      ],
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "القصور السمعي",
      icon: Ear,
      description: "ضعف أو فقدان السمع الذي يؤثر على استقبال المعلومات السمعية",
      characteristics: [
        "صعوبة في سماع الأصوات",
        "تأخر في تطور اللغة",
        "صعوبة في الفهم والاستيعاب",
        "الحاجة إلى وسائل تواصل بديلة",
      ],
      learningStyle:
        "تعتمد بشكل كبير على الوسائل البصرية والتواصل بالإشارة والكتابة",
      teacherSupport: [
        "استخدام وسائل بصرية",
        "الجلوس في الصفوف الأمامية",
        "استخدام تقنيات السمع",
        "تعليم لغة الإشارة",
      ],
      familySupport: [
        "تعلم لغة الإشارة",
        "استخدام السماعات المناسبة",
        "خلق بيئة تواصل فعالة",
        "التحفيز على تطور اللغة",
      ],
      color: "bg-green-50 border-green-200",
    },
    {
      title: "القصور البصري",
      icon: Eye,
      description: "ضعف أو فقدان البصر الذي يؤثر على استقبال المعلومات البصرية",
      characteristics: [
        "صعوبة في الرؤية الواضحة",
        "مشاكل في تمييز الألوان والأشكال",
        "صعوبة في القراءة والكتابة",
        "الحاجة إلى وسائل مساعدة بصرية",
      ],
      learningStyle:
        "تعتمد على الوسائل السمعية واللمسية، مع استخدام تقنيات برايل",
      teacherSupport: [
        "استخدام المواد السمعية",
        "توفير مواد مكبرة",
        "تعليم طريقة برايل",
        "استخدام برامج قراءة الشاشة",
      ],
      familySupport: [
        "توفير بيئة آمنة",
        "استخدام الألوان والتباين",
        "التعاون مع مكافحة الإعاقة",
        "تشجيع الاستقلالية",
      ],
      color: "bg-purple-50 border-purple-200",
    },
    {
      title: "القصور الذهني",
      icon: Brain,
      description: "تأخر في النمو العقلي يؤثر على القدرات الفكرية والتعلم",
      characteristics: [
        "تأخر في النمو العقلي",
        "صعوبة في التفكير المجرد",
        "بطء في التعلم",
        "صعوبات في الذاكرة والانتباه",
      ],
      learningStyle:
        "تعتمد على التكرار والتعلم العملي، مع تقسيم المهام إلى خطوات بسيطة",
      teacherSupport: [
        "تبسيط المحتوى التعليمي",
        "استخدام التعلم العملي",
        "منح وقت إضافي",
        "التقييم المستمر",
      ],
      familySupport: [
        "الصبر والتشجيع",
        "توفير بيئة محفزة",
        "التعاون مع المدرسة",
        "تطوير المهارات الحياتية",
      ],
      color: "bg-orange-50 border-orange-200",
    },
    {
      title: "اضطرابات التعلم",
      icon: BookOpen,
      description: "صعوبات محددة في التعلم لا ترتبط بالذكاء العام",
      characteristics: [
        "صعوبة في القراءة (ديسليكسيا)",
        "صعوبة في الكتابة (ديسرافيا)",
        "صعوبة في الحساب (ديسكالكوليا)",
        "مشاكل في التركيز والانتباه",
      ],
      learningStyle: "تعتمد على وسائل متعددة الحواس واستراتيجيات تعويضية",
      teacherSupport: [
        "استخدام وسائل متعددة",
        "تكييف طرق التقييم",
        "التعليم الفردي",
        "استخدام التكنولوجيا المساعدة",
      ],
      familySupport: [
        "التعرف على نقاط القوة",
        "توفير الدعم المنزلي",
        "التعاون مع المختصين",
        "بناء الثقة بالنفس",
      ],
      color: "bg-red-50 border-red-200",
    },
    {
      title: "اضطرابات الانتباه",
      icon: AlertCircle,
      description: "صعوبات في التركيز والانتباه والتحكم في الاندفاعات",
      characteristics: [
        "صعوبة في التركيز",
        "النشاط الزائد",
        "الاندفاعية",
        "صعوبة في اتباع التعليمات",
      ],
      learningStyle: "تعتمد على بيئة منظمة وهادئة مع فترات قصيرة من التركيز",
      teacherSupport: [
        "بيئة منظمة وهادئة",
        "فترات قصيرة من العمل",
        "تعليمات واضحة ومحددة",
        "استخدام المكافآت والتحفيز",
      ],
      familySupport: [
        "روتين يومي منظم",
        "بيئة هادئة للدراسة",
        "التعزيز الإيجابي",
        "التعاون مع المدرسة",
      ],
      color: "bg-yellow-50 border-yellow-200",
    },
  ];

  const socialRepresentation = {
    title: "التمثلات الاجتماعية حول الإعاقة",
    content: [
      {
        type: "التمثل الطبي",
        description:
          "نظرة تركز على العجز ونقص الفرد، وتعتبر الإعاقة مشكلة طبية بحتة",
        impact: "تؤدي إلى العزل والوصم والاعتماد على الآخرين",
      },
      {
        type: "التمثل الاجتماعي",
        description: "نظرة ترى أن الإعاقة ناتجة عن تفاعل بين الفرد والمحيط",
        impact: "تؤدي إلى تغيير البيئة وتوفير الدعم والدمج",
      },
      {
        type: "التمثل الحقوقي",
        description:
          "نظرة تعتبر الإعاقة جزءاً من التنوع البشري وحق أساسي في المشاركة",
        impact: "تؤدي إلى المساواة والكرامة والمشاركة الكاملة",
      },
    ],
  };

  const differenceBetweenDisabilityAndDeficiency = {
    title: "الفرق بين الإعاقة والقصور",
    deficiency: {
      title: "القصور (Deficiency)",
      definition: "فقدان أو شذوذ في بنية أو وظيفة عضو أو جزء من الجسم",
      examples: ["فقدان البصر", "شلل في الأطراف", "تلف في الدماغ"],
      level: "على مستوى الفرد",
    },
    disability: {
      title: "الإعاقة (Disability)",
      definition:
        "القيود التي يواجهها الفرد في المشاركة الكاملة بسبب التفاعل بين القصور والحواجز البيئية",
      examples: [
        "صعوبة الوصول إلى المدرسة",
        "عدم القدرة على المشاركة في الأنشطة",
        "الحاجز في التواصل",
      ],
      level: "على مستوى التفاعل مع المحيط",
    },
  };

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
            <li className="text-gray-600 font-arabic">الإعاقة وأنواعها</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="gradient-secondary text-white rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic">
              الإعاقة وأنواع القصور
            </h1>
            <p className="text-xl mb-8 text-green-50 leading-relaxed font-arabic max-w-4xl">
              فهم أنواع الإعاقة والقصور يساعدنا على توفير الدعم المناسب لكل طفل،
              وخلق بيئة تعليمية دامجة تراعي احتياجات الجميع.
            </p>
          </div>
        </section>

        {/* Social Representation Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            التمثلات الاجتماعية حول الإعاقة
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {socialRepresentation.content.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg card-hover"
              >
                <h3 className="text-xl font-bold mb-4 font-arabic text-gray-800">
                  {item.type}
                </h3>
                <p className="text-gray-600 font-arabic leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm font-arabic text-gray-700">
                    <span className="font-bold">التأثير:</span> {item.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Difference Between Disability and Deficiency */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            الفرق بين الإعاقة والقصور
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold mb-4 font-arabic text-blue-800">
                {differenceBetweenDisabilityAndDeficiency.deficiency.title}
              </h3>
              <p className="text-gray-700 font-arabic leading-relaxed mb-6">
                {differenceBetweenDisabilityAndDeficiency.deficiency.definition}
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm font-arabic text-gray-600 mb-2">أمثلة:</p>
                <ul className="space-y-1">
                  {differenceBetweenDisabilityAndDeficiency.deficiency.examples.map(
                    (example, i) => (
                      <li key={i} className="text-gray-700 font-arabic text-sm">
                        • {example}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <p className="text-sm font-arabic text-blue-700 font-medium">
                المستوى:{" "}
                {differenceBetweenDisabilityAndDeficiency.deficiency.level}
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-4 font-arabic text-green-800">
                {differenceBetweenDisabilityAndDeficiency.disability.title}
              </h3>
              <p className="text-gray-700 font-arabic leading-relaxed mb-6">
                {differenceBetweenDisabilityAndDeficiency.disability.definition}
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm font-arabic text-gray-600 mb-2">أمثلة:</p>
                <ul className="space-y-1">
                  {differenceBetweenDisabilityAndDeficiency.disability.examples.map(
                    (example, i) => (
                      <li key={i} className="text-gray-700 font-arabic text-sm">
                        • {example}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <p className="text-sm font-arabic text-green-700 font-medium">
                المستوى:{" "}
                {differenceBetweenDisabilityAndDeficiency.disability.level}
              </p>
            </div>
          </div>
        </section>

        {/* Disability Types Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            أنواع القصور وطرق الدعم
          </h2>
          <div className="space-y-8">
            {disabilityTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className={`border-2 rounded-xl p-8 ${type.color}`}
                >
                  <div className="flex items-start space-x-reverse space-x-4 mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                      <Icon className="h-8 w-8 text-gray-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 font-arabic text-gray-800">
                        {type.title}
                      </h3>
                      <p className="text-gray-700 font-arabic leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold font-arabic text-gray-800 mb-3">
                        الخصائص:
                      </h4>
                      <ul className="space-y-2">
                        {type.characteristics.map((char, i) => (
                          <li
                            key={i}
                            className="flex items-start space-x-reverse space-x-2"
                          >
                            <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                            <span className="text-gray-700 font-arabic text-sm">
                              {char}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold font-arabic text-gray-800 mb-3">
                        أسلوب التعلم:
                      </h4>
                      <p className="text-gray-700 font-arabic text-sm leading-relaxed">
                        {type.learningStyle}
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold font-arabic text-gray-800 mb-3">
                        دعم المدرس:
                      </h4>
                      <ul className="space-y-2">
                        {type.teacherSupport.map((support, i) => (
                          <li
                            key={i}
                            className="flex items-start space-x-reverse space-x-2"
                          >
                            <ChevronRight className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                            <span className="text-gray-700 font-arabic text-sm">
                              {support}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold font-arabic text-gray-800 mb-3">
                        دعم الأسرة:
                      </h4>
                      <ul className="space-y-2">
                        {type.familySupport.map((support, i) => (
                          <li
                            key={i}
                            className="flex items-start space-x-reverse space-x-2"
                          >
                            <Heart className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                            <span className="text-gray-700 font-arabic text-sm">
                              {support}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gray-100 text-gray-900 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 font-arabic">
              هل تحتاج إلى دعم أكثر تخصصاً؟
            </h2>
            <p className="text-xl mb-8 text-blue-800 font-arabic leading-relaxed max-w-2xl mx-auto">
              استكشف دلائلنا المتخصصة للمدرسين والأسر للحصول على استراتيجيات
              عملية وأدوات فعالة
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
