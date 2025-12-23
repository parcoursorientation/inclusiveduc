import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, Users, GraduationCap, Home, HeartHandshake, Building, ChevronRight, CheckCircle, Star, BookOpen, Target, MessageCircle } from 'lucide-react'

export default function Personas() {
  const personas = [
    {
      title: 'الأسر',
      icon: Home,
      description: 'دعم شامل للوالدين في رحلة دمج أطفالهم',
      color: 'gradient-to-r from-blue-500 to-blue-600',
      backgroundColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      needs: [
        'فهم حقوق الطفل التعليمية',
        'التعرف على الإجراءات الإدارية',
        'دعم نفسي واجتماعي',
        'استراتيجيات دعم منزلي',
        'التواصل الفعال مع المدرسة'
      ],
      pathways: [
        {
          title: 'دمج طفلي',
          description: 'خطوات عملية لدمج طفلك في المدرسة',
          steps: [
            'التقييم والتشخيص',
            'اختيار المدرسة المناسبة',
            'تحضير الوثائق',
            'الاجتماع مع الفريق المدرسي',
            'المتابعة والتقييم'
          ]
        },
        {
          title: 'حقوقي',
          description: 'التعرف على حقوقك وحقوق طفلك',
          steps: [
            'الحق في التعلم',
            'الحق في الدعم',
            'الحق في المشاركة',
            'الحق في التكيف',
            'الحق في النجاح'
          ]
        },
        {
          title: 'الدعم المنزلي',
          description: 'استراتيجيات لدعم التعلم في المنزل',
          steps: [
            'خلق بيئة داعمة',
            'تنظيم وقت الدراسة',
          'استخدام وسائل مساعدة',
            'التعاون مع المدرسين',
            'الاحتفال بالنجاحات'
          ]
        },
        {
          title: 'الاستعداد للمدرسة',
          description: 'تحضير الطفل نفسياً واجتماعياً',
          steps: [
            'زيارة المدرسة',
            'التعرف على المعلم',
            'التحدث عن التغيير',
            'بناء الثقة',
            'تطوير المهارات الاجتماعية'
          ]
        }
      ]
    },
    {
      title: 'المدرسون',
      icon: GraduationCap,
      description: 'أدوات واستراتيجيات للمدرسين الدامجين',
      color: 'gradient-to-r from-green-500 to-green-600',
      backgroundColor: 'from-green-50 to-green-100',
      borderColor: 'border-green-200',
      needs: [
        'كفايات مهنية للدمج',
        'استراتيجيات تدريس دامجة',
        'أدوات تقييم مناسبة',
        'إدارة الفصل الدامج',
        'دعم فني وتربوي'
      ],
      pathways: [
        {
          title: 'تخطيط الحصص الدامجة',
          description: 'تصميم دروس تناسب جميع التلاميذ',
          steps: [
            'تحليل احتياجات التلاميذ',
            'تحديد أهداف التعلم',
            'اختيار استراتيجيات متنوعة',
            'إعداد مواد متكيفة',
            'تخطيط للتقييم'
          ]
        },
        {
          title: 'تدبير الفروق',
          description: 'استراتيجيات للتعامل مع التنوع',
          steps: [
            'استخدام مجموعات مرنة',
            'تكييف المحتوى',
            'تنويع طرق التقييم',
            'توفير خيارات متعددة',
            'دعم التعلم الفردي'
          ]
        },
        {
          title: 'دعم التلاميذ',
          description: 'استراتيجيات حسب نوع الإعاقة',
          steps: [
            'تحديد الاحتياجات الخاصة',
            'استخدام وسائل مساعدة',
            'تكييف التواصل',
            'توفير وقت إضافي',
            'التعاون مع الأخصائيين'
          ]
        },
        {
          title: 'التقييم الدامج',
          description: 'طرق تقييم عادلة وشاملة',
          steps: [
            'تنويع أدوات التقييم',
            'تكيف الاختبارات',
            'استخدام الملاحظة',
            'تقييم المشاركة',
            'تغذية راجعة بناءة'
          ]
        }
      ]
    },
    {
      title: 'المديرون',
      icon: Building,
      description: 'قيادة عملية الدمج على مستوى المؤسسة',
      color: 'gradient-to-r from-purple-500 to-purple-600',
      backgroundColor: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200',
      needs: [
        'مشروع مؤسسة دامجة',
        'إدارة الموارد البشرية',
        'تطوير الشراكات',
        'تقييم سيرورة الدمج',
        'تعبئة الفاعلين'
      ],
      pathways: [
        {
          title: 'مشروع المؤسسة الدامجة',
          description: 'بناء خطة استراتيجية للدمج',
          steps: [
            'تشخيص الوضع الحالي',
            'تحديد الأهداف الاستراتيجية',
            'تعبئة الفريق',
            'تخصيص الموارد',
            'وضع خطة عمل'
          ]
        },
        {
          title: 'الولوجيات',
          description: 'ضمان إمكانية الوصول للجميع',
          steps: [
            'تقييم البنية التحتية',
            'تخطيط التحسينات',
            'توفير الموارد',
            'ضمان الصيانة',
            'التقييم المستمر'
          ]
        },
        {
          title: 'تعبئة الفاعلين',
          description: 'إشراك جميع الشركاء في العملية',
          steps: [
            'تحديد الفاعلين',
            'تنظيم اللقاءات',
            'بناء الثقة',
            'تحديد الأدوار',
            'متابعة التنفيذ'
          ]
        },
        {
          title: 'تقييم الدمج',
          description: 'قياس نجاح عملية الدمج',
          steps: [
            'تحديد مؤشرات النجاح',
            'جمع البيانات',
            'تحليل النتائج',
            'إعداد التقارير',
            'التخطيط للتحسين'
          ]
        }
      ]
    },
    {
      title: 'الجمعيات',
      icon: HeartHandshake,
      description: 'دعم الجمعيات في أنشطة المناصرة والتوعية',
      color: 'gradient-to-r from-orange-500 to-orange-600',
      backgroundColor: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200',
      needs: [
        'حملات توعية',
        'مناصرة حقوقية',
        'دعم أسري',
        'تكوين متخصص',
        'شراكات فعالة'
      ],
      pathways: [
        {
          title: 'حملات التوعية',
          description: 'تخطيط وتنفيذ حملات فعالة',
          steps: [
            'تحديد الجمهور المستهدف',
            'صياغة الرسائل',
            'اختيار القنوات',
            'تنفيذ الأنشطة',
            'تقييم الأثر'
          ]
        },
        {
          title: 'المواكبة الأسرية',
          description: 'دعم الأسر في رحلة الدمج',
          steps: [
            'الاستماع والتوجيه',
            'توفير المعلومات',
            'ربط الأسر',
            'تنظيم ورشات',
            'المتابعة الدورية'
          ]
        },
        {
          title: 'مناصرة الحقوق',
          description: 'الدفاع عن حقوق الأطفال',
          steps: [
            'تحديد القضايا',
            'بناء التحالفات',
            'الضغط السياسي',
            'الإعلام',
            'المتابعة القانونية'
          ]
        },
        {
          title: 'الشراكات',
          description: 'بناء علاقات فعالة مع الشركاء',
          steps: [
            'تحديد الشركاء',
            'بناء الثقة',
            'تحديد الأدوار',
            'تنسيق الأنشطة',
            'تقييم الشراكة'
          ]
        }
      ]
    }
  ]

  const commonResources = [
    {
      title: 'دليل التربية الدامجة',
      description: 'مرجع شامل للجميع',
      icon: BookOpen,
      link: '/resources'
    },
    {
      title: 'نماذج عملية',
      description: 'نماذج جاهزة للاستخدام',
      icon: Target,
      link: '/resources'
    },
    {
      title: 'التشريعات الوطنية',
      description: 'الإطار القانوني والحقوقي',
      icon: MessageCircle,
      link: '/legislation'
    },
    {
      title: 'الأسئلة الشائعة',
      description: 'أجوبة على الاستفسارات المتكررة',
      icon: MessageCircle,
      link: '/faq'
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
            <li className="text-gray-600 font-arabic">مخاطبونا</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="gradient-primary text-white rounded-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic">
              مسارات مخصصة لكل فئة
            </h1>
            <p className="text-xl mb-8 text-blue-50 leading-relaxed font-arabic max-w-4xl">
              محتوى مصمم خصيصاً لتلبية احتياجات كل شريحة من شركاء التربية الدامجة. اختر فئتك لاكتشاف المسارات والموارد المناسبة لك.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {personas.map((persona, index) => {
                const Icon = persona.icon
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors duration-200 cursor-pointer">
                    <Icon className="h-12 w-12 mx-auto mb-3 text-yellow-300" />
                    <div className="font-bold font-arabic text-lg">{persona.title}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Personas Cards */}
        <section className="mb-16">
          <div className="space-y-12">
            {personas.map((persona, index) => {
              const Icon = persona.icon
              return (
                <div key={index} className={`bg-linear-to-r ${persona.backgroundColor} rounded-2xl p-8 border-2 ${persona.borderColor}`}>
                  <div className="flex items-center space-x-reverse space-x-6 mb-8">
                    <div className={`w-20 h-20 bg-linear-to-r ${persona.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2 font-arabic text-gray-800">
                        {persona.title}
                      </h2>
                      <p className="text-lg text-gray-600 font-arabic leading-relaxed">
                        {persona.description}
                      </p>
                    </div>
                  </div>

                  {/* Needs Section */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 font-arabic text-gray-800">أهم احتياجاتك:</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {persona.needs.map((need, i) => (
                        <div key={i} className="bg-white rounded-lg p-4 shadow-md">
                          <div className="flex items-center space-x-reverse space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                            <span className="text-gray-700 font-arabic">{need}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pathways Section */}
                  <div>
                    <h3 className="text-xl font-bold mb-6 font-arabic text-gray-800">مساراتك المتخصصة:</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {persona.pathways.map((pathway, i) => (
                        <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                          <h4 className="text-lg font-bold mb-3 font-arabic text-gray-800">
                            {pathway.title}
                          </h4>
                          <p className="text-gray-600 font-arabic leading-relaxed mb-4">
                            {pathway.description}
                          </p>
                          <div className="space-y-3">
                            {pathway.steps.map((step, j) => (
                              <div key={j} className="flex items-start space-x-reverse space-x-3">
                                <span className="w-8 h-8 bg-linear-to-r text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0" style={{background: 'linear-gradient(to right, #005F99, #27AE60)'}}>
                                  {j + 1}
                                </span>
                                <span className="text-gray-700 font-arabic text-sm leading-relaxed">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Common Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            موارد مشتركة للجميع
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonResources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <Link
                  key={index}
                  href={resource.link}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group"
                >
                  <div className="w-16 h-16 bg-linear-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-arabic text-gray-800 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 font-arabic text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary font-arabic text-sm">
                    اكتشف المزيد
                    <ChevronRight className="mr-2 h-4 w-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 font-arabic text-gray-800 text-center">
            تجارب واقعية من الميدان
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                persona: 'أمينة، أم لطفل توحدي',
                category: 'الأسر',
                content: 'المسارات المخصصة ساعدتني على فهم حقوقي وخطوات عملية لدمج طفلي بنجاح في المدرسة العادية.',
                rating: 5
              },
              {
                persona: 'محمد، مدير مدرسة',
                category: 'المديرون',
                content: 'مشروع المؤسسة الدامجة وفر لنا خطة واضحة وقابلة للتطبيق. النتائج كانت مذهلة.',
                rating: 5
              },
              {
                persona: 'فاطمة، مدرسة',
                category: 'المدرسون',
                content: 'استراتيجيات تدبير الفروق وتخطيط الحصص غيرت طريقي في التعليم. أصبحت أكثر ثقة وفعالية.',
                rating: 5
              },
              {
                persona: 'عبدالرحيم، جمعية الأمل',
                category: 'الجمعيات',
                content: 'حملات التوعية والمناصرة أصبحت أكثر تنظيماً وفعالية بفضل الأدوات المتاحة.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 font-arabic leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold font-arabic text-gray-800">{testimonial.persona}</div>
                  <div className="text-sm text-gray-600 font-arabic">{testimonial.category}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-linear-to-r from-primary to-secondary text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6 font-arabic">
              هل أنت مستجد في التربية الدامجة؟
            </h2>
            <p className="text-xl mb-8 text-blue-50 font-arabic leading-relaxed max-w-2xl mx-auto">
              ابدأ بفهم الأساسيات ثم اختر المسار المناسب لك. نحن هنا لدعمك في كل خطوة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/what-is-inclusive-education" className="button-primary bg-white text-primary hover:bg-gray-100">
                ابدأ بالأساسيات
              </Link>
              <Link href="/contact" className="button-secondary border-2 border-white text-white hover:bg-white hover:text-primary">
                احصل على دعم مخصص
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}