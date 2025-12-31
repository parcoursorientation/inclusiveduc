"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import {
  Download,
  Users,
  BookOpen,
  Target,
  CheckSquare,
  ArrowRight,
  Star,
  Clock,
  Award,
  Shield,
  FileText,
  Calendar,
  Handshake,
} from "lucide-react";

export default function GuideDirecteur() {
  const [activeTab, setActiveTab] = useState("overview");
  // بيانات القيادة التربوية الدامجة
  const inclusiveLeadership = {
    title: "القيادة التربوية الدامجة",
    description:
      "نمط قيادي يرتكز على الإنصاف، التعاون، واحترام التنوع داخل المؤسسة التعليمية",
    principles: [
      {
        title: "القيادة التشاركية",
        description: "إشراك جميع الفاعلين في اتخاذ القرار",
        practices: [
          "تفعيل مجالس المؤسسة",
          "الاستماع للأساتذة والأطر",
          "تشجيع المبادرات",
          "تقاسم المسؤوليات",
        ],
      },
      {
        title: "تدبير التنوع",
        description: "الاستجابة لاختلاف حاجات المتعلمين",
        practices: [
          "احترام الفروق الفردية",
          "دعم التكييفات التربوية",
          "مواكبة حالات الإعاقة",
          "توفير شروط الولوجيات",
        ],
      },
    ],
  };

  // بيانات كفايات المدير
  const directorCompetencies = [
    {
      title: "الكفايات القيادية",
      description: "قيادة التغيير داخل المؤسسة",
      skills: ["اتخاذ القرار التربوي", "تدبير الفرق", "حل النزاعات", "التحفيز"],
    },
    {
      title: "الكفايات القانونية",
      description: "ضمان احترام التشريعات",
      skills: [
        "معرفة النصوص التنظيمية",
        "حماية حقوق المتعلمين",
        "تدبير الملفات الإدارية",
        "التنسيق مع الشركاء",
      ],
    },
  ];

  // بيانات مشروع المؤسسة الدامج
  const inclusiveSchoolProject = {
    title: "مشروع المؤسسة المندمج",
    description: "أداة استراتيجية لتفعيل التربية الدامجة داخل المؤسسة",
    phases: [
      {
        phase: "التشخيص",
        steps: [
          "تحليل وضعية التمدرس",
          "جرد حالات الإعاقة",
          "تقييم الموارد",
          "تشخيص الحواجز",
        ],
      },
      {
        phase: "التخطيط",
        steps: [
          "تحديد الأولويات",
          "إدماج التربية الدامجة في المشروع",
          "برمجة الأنشطة",
          "توزيع المهام",
        ],
      },
    ],
  };

  // بيانات أدوار المدير
  const directorRoles = [
    {
      title: "التنسيق",
      activities: [
        "التنسيق مع الأساتذة",
        "التواصل مع الأسر",
        "الربط مع الشركاء",
      ],
    },
    {
      title: "التتبع والتقويم",
      activities: ["تتبع الحالات", "تقويم التكييفات", "توثيق التدخلات"],
    },
  ];

  // بيانات إجراءات عملية للمدير
  const practicalDirectorActions = [
    {
      category: "بداية الموسم",
      tips: [
        "إحصاء التلاميذ في وضعية إعاقة",
        "تشكيل فريق اليقظة",
        "تحيين الملفات",
      ],
    },
    {
      category: "طيلة السنة",
      tips: ["تتبع التكييفات", "عقد اجتماعات دورية", "توثيق التدخلات"],
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
            <li className="text-gray-600 font-arabic">دليل المدير</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="gradient-primary text-white rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic">
              دليل المدير(ة) في التربية الدامجة
            </h1>
            <p className="text-xl mb-8 text-blue-50 leading-relaxed font-arabic max-w-4xl">
              مرجع عملي لمواكبة مديري المؤسسات التعليمية في تفعيل التربية
              الدامجة، تدبير الحالات، قيادة الفرق التربوية، وضمان الحق في تعليم
              منصف وذي جودة.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Award className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">القيادة التربوية</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Target className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">كفايات المدير</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <FileText className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">مشروع المؤسسة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">إجراءات عملية</div>
              </div>
            </div>
            {/* Download Guide Button */}
            <div className="mt-8 flex justify-center">
              <a
                href="https://drive.google.com/file/d/1bsHDkSPtHdUXBAJLnXR3czWsDVLkhocJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 font-arabic"
              >
                <Download className="h-5 w-5" />
                <span>تحميل دليل المدير</span>
              </a>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-2 flex flex-wrap justify-center gap-2">
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-colors font-arabic ${
                activeTab === "overview"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("overview")}
            >
              الإطار العام
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-colors font-arabic ${
                activeTab === "leadership"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("leadership")}
            >
              القيادة التربوية
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-colors font-arabic ${
                activeTab === "competencies"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("competencies")}
            >
              كفايات المدير
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-colors font-arabic ${
                activeTab === "project"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("project")}
            >
              مشروع المؤسسة
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-colors font-arabic ${
                activeTab === "roles"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("roles")}
            >
              أدوار المدير
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-colors font-arabic ${
                activeTab === "actions"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("actions")}
            >
              إجراءات عملية
            </button>
          </div>
        </section>

        {/* Tab Content */}
        <div className="max-w-5xl mx-auto mouse-pointer">
          {/* الإطار العام للدليل */}
          {activeTab === "overview" && (
            <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg ml-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 font-arabic">الإطار العام للدليل</h2>
                  <p className="text-gray-600 mt-1 font-arabic">مرجعية مهنية للمدير(ة) في التربية الدامجة</p>
                </div>
              </div>

              <div className="space-y-8 mt-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center font-arabic">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center ml-3">1</span>
                    الإطار العام للدليل
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-arabic mb-4">
                    يأتي هذا الدليل في سياق الإصلاحات التربوية التي عرفها النظام التعليمي المغربي، ويهدف إلى تأهيل أطر الإدارة التربوية لقيادة وتدبير مشروع المؤسسة الدامجة، بما يضمن الحق في التمدرس المنصف والجيد للأطفال في وضعية إعاقة، انسجامًا مع المرجعيات الحقوقية، التشريعية، والتربوية الوطنية والدولية.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center font-arabic">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center ml-3">2</span>
                    فلسفة التربية الدامجة
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-arabic mb-4">
                    ترتكز التربية الدامجة على جعل المدرسة فضاءً مفتوحًا أمام جميع المتعلمين دون إقصاء، مع مراعاة خصوصياتهم الفردية، وذلك اعتمادًا على المبادئ التالية:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">مبدأ الإنصاف بدل المساواة الشكلية.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">تكييف التعليم لا تكييف المتعلم.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">الوساطة التربوية والاجتماعية (الأسرة، المدرسون، الزملاء).</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">احترام كرامة الطفل وقدراته وإمكاناته.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center font-arabic">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center ml-3">3</span>
                    المرجعية المهنية للمدير الدامج
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-arabic mb-4">
                    لا يختلف المدير الدامج من حيث الإطار القانوني عن باقي أطر الإدارة التربوية، لكنه يتميز بمرجعية مهنية خاصة قوامها:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">الوعي بفلسفة التربية الدامجة.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">تغيير التمثلات السلبية حول الإعاقة.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">تبني التدبير التشاركي بدل التدبير العمودي.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">قيادة مشروع المؤسسة الدامجة باعتباره أداة استراتيجية للإصلاح.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center font-arabic">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center ml-3">4</span>
                    كفايات المدير في التربية الدامجة
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-arabic mb-4">
                    يحدد الدليل ثلاث كفايات أساسية يجب أن يتوفر عليها المدير(ة):
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700"><strong>الكفاية التخطيطية:</strong> تخطيط وبناء مشروع المؤسسة الدامجة انطلاقًا من التشخيص الواقعي للحاجيات والإكراهات.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700"><strong>الكفاية التدبيرية:</strong> تدبير الموارد البشرية، التنظيمية، التربوية واللوجستية المرتبطة بسير عمليات الدمج.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700"><strong>الكفاية التقويمية:</strong> تتبع وتقويم أثر مشروع المؤسسة الدامجة على تمدرس الأطفال وجودة العرض التربوي.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center font-arabic">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center ml-3">5</span>
                    مشروع المؤسسة الدامجة
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-arabic mb-4">
                    يُعد مشروع المؤسسة الدامجة العمود الفقري للتربية الدامجة، ويمر عبر مراحل أساسية:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700"><strong>التشخيص:</strong> جرد الحاجيات، الإعاقات، الموارد، والحواجز.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700"><strong>التخطيط:</strong> تحديد الأهداف، برمجة العمليات، توزيع المسؤوليات.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700"><strong>التنفيذ:</strong> تنزيل الأنشطة التربوية والتنظيمية.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700"><strong>التتبع والتقويم:</strong> قياس الأثر، تصحيح الاختلالات، تحسين الأداء.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center font-arabic">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center ml-3">6</span>
                    أدوار المدير(ة) في التربية الدامجة
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-arabic mb-4">
                    يضطلع المدير الدامج بأدوار محورية، من أهمها:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">التنسيق مع الأساتذة، الأسر، الشركاء، وهيئات التفتيش.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">تعبئة مجالس المؤسسة حول مشروع الدمج.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">ضمان الولوجيات وتنظيم الحياة المدرسية الدامجة.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">تتبع مسار التمدرس والانتقال الارتقائي للأطفال.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center font-arabic">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center ml-3">7</span>
                    الإجراءات العملية والممارسات الإدارية الدامجة
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-arabic mb-4">
                    يوفر الدليل لائحة عملية من الإجراءات، من بينها:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">تسجيل وتتبع ملفات الأطفال في وضعية إعاقة.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">تنظيم أقسام الدمج المدرسي.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">إدماج الأطفال في الأنشطة اليومية والحياة المدرسية.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">التنسيق مع القطاعات الصحية والجمعيات.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">تقويم أثر الدمج على المتعلم، المدرس، والمؤسسة.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center font-arabic">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center ml-3">8</span>
                    القيمة المضافة للدليل
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-arabic mb-4">
                    يمثل هذا الدليل:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">أداة عملية لتأطير المدير(ة) ميدانيًا.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">مرجعًا لتوحيد الرؤى والممارسات الإدارية الدامجة.</span>
                    </li>
                    <li className="flex items-start font-arabic">
                      <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700">دعامة لبناء مدرسة مغربية منصفة، دامجة، وذات جودة.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* القيادة التربوية الدامجة */}
          {activeTab === "leadership" && (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg ml-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 font-arabic">
                    {inclusiveLeadership.title}
                  </h2>
                  <p className="text-gray-600 mt-1 font-arabic">
                    {inclusiveLeadership.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                {inclusiveLeadership.principles.map((principle, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center font-arabic">
                      <Star className="h-5 w-5 text-yellow-500 ml-2" />
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 mb-4 font-arabic">
                      {principle.description}
                    </p>
                    <ul className="space-y-2">
                      {principle.practices.map((practice, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                          <span className="text-gray-700 font-arabic">
                            {practice}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* كفايات المدير في التربية الدامجة */}
          {activeTab === "competencies" && (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-lg ml-4">
                  <Shield className="h-8 w-8 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 font-arabic">
                    كفايات المدير في التربية الدامجة
                  </h2>
                  <p className="text-gray-600 mt-1 font-arabic">
                    المهارات الأساسية التي يجب أن يمتلكها المدير لتفعيل التربية
                    الدامجة
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                {directorCompetencies.map((competency, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 font-arabic">
                      {competency.title}
                    </h3>
                    <p className="text-gray-600 mb-4 font-arabic">
                      {competency.description}
                    </p>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-700 mb-3 font-arabic">
                        المهارات الرئيسية:
                      </h4>
                      <ul className="space-y-2">
                        {competency.skills.map((skill, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                            <span className="text-gray-700 font-arabic">
                              {skill}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* مشروع المؤسسة الدامج */}
          {activeTab === "project" && (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg ml-4">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 font-arabic">
                    {inclusiveSchoolProject.title}
                  </h2>
                  <p className="text-gray-600 mt-1 font-arabic">
                    {inclusiveSchoolProject.description}
                  </p>
                </div>
              </div>

              <div className="space-y-8 mt-8">
                {inclusiveSchoolProject.phases.map((phase, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center font-arabic">
                      <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center ml-3">
                        {index + 1}
                      </span>
                      {phase.phase}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {phase.steps.map((step, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-lg p-4 flex items-start"
                        >
                          <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                          <span className="text-gray-700 font-arabic">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* أدوار المدير في التربية الدامجة */}
          {activeTab === "roles" && (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-lg ml-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 font-arabic">
                    أدوار المدير في التربية الدامجة
                  </h2>
                  <p className="text-gray-600 mt-1 font-arabic">
                    المهام والمسؤوليات الأساسية للمدير في تفعيل التربية الدامجة
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                {directorRoles.map((role, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center font-arabic">
                      <Handshake className="h-6 w-6 text-purple-600 ml-2" />
                      {role.title}
                    </h3>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-700 mb-3 font-arabic">
                        الأنشطة الرئيسية:
                      </h4>
                      <ul className="space-y-2">
                        {role.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                            <span className="text-gray-700 font-arabic">
                              {activity}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* إجراءات عملية للمدير */}
          {activeTab === "actions" && (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-lg ml-4">
                  <Calendar className="h-8 w-8 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 font-arabic">
                    إجراءات عملية للمدير
                  </h2>
                  <p className="text-gray-600 mt-1 font-arabic">
                    نصائح وإجراءات عملية للمدير على مدار السنة الدراسية
                  </p>
                </div>
              </div>

              <div className="space-y-8 mt-8">
                {practicalDirectorActions.map((category, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center font-arabic">
                      <Calendar className="h-6 w-6 text-orange-600 ml-2" />
                      {category.category}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {category.tips.map((tip, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-lg p-4 flex items-start"
                        >
                          <CheckSquare className="h-5 w-5 text-green-500 ml-2 mt-0.5 shrink-0" />
                          <span className="text-gray-700 font-arabic">
                            {tip}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

