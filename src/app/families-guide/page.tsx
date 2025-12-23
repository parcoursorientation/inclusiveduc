import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, Heart, Users, Target, BookOpen, CheckCircle, Home, Award, MessageCircle, HandHelping, Star, ChevronRight, Lightbulb } from 'lucide-react'

export default function FamiliesGuide() {
  const positiveParenting = {
    title: 'الوالدية الإيجابية',
    description: 'أسلوب تربية يقوم على الاحترام المتبادل والتواصل الفعال',
    principles: [
      {
        title: 'التواصل الفعال',
        description: 'الاستماع الفعال والتعبير الواضح عن المشاعر',
        practices: [
          'الاستماع باهتمام للطفل',
          'استخدام لغة إيجابية',
          'التعبير عن المشاعر بشكل صحي',
          'تجنب النقد واللوم'
        ]
      },
      {
        title: 'وضع الحدود',
        description: 'تحديد قواعد واضحة ومتسقة',
        practices: [
          'قواعد بسيطة وواضحة',
          'تطبيق متسق للقواعد',
          'شرح أسباب القواعد',
          'تكييف الحدود حسب العمر'
        ]
      },
      {
        title: 'التشجيع والدعم',
        description: 'تعزيز الثقة والاستقلالية',
        practices: [
          'الثناء على الجهد وليس النتيجة',
          'تشجيع الاستقلالية',
          'دعم القرارات المناسبة',
          'الاحتفال بالنجاحات الصغيرة'
        ]
      },
      {
        title: 'النموذج الإيجابي',
        description: 'القدوة الحسنة في السلوك والتعامل',
        practices: [
          'التصرف كما نريد من أطفالنا',
          'الاعتراف بالأخطاء',
          'إظهار الاحترام المتبادل',
          'التعامل مع الضغوط بهدوء'
        ]
      }
    ]
  }

  const parentalCompetencies = [
    {
      title: 'الكفايات العاطفية',
      description: 'القدرة على فهم وإدارة المشاعر',
      skills: [
        'التعرف على مشاعر الطفل',
        'التعاطف مع التجارب',
        'تنظيم المشاعر الشخصية',
        'خلق بيئة عاطفية آمنة'
      ]
    },
    {
      title: 'الكفايات التواصلية',
      description: 'القدرة على التواصل الفعال',
      skills: [
        'الاستماع النشط',
        'التعبير الواضح',
        'حل النزاعات',
        'التواصل غير اللفظي'
      ]
    },
    {
      title: 'الكفايات التربوية',
      description: 'القدرة على التوجيه والتدريب',
      skills: [
        'توجيه السلوك',
        'تعليم المهارات',
        'التحفيز على التعلم',
        'دعم التطور'
      ]
    },
    {
      title: 'الكفايات التنظيمية',
      description: 'القدرة على تنظيم الحياة الأسرية',
      skills: [
        'إدارة الوقت',
        'تنظيم الروتين',
        'تنسيق الرعاية',
        'التخطيط للمستقبل'
      ]
    }
  ]

  const familyProjectStructure = {
    title: 'بناء المشروع الأسري للدمج',
    description: 'خطة عمل متكاملة لدمج الطفل في المدرسة والمجتمع',
    phases: [
      {
        phase: 'مرحلة التقييم',
        description: 'تقييم وضعية الطفل والاحتياجات',
        steps: [
          'تحديد نقاط القوة',
          'تحديد الصعوبات',
          'تقييم البيئة المحيطة',
          'تحديد الموارد المتاحة'
        ]
      },
      {
        phase: 'مرحلة التخطيط',
        description: 'وضع خطة عمل واقعية',
        steps: [
          'تحديد الأهداف',
          'اختيار الاستراتيجيات',
          'تحديد المسؤوليات',
          'جدولة الأنشطة'
        ]
      },
      {
        phase: 'مرحلة التنفيذ',
        description: 'تطبيق الخطة بشكل منظم',
        steps: [
          'البدء بخطوات صغيرة',
          'الالتزام بالخطة',
          'التكيف مع التغيرات',
          'الحفاظ على الدافعية'
        ]
      },
      {
        phase: 'مرحلة التقييم',
        description: 'تقييم التقدم والتعديل',
        steps: [
          'ملاحظة التقدم',
          'جمع التغذية الراجعة',
          'تعديل الخطة',
          'الاحتفال بالنجاحات'
        ]
      }
    ]
  }

  const associationRoles = [
    {
      title: 'المصاحبة الأسرية',
      description: 'دعم الأسر في رحلة الدمج',
      activities: [
        'الاستماع والتوجيه',
        'توفير المعلومات',
        'ربط الأسر ببعضها',
        'تنظيم لقاءات دعم'
      ]
    },
    {
      title: 'الوساطة المدرسية',
      description: 'تسهيل التواصل بين الأسر والمؤسسات',
      activities: [
        'الوساطة مع المدارس',
        'شرح حقوق الطفل',
        'المساعدة في الإجراءات',
        'حل النزاعات'
      ]
    },
    {
      title: 'التكوين والتوعية',
      description: 'تطوير مهارات الأسر والوعي المجتمعي',
      activities: [
        'ورشات تكوينية',
        'محاضرات توعوية',
        'توزيع مواد إعلامية',
        'استخدام وسائل الإعلام'
      ]
    },
    {
      title: 'المناصرة الحقوقية',
      description: 'الدفاع عن حقوق الأطفال ذوي الإعاقة',
      activities: [
        'الضغط على السياسات',
        'الإبلاغ عن الانتهاكات',
        'المشاركة في صنع القرار',
        'بناء الشراكات'
      ]
    }
  ]

  const awarenessCampaign = {
    title: 'مراحل حملة التوعية',
    description: 'خطة متكاملة للتوعية بأهمية التربية الدامجة',
    stages: [
      {
        stage: 'مرحلة التحضير',
        duration: 'شهرين',
        objectives: [
          'تحديد الجمهور المستهدف',
          'تحديد الرسائل الرئيسية',
          'اختيار القنوات المناسبة',
          'إعداد المواد الإعلامية'
        ],
        activities: [
          'دراسة الوضع',
          'تشكيل فريق العمل',
          'جمع الموارد',
          'وضع خطة تفصيلية'
        ]
      },
      {
        stage: 'مرحلة الإطلاق',
        duration: 'شهر',
        objectives: [
          'جذب الانتباه',
          'نشر الرسائل',
          'إشراك الجمهور',
          'خلق زخم إعلامي'
        ],
        activities: [
          'حفل إطلاق',
          'تغطية إعلامية',
          'حملة رقمية',
          'فعاليات مفتوحة'
        ]
      },
      {
        stage: 'مرحلة التنفيذ',
        duration: '6 أشهر',
        objectives: [
          'تعميق الوعي',
          'تغيير المواقف',
          'بناء التحالفات',
          'تحقيق التأثير'
        ],
        activities: [
          'ورشات عمل',
          'لقاءات مفتوحة',
          'حملات إعلامية',
          'أنشطة مجتمعية'
        ]
      },
      {
        stage: 'مرحلة التقييم',
        duration: 'شهر',
        objectives: [
          'قياس الأثر',
          'تحديد النتائج',
          'توثيق التجربة',
          'التخطيط للمستقبل'
        ],
        activities: [
          'استبيانات',
          'مقابلات',
          'تحليل البيانات',
          'تقرير نهائي'
        ]
      }
    ]
  }

  const socialMobilization = {
    title: 'مراحل التعبئة الاجتماعية',
    description: 'بناء حركة مجتمعية لدعم التربية الدامجة',
    phases: [
      {
        phase: 'مرحلة التأسيس',
        description: 'بناء القاعدة وتحديد الأهداف',
        actions: [
          'تشكيل لجنة توجيه',
          'تحديد الأهداف الواضحة',
          'تحديد الفاعلين الرئيسيين',
          'وضع خطة عمل'
        ]
      },
      {
        phase: 'مرحلة التوسع',
        description: 'نشر الوعي وجذب الدعم',
        actions: [
          'تنظيم فعاليات',
          'استخدام الإعلام',
          'بناء الشراكات',
          'تطوير الشبكات'
        ]
      },
      {
        phase: 'مرحلة التأثير',
        description: 'تحقيق التغيير الفعلي',
        actions: [
          'الضغط السياسي',
          'تنفيذ المشاريع',
          'تغيير السياسات',
          'تحقيق النتائج'
        ]
      },
      {
        phase: 'مرحلة الاستدامة',
        description: 'ضمان استمرارية التأثير',
        actions: [
          'بناء القدرات',
          'تأمين الموارد',
          'تطوير الهياكل',
          'نقل الخبرات'
        ]
      }
    ]
  }

  const practicalTips = [
    {
      category: 'قبل بدء المدرسة',
      tips: [
        'زيارة المدرسة والتعرف على المحيط',
        'التواصل مع المدير والمدرسين',
        'إعداد الطفل نفسياً',
        'جمع جميع الوثائق اللازمة'
      ]
    },
    {
      category: 'أثناء الدراسة',
      tips: [
        'الحفاظ على تواصل منتظم',
        'المشاركة في أنشطة المدرسة',
        'دعم الواجبات المنزلية',
        'الاحتفال بالنجاحات'
      ]
    },
    {
      category: 'مواجهة التحديات',
      tips: [
        'طلب المساعدة عند الحاجة',
        'التركيز على الحلول',
        'التعاون مع الفريق المدرسي',
        'الحفاظ على الموقف الإيجابي'
      ]
    },
    {
      category: 'دعم الطفل',
      tips: [
        'الاستماع لمشاعره',
        'تعزيز ثقته بنفسه',
        'تشجيع استقلاليته',
        'الاحتفال بجهوده'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container-custom section-padding">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="الرابط التشعبي">
          <ol className="flex items-center space-x-reverse space-x-2 text-sm">
            <li>
              <Link href="/" className="text-primary hover:underline font-arabic">الرئيسية</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600 font-arabic">دليل الأسر والجمعيات</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="gradient-secondary text-white rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic">
              دليل الأسر والجمعيات
            </h1>
            <p className="text-xl mb-8 text-green-50 leading-relaxed font-arabic max-w-4xl">
              دليل شامل لدعم الأسر والجمعيات في رحلة دمج الأطفال ذوي الإعاقة. يحتوي على استراتيجيات عملية للوالدية الإيجابية، بناء المشروع الأسري، والتعبئة الاجتماعية.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Heart className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">الوالدية الإيجابية</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Home className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">المشروع الأسري</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">دور الجمعيات</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <MessageCircle className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-bold font-arabic">التعبئة الاجتماعية</div>
              </div>
            </div>
          </div>
        </section>

        {/* Positive Parenting */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            الوالدية الإيجابية
          </h2>
          <div className="bg-linear-to-br from-green-50 to-blue-50 rounded-xl p-8">
            <p className="text-lg text-gray-700 font-arabic leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              {positiveParenting.description}
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {positiveParenting.principles.map((principle, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-3 font-arabic text-gray-800">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600 font-arabic leading-relaxed mb-4">
                    {principle.description}
                  </p>
                  <div className="space-y-2">
                    {principle.practices.map((practice, i) => (
                      <div key={i} className="flex items-start space-x-reverse space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-gray-700 font-arabic text-sm">{practice}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parental Competencies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            الكفايات الوالدية
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {parentalCompetencies.map((competency, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
                <div className="flex items-center space-x-reverse space-x-3 mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-bold font-arabic text-gray-800">
                    {competency.title}
                  </h3>
                </div>
                <p className="text-gray-600 font-arabic leading-relaxed mb-6">
                  {competency.description}
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold font-arabic text-gray-800 mb-3">المهارات:</h4>
                  <ul className="space-y-2">
                    {competency.skills.map((skill, i) => (
                      <li key={i} className="flex items-start space-x-reverse space-x-2">
                        <Star className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700 font-arabic text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Family Project */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            بناء المشروع الأسري للدمج
          </h2>
          <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-xl p-8">
            <p className="text-lg text-gray-700 font-arabic leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              {familyProjectStructure.description}
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {familyProjectStructure.phases.map((phase, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center space-x-reverse space-x-3 mb-4">
                    <Target className="h-8 w-8 text-purple-600" />
                    <h3 className="text-xl font-bold font-arabic text-gray-800">
                      {phase.phase}
                    </h3>
                  </div>
                  <p className="text-gray-600 font-arabic leading-relaxed mb-4">
                    {phase.description}
                  </p>
                  <div className="space-y-2">
                    {phase.steps.map((step, i) => (
                      <div key={i} className="flex items-start space-x-reverse space-x-2">
                        <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-gray-700 font-arabic text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Association Roles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            دور الجمعيات في المصاحبة
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {associationRoles.map((role, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center space-x-reverse space-x-3 mb-4">
                  <HandHelping className="h-8 w-8 text-green-600" />
                  <h3 className="text-xl font-bold font-arabic text-gray-800">
                    {role.title}
                  </h3>
                </div>
                <p className="text-gray-600 font-arabic leading-relaxed mb-6">
                  {role.description}
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold font-arabic text-gray-800 mb-3">الأنشطة:</h4>
                  <ul className="space-y-2">
                    {role.activities.map((activity, i) => (
                      <li key={i} className="flex items-start space-x-reverse space-x-2">
                        <ChevronRight className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-gray-700 font-arabic text-sm">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awareness Campaign */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            مراحل حملة التوعية
          </h2>
          <div className="bg-linear-to-br from-orange-50 to-red-50 rounded-xl p-8">
            <p className="text-lg text-gray-700 font-arabic leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              {awarenessCampaign.description}
            </p>
            <div className="space-y-6">
              {awarenessCampaign.stages.map((stage, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold font-arabic text-gray-800">
                      {stage.stage}
                    </h3>
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-arabic">
                      {stage.duration}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold font-arabic text-gray-800 mb-3">الأهداف:</h4>
                      <ul className="space-y-2">
                        {stage.objectives.map((objective, i) => (
                          <li key={i} className="flex items-start space-x-reverse space-x-2">
                            <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5 shrink-0" />
                            <span className="text-gray-700 font-arabic text-sm">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold font-arabic text-gray-800 mb-3">الأنشطة:</h4>
                      <ul className="space-y-2">
                        {stage.activities.map((activity, i) => (
                          <li key={i} className="flex items-start space-x-reverse space-x-2">
                            <Lightbulb className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                            <span className="text-gray-700 font-arabic text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Mobilization */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            مراحل التعبئة الاجتماعية
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {socialMobilization.phases.map((phase, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
                <h3 className="text-xl font-bold mb-4 font-arabic text-gray-800">
                  {phase.phase}
                </h3>
                <p className="text-gray-600 font-arabic leading-relaxed mb-6">
                  {phase.description}
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold font-arabic text-gray-800 mb-3">الإجراءات:</h4>
                  <ul className="space-y-2">
                    {phase.actions.map((action, i) => (
                      <li key={i} className="flex items-start space-x-reverse space-x-2">
                        <ChevronRight className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                        <span className="text-gray-700 font-arabic text-sm">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            نصائح عملية
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {practicalTips.map((category, index) => (
              <div key={index} className="bg-linear-to-br from-blue-50 to-green-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 font-arabic text-gray-800">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.tips.map((tip, i) => (
                    <li key={i} className="flex items-start space-x-reverse space-x-3">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-gray-700 font-arabic leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-linear-to-r from-primary to-secondary text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 font-arabic">
              هل أنت مستعد لبدء رحلة الدمج؟
            </h2>
            <p className="text-xl mb-8 text-blue-50 font-arabic leading-relaxed max-w-2xl mx-auto">
              استكشف مواردنا المتخصصة واحصل على الدعم اللازم لتحقيق نجاح طفلك في بيئة تعليمية دامجة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resources" className="button-primary bg-white text-primary hover:bg-gray-100">
                <BookOpen className="ml-2 h-5 w-5" />
                موارد إضافية
              </Link>
              <Link href="/teachers-guide" className="button-secondary border-2 border-white text-white hover:bg-white hover:text-primary">
                <Users className="ml-2 h-5 w-5" />
                دليل المدرسين
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}