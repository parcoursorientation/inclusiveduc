"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowLeft,
  HelpCircle,
  Search,
  ChevronDown,
  ChevronRight,
  Users,
  BookOpen,
  Home,
  Target,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const faqCategories = [
    {
      id: "general",
      title: "أسئلة عامة",
      icon: HelpCircle,
      color: "bg-blue-50 border-blue-200",
      questions: [
        {
          id: "q1",
          question: "ما هي التربية الدامجة؟",
          answer:
            "التربية الدامجة هي مقاربة تربوية وحقوقية تضمن حق جميع الأطفال في التعلم داخل بيئة تعليمية متكيفة، مع توفير الدعم اللازم لنجاح كل طفل بغض النظر عن قدراته أو خلفيته. تهدف إلى الاستجابة لاحتياجات جميع المتعلمين من خلال تعزيز المشاركة والحد من الإقصاء.",
          related: ["what-is-inclusive-education", "disability-types"],
        },
        {
          id: "q2",
          question: "ما الفرق بين الدمج والإدماج؟",
          answer:
            "الإدماج يركز على تكييف الطفل ليناسب النظام التعليمي القائم، بينما الدمج يركز على تكييف النظام التعليمي ليناسب جميع الأطفال. الدمج أكثر شمولاً ويهدف إلى تغيير البيئة التعليمية لتكون قادرة على استقبال الجميع.",
          related: ["what-is-inclusive-education"],
        },
        {
          id: "q3",
          question: "هل التربية الدامجة تؤثر على تعلم الأطفال العاديين؟",
          answer:
            "لا، بل على العكس، الأبحاث تظهر أن التربية الدامجة تعزز تعلم جميع الأطفال. الأطفال العاديون يتعلمون القبول والاحترام، وتتطور لديهم المهارات الاجتماعية، ويصبحون أكثر استعداداً للعالم الحقيقي المتنوع.",
          related: ["what-is-inclusive-education", "barriers"],
        },
      ],
    },
    {
      id: "families",
      title: "أسئلة الأسر",
      icon: Home,
      color: "bg-green-50 border-green-200",
      questions: [
        {
          id: "q4",
          question: "كيف أدمج طفلي في المدرسة؟",
          answer:
            "لدمج طفلك في المدرسة، اتبع الخطوات التالية: 1) التقييم والتشخيص لتحديد احتياجات طفلك، 2) البحث عن مدرسة دامجة أو قادرة على الدمج، 3) إعداد الوثائق اللازمة، 4) الاجتماع مع الفريق المدرسي، 5) المتابعة والتقييم المستمر.",
          related: ["families-guide", "personas"],
        },
        {
          id: "q5",
          question: "ما هي حقوقي كوالد لطفل ذوي إعاقة؟",
          answer:
            "حقوقك تشمل: الحق في التعليم لطفلك، الحق في الحصول على معلومات، الحق في المشاركة في اتخاذ القرارات، الحق في الدعم، الحق في الاستئناف عند الرفض. هذه الحقوق محمية بالدستور والقوانين الوطنية والاتفاقيات الدولية.",
          related: ["legislation", "families-guide"],
        },
        {
          id: "q6",
          question: "كيف أدعم طفلي في المنزل؟",
          answer:
            "يمكنك دعم طفلك من خلال: خلق بيئة داعمة ومحفزة، تنظيم وقت الدراسة، استخدام وسائل مساعدة، التواصل الفعال مع المدرسة، الاحتفال بالنجاحات الصغيرة، والتعاون مع المختصين.",
          related: ["families-guide", "resources"],
        },
      ],
    },
    {
      id: "teachers",
      title: "أسئلة المدرسين",
      icon: BookOpen,
      color: "bg-purple-50 border-purple-200",
      questions: [
        {
          id: "q7",
          question: "ما هو المشروع البيداغوجي الفردي (PPI)؟",
          answer:
            "المشروع البيداغوجي الفردي هو خطة تعليمية مخصصة لكل طفل في وضعية إعاقة، تحدد أهدافه التعليمية، الاستراتيجيات المستخدمة، الموارد اللازمة، وطرق التقييم. يضمن تلبية الاحتياجات الفردية لكل طفل.",
          related: ["teachers-guide", "resources"],
        },
        {
          id: "q8",
          question: "كيف أدير فصلاً دامجاً؟",
          answer:
            "لإدارة فصل دامج: استخدم استراتيجيات تدريس متنوعة، كيّف المحتوى والطرق، نظم الفصل بشكل مرن، استخدم مجموعات عمل متنوعة، وفر بيئة إيجابية، وتعاون مع الأخصائيين والأسر.",
          related: ["teachers-guide", "barriers"],
        },
        {
          id: "q9",
          question: "ما هي الكفايات المهنية للمدرس الدامج؟",
          answer:
            "الكفايات تشمل: الكفايات التربوية (تخطيط وتنفيذ تعليم دامج)، الكفايات الاجتماعية (خلق بيئة إيجابية)، الكفايات التنظيمية (تنظيم الموارد)، والكفايات التأملية (تقييم وتطوير الممارسات).",
          related: ["teachers-guide"],
        },
      ],
    },
    {
      id: "disability",
      title: "الإعاقة والدعم",
      icon: Users,
      color: "bg-orange-50 border-orange-200",
      questions: [
        {
          id: "q10",
          question: "ما هي أنواع الإعاقة؟",
          answer:
            "الأنواع الرئيسية تشمل: القصور الحركي، القصور السمعي، القصور البصري، القصور الذهني، اضطرابات التعلم، اضطرابات الانتباه، والتوحد. كل نوع له خصائصه وطرق دعمه الخاصة.",
          related: ["disability-types"],
        },
        {
          id: "q11",
          question: "هل يمكن دمج الأطفال ذوي التوحد؟",
          answer:
            "نعم، يمكن دمج الأطفال ذوي التوحد بنجاح مع الدعم المناسب. يتطلب هذا تكييف البيئة، استخدام وسائل تواصل بصرية، توفير هيكل وروتين، وتدريب المدرسين على استراتيجيات دعم التوحد.",
          related: ["disability-types", "teachers-guide"],
        },
        {
          id: "q12",
          question: "ما هي التقنيات المساعدة؟",
          answer:
            "التقنيات المساعدة هي أدوات وأجهزة تساعد الأشخاص ذوي الإعاقة على المشاركة والتعلم. تشمل: السماعات، الأجهزة المكبرة، برامج قراءة الشاشة، برامج التواصل، والأجهزة التكيفية.",
          related: ["disability-types", "resources"],
        },
      ],
    },
    {
      id: "implementation",
      title: "التطبيق والتحديات",
      icon: Target,
      color: "bg-red-50 border-red-200",
      questions: [
        {
          id: "q13",
          question: "ما هي الحواجز الرئيسية للدمج؟",
          answer:
            "الحواجز تشمل: حواجز محيطة (البعد المدرسي، غياب الولوجيات)، حواجز اتجاهات (تمثلات سلبية، تنميط)، وحواجز مؤسساتية (جمود المناهج، نقص التكوين). يمكن التغلب عليها بحلول عملية.",
          related: ["barriers"],
        },
        {
          id: "q14",
          question: "ما هو دور المدير في الدمج؟",
          answer:
            "دور المدير يشمل: قيادة عملية الدمج، توفير الموارد، دعم المدرسين، التنسيق مع الأخصائيين، إشراك الأسر، وتقييم سيرورة الدمج. المدير هو القائد الأساسي لنجاح الدمج.",
          related: ["teachers-guide", "personas"],
        },
        {
          id: "q15",
          question: "كيف نقيم نجاح الدمج؟",
          answer:
            "التقييم يشمل: ملاحظة المشاركة الصفية، تحقيق الأهداف التعليمية، تطور المهارات الاجتماعية، رضا الأسر والمدرسين، وتحسن المناخ المدرسي. يستخدم مؤشرات كميات ونوعيات.",
          related: ["teachers-guide", "barriers"],
        },
      ],
    },
  ];

  const quickQuestions = [
    "كيف أبدأ؟",
    "أين أجد الدعم؟",
    "ما هي الموارد المتاحة؟",
    "كيف أتواصل معكم؟",
  ];

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
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
            <li className="text-gray-600 font-arabic">الأسئلة الشائعة</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="gradient-primary text-white rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic">
              الأسئلة الشائعة
            </h1>
            <p className="text-xl mb-8 text-blue-50 leading-relaxed font-arabic max-w-4xl">
              إجابات على الاستفسارات المتكررة حول التربية الدامجة. إذا لم تجد
              إجابة سؤالك، فلا تتردد في التواصل معنا.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-2 flex items-center space-x-reverse space-x-2">
                <Search className="h-6 w-6 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="ابحث عن سؤال..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-4 py-2 text-gray-800 placeholder-gray-500 focus:outline-none font-arabic"
                />
              </div>
            </div>

            {/* Quick Questions */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setSearchTerm(question)}
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full font-arabic transition-colors duration-200"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="mb-16">
          <div className="space-y-8">
            {filteredCategories.map((category) => {
              const Icon = category.icon;
              const isExpanded = expandedCategory === category.id;

              return (
                <div
                  key={category.id}
                  className={`border-2 rounded-xl ${category.color}`}
                >
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-opacity-50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-reverse space-x-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                        <Icon className="h-6 w-6 text-gray-700" />
                      </div>
                      <div className="text-right">
                        <h2 className="text-2xl font-bold font-arabic text-gray-800">
                          {category.title}
                        </h2>
                        <p className="text-gray-600 font-arabic">
                          {category.questions.length} أسئلة
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-6 w-6 text-gray-600 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4">
                        {category.questions.map((item) => {
                          const isQuestionExpanded =
                            expandedQuestion === item.id;

                          return (
                            <div
                              key={item.id}
                              className="bg-white rounded-lg shadow-md overflow-hidden"
                            >
                              <button
                                onClick={() => toggleQuestion(item.id)}
                                className="w-full p-4 text-right hover:bg-gray-50 transition-colors duration-200"
                              >
                                <div className="flex items-center justify-between">
                                  <h3 className="text-lg font-semibold font-arabic text-gray-800">
                                    {item.question}
                                  </h3>
                                  <ChevronRight
                                    className={`h-5 w-5 text-gray-600 transition-transform duration-200 ${
                                      isQuestionExpanded ? "rotate-90" : ""
                                    }`}
                                  />
                                </div>
                              </button>

                              {isQuestionExpanded && (
                                <div className="px-4 pb-4">
                                  <div className="bg-gray-50 rounded-lg p-4">
                                    <p className="text-gray-700 font-arabic leading-relaxed mb-4">
                                      {item.answer}
                                    </p>

                                    {item.related &&
                                      item.related.length > 0 && (
                                        <div className="border-t pt-4">
                                          <p className="text-sm font-bold font-arabic text-gray-800 mb-2">
                                            مواضيع ذات صلة:
                                          </p>
                                          <div className="flex flex-wrap gap-2">
                                            {item.related.map((related, i) => (
                                              <Link
                                                key={i}
                                                href={`/${related}`}
                                                className="text-primary hover:text-primary/80 text-sm font-arabic flex items-center space-x-reverse space-x-1"
                                              >
                                                <span>اقرأ المزيد</span>
                                                <ChevronRight className="h-3 w-3" />
                                              </Link>
                                            ))}
                                          </div>
                                        </div>
                                      )}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Help Section */}
        <section className="mb-16">
          <div className="bg-linear-to-r from-blue-50 to-green-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 font-arabic text-gray-800 text-center">
              لم تجد إجابة سؤالك؟
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 font-arabic text-gray-800">
                  تواصل معنا
                </h3>
                <p className="text-gray-600 font-arabic mb-4">
                  فريق الخبراء جاهز للإجابة على استفساراتك
                </p>
                <Link
                  href="/contact"
                  className="text-blue-600 hover:text-blue-800 font-arabic"
                >
                  ارسل سؤالك
                </Link>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 font-arabic text-gray-800">
                  استكشف الموارد
                </h3>
                <p className="text-gray-600 font-arabic mb-4">
                  نماذج وأدلة عملية لمساعدتك
                </p>
                <Link
                  href="/resources"
                  className="text-green-600 hover:text-green-800 font-arabic"
                >
                  تصفح الموارد
                </Link>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 font-arabic text-gray-800">
                  انضم لمجتمعنا
                </h3>
                <p className="text-gray-600 font-arabic mb-4">
                  تبادل الخبرات مع الآخرين
                </p>
                <Link
                  href="/personas"
                  className="text-purple-600 hover:text-purple-800 font-arabic"
                >
                  اكتشف مساراتك
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            أرقام وإحصائيات
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2 font-arabic">
                95%
              </div>
              <p className="text-gray-600 font-arabic">
                من الأسر تشعر بالرضا عن الدعم المقدم
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2 font-arabic">
                1500+
              </div>
              <p className="text-gray-600 font-arabic">
                طفل تم دمجهم بنجاح هذا العام
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2 font-arabic">
                200+
              </div>
              <p className="text-gray-600 font-arabic">
                مدرسة دامجة على المستوى الوطني
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2 font-arabic">
                24/7
              </div>
              <p className="text-gray-600 font-arabic">دعم متاح عبر منصتنا</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gray-100 text-gray-800 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 font-arabic">
              هل أنت مستعد للبدء؟
            </h2>
            <p className="text-xl mb-8 text-blue-800 font-arabic leading-relaxed max-w-2xl mx-auto">
              ابدأ رحلتك في التربية الدامجة اليوم. فريقنا هنا لدعمك في كل خطوة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/what-is-inclusive-education"
                className="button-primary bg-white text-primary hover:bg-gray-100"
              >
                ابدأ بالأساسيات
              </Link>
              <Link
                href="/contact"
                className="button-secondary border-2 border-white text-white hover:bg-white hover:text-primary"
              >
                احصل على دعم مخصص
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
