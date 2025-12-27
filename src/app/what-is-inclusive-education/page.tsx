import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  CheckCircle,
  Users,
  BookOpen,
  ArrowLeft,
  Scale,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

export default function WhatIsInclusiveEducation() {
  const educationTypes = [
    {
      title: "التربية العادية",
      description: "نظام تعليمي لا يأخذ في الاعتبار الاحتياجات الخاصة",
      characteristics: ["منهج موحد للجميع", "طرق تدريس واحدة", "تقييم موحد"],
      limitations: ["لا يراعي الفروق الفردية", "قد يستثني الأطفال ذوي الإعاقة"],
      color: "bg-gray-100 border-gray-300",
    },
    {
      title: "التربية الخاصة",
      description: "فصول ومناهج منفصلة للأطفال ذوي الإعاقة",
      characteristics: ["فصول خاصة", "مناهج معدلة", "أخصائيون"],
      limitations: ["عزل عن الأطفال العاديين", "وصمة اجتماعية"],
      color: "bg-orange-100 border-orange-300",
    },
    {
      title: "التربية الإدماجية",
      description: "دمج الأطفال في فصول عادية مع دعم محدود",
      characteristics: ["فصول عادية", "دعم انتقائي", "تكيفات جزئية"],
      limitations: ["تركيز على الفرد وليس النظام", "دعم غير كامل"],
      color: "bg-blue-100 border-blue-300",
    },
    {
      title: "التربية الدامجة",
      description: "نظام تعليمي مصمم للجميع مع تكييف شامل",
      characteristics: [
        "مناهج مرنة",
        "دعم شامل",
        "بيئة متكيفة",
        "مشاركة كاملة",
      ],
      advantages: ["الإنصاف للجميع", "تقبل التنوع", "نجاح للجميع"],
      color: "bg-green-100 border-green-500",
    },
  ];

  const principles = [
    {
      title: "الإنصاف",
      description: "توفير فرص متكافئة للجميع مع مراعاة الاحتياجات الفردية",
      icon: "⚖️",
    },
    {
      title: "تقبل التنوع",
      description: "الاعتراف بالاختلافات كقيمة مضافة للبيئة التعليمية",
      icon: "🤝",
    },
    {
      title: "المشاركة الكاملة",
      description: "ضمان مشاركة جميع الأطفال في جميع أنشطة التعلم",
      icon: "👥",
    },
    {
      title: "تكييف البيئة",
      description: "تعديل المحيط التعليمي ليناسب جميع المتعلمين",
      icon: "🏗️",
    },
  ];

  const benefits = [
    {
      title: "للأطفال ذوي الإعاقة",
      items: [
        "تحسين المهارات الأكاديمية والاجتماعية",
        "زيادة الثقة بالنفس",
        "التحضير للحياة في مجتمع متنوع",
        "الوصول إلى فرص أفضل",
      ],
    },
    {
      title: "للأطفال العاديين",
      items: [
        "تعلم القبول والاحترام",
        "تطوير المهارات الاجتماعية",
        "التحضير للعالم الحقيقي",
        "زيادة الوعي والتعاطف",
      ],
    },
    {
      title: "للمجتمع المدرسي",
      items: [
        "بيئة تعليمية أكثر ثراءً",
        "تقليل الوصم والتمييز",
        "تحسين السمعة المدرسية",
        "تطوير ثقافة الدعم",
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
              ما هي التربية الدامجة؟
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="gradient-primary text-white rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic">
              ما هي التربية الدامجة؟
            </h1>
            <p className="text-xl mb-8 text-blue-50 leading-relaxed font-arabic max-w-4xl">
              التربية الدامجة هي مقاربة تربوية وحقوقية تضمن حق جميع الأطفال في
              التعلم داخل بيئة تعليمية متكيفة، مع توفير الدعم اللازم لنجاح كل
              طفل بغض النظر عن قدراته أو خلفيته.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 font-arabic flex items-center">
                  <BookOpen className="ml-3 h-6 w-6" />
                  تعريف اليونسكو
                </h3>
                <p className="text-blue-50 font-arabic leading-relaxed">
                  "التربية الدامجة هي عملية تهدف إلى الاستجابة لاحتياجات جميع
                  المتعلمين من خلال تعزيز المشاركة والحد من الإقصاء داخل نظم
                  التعليم."
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 font-arabic flex items-center">
                  <Users className="ml-3 h-6 w-6" />
                  منظمة إعاقة دولية
                </h3>
                <p className="text-blue-50 font-arabic leading-relaxed">
                  الإعاقة ليست خاصية فردية، بل نتيجة تفاعل بين الشخص والمحيط
                  والحواجز التي تمنعه من المشاركة الكاملة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            مبادئ التربية الدامجة
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg card-hover text-center"
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold mb-3 font-arabic text-gray-800">
                  {principle.title}
                </h3>
                <p className="text-gray-600 font-arabic leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Types Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            مقارنة بين أنماط التربية
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {educationTypes.map((type, index) => (
              <div
                key={index}
                className={`border-2 rounded-xl p-6 ${type.color}`}
              >
                <h3 className="text-2xl font-bold mb-3 font-arabic text-gray-800">
                  {type.title}
                </h3>
                <p className="text-gray-700 font-arabic mb-4 leading-relaxed">
                  {type.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-bold font-arabic text-gray-800 mb-2">
                    الخصائص:
                  </h4>
                  <ul className="space-y-1">
                    {type.characteristics?.map((char, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-reverse space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-gray-700 font-arabic text-sm">
                          {char}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {type.limitations && (
                  <div>
                    <h4 className="font-bold font-arabic text-gray-800 mb-2">
                      القيود:
                    </h4>
                    <ul className="space-y-1">
                      {type.limitations.map((limit, i) => (
                        <li
                          key={i}
                          className="flex items-start space-x-reverse space-x-2"
                        >
                          <span className="text-red-600 mt-0.5">•</span>
                          <span className="text-gray-700 font-arabic text-sm">
                            {limit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {type.advantages && (
                  <div>
                    <h4 className="font-bold font-arabic text-gray-800 mb-2">
                      المميزات:
                    </h4>
                    <ul className="space-y-1">
                      {type.advantages.map((advantage, i) => (
                        <li
                          key={i}
                          className="flex items-start space-x-reverse space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          <span className="text-gray-700 font-arabic text-sm">
                            {advantage}
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

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            فوائد التربية الدامجة
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-blue-50 to-green-50 rounded-xl p-8"
              >
                <h3 className="text-xl font-bold mb-6 font-arabic text-gray-800 text-center">
                  {benefit.title}
                </h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-reverse space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700 font-arabic leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-linear-to-r from-primary to-secondary text-gray-900 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 font-arabic">
              هل أنت مستعد لتطبيق التربية الدامجة؟
            </h2>
            <p className="text-xl mb-8 text-blue-800 font-arabic leading-relaxed max-w-2xl mx-auto">
              اكتشف الأدوات والموارد التي ستساعدك على إرساء بيئة تعليمية دامجة
              لفائدة جميع الأطفال
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/teachers-guide"
                className="button-primary bg-white text-primary hover:bg-gray-100"
              >
                دليل المدرسين
                <GraduationCap className="mr-2 h-5 w-5" />
              </Link>
              <Link
                href="/families-guide"
                className="button-secondary border-2 border-white text-white hover:bg-white hover:text-primary"
              >
                دليل الأسر
                <Users className="mr-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
