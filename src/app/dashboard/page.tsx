import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import DashboardOverview from '@/components/dashboard/DashboardOverview'
import DashboardContacts from '@/components/dashboard/DashboardContactsNew'
import LogoutButton from '@/components/auth/LogoutButton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  BarChart, 
  FileText, 
  Users, 
  MessageCircle,
  BookOpen,
  Calendar,
  TrendingUp,
  Download
} from 'lucide-react'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  // Vérifier si l'utilisateur est authentifié
  if (!session) {
    redirect('/login?callbackUrl=/dashboard')
  }

  // Récupérer les statistiques générales
  const totalContacts = await prisma.contact.count()
  const totalUsers = await prisma.user.count()
  const totalPosts = await prisma.post.count()
  
  // Récupérer les messages de contact récents
  const recentContacts = await prisma.contact.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    take: 5
  })

  // Récupérer les articles récents
  const recentPosts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    take: 5,
    include: {
      author: {
        select: {
          name: true
        }
      }
    }
  })

  // Calculer les statistiques mensuelles pour les contacts
  const today = new Date()
  const sixMonthsAgo = new Date(today)
  sixMonthsAgo.setMonth(today.getMonth() - 6)
  
  const monthlyContacts = await prisma.$queryRaw`
    SELECT 
      DATE_TRUNC('month', "createdAt") as month,
      COUNT(*) as count
    FROM "Contact"
    WHERE "createdAt" >= ${sixMonthsAgo}
    GROUP BY DATE_TRUNC('month', "createdAt")
    ORDER BY month ASC
  ` as { month: Date, count: number }[]

  return (
    <div className="container-custom section-padding">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-arabic mb-2">لوحة التحكم</h1>
            <p className="text-gray-600 font-arabic">نظرة عامة على إحصائيات الموقع والأنشطة الحالية</p>
          </div>
          <LogoutButton />
        </div>
      </div>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 font-arabic">
          <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
          <TabsTrigger value="contacts">رسائل التواصل</TabsTrigger>
          <TabsTrigger value="content">المحتوى</TabsTrigger>
          <TabsTrigger value="analytics">التحليلات</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6">
          <DashboardOverview 
            totalContacts={totalContacts}
            totalUsers={totalUsers}
            totalPosts={totalPosts}
            recentContacts={recentContacts}
            recentPosts={recentPosts}
            monthlyContacts={monthlyContacts}
          />
        </TabsContent>
        
        <TabsContent value="contacts" className="mt-6">
          <DashboardContacts contacts={await prisma.contact.findMany({
            orderBy: {
              createdAt: 'desc'
            }
          })} />
        </TabsContent>
        
        <TabsContent value="content" className="mt-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span className="font-arabic">إجمالي المقالات</span>
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold font-arabic">{totalPosts}</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span className="font-arabic">المقالات المنشورة</span>
                    <BookOpen className="h-5 w-5 text-muted-foreground" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold font-arabic">
                    {await prisma.post.count({ where: { published: true } })}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span className="font-arabic">مساهمو المحتوى</span>
                    <Users className="h-5 w-5 text-muted-foreground" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold font-arabic">
                    {await prisma.user.count({ where: { posts: { some: {} } } })}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-arabic">المقالات الأخيرة</CardTitle>
                <CardDescription className="font-arabic">
                  آخر المقالات المنشورة على الموقع
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPosts.length > 0 ? (
                    recentPosts.map((post) => (
                      <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <h4 className="font-medium font-arabic">{post.title}</h4>
                          <p className="text-sm text-muted-foreground font-arabic">
                            بواسطة {post.author.name} • {new Date(post.createdAt).toLocaleDateString('ar')}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {post.published ? (
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                              منشور
                            </span>
                          ) : (
                            <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                              مسودة
                            </span>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-muted-foreground font-arabic">
                      لا توجد مقالات حالياً
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics" className="mt-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-arabic flex items-center gap-2">
                  <BarChart className="h-5 w-5" />
                  رسائل التواصل الشهرية
                </CardTitle>
                <CardDescription className="font-arabic">
                  عدد رسائل التواصل خلال الأشهر الستة الماضية
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-medium font-arabic mb-2">مخطط البيانات</h3>
                    <p className="text-muted-foreground font-arabic">
                      سيتم عرض مخطط رسائل التواصل الشهرية هنا
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-arabic flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    تصدير البيانات
                  </CardTitle>
                  <CardDescription className="font-arabic">
                    قم بتصدير بيانات الموقع بتنسيقات مختلفة
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors font-arabic">
                      <FileText className="h-4 w-4" />
                      CSV
                    </button>
                    <button className="flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors font-arabic">
                      <FileText className="h-4 w-4" />
                      Excel
                    </button>
                    <button className="flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors font-arabic">
                      <FileText className="h-4 w-4" />
                      PDF
                    </button>
                    <button className="flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors font-arabic">
                      <FileText className="h-4 w-4" />
                      JSON
                    </button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="font-arabic flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    الفترات الزمنية
                  </CardTitle>
                  <CardDescription className="font-arabic">
                    عرض البيانات لفترات زمنية محددة
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors font-arabic">
                      اليوم
                    </button>
                    <button className="flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors font-arabic">
                      هذا الأسبوع
                    </button>
                    <button className="flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors font-arabic">
                      هذا الشهر
                    </button>
                    <button className="flex items-center justify-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors font-arabic">
                      هذا العام
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
