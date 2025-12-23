"use client"

import { format } from 'date-fns'
import { ar } from 'date-fns/locale'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Mail, 
  MessageCircle, 
  Calendar,
  User,
  FileText,
  Users,
  TrendingUp,
  Eye
} from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface DashboardOverviewProps {
  totalContacts: number
  totalUsers: number
  totalPosts: number
  recentContacts: any[]
  recentPosts: any[]
  monthlyContacts: { month: Date, count: number }[]
}

export default function DashboardOverview({ 
  totalContacts, 
  totalUsers, 
  totalPosts, 
  recentContacts, 
  recentPosts, 
  monthlyContacts 
}: DashboardOverviewProps) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  const thisWeek = new Date(today)
  thisWeek.setDate(thisWeek.getDate() - 7)

  const todayContacts = recentContacts.filter(contact => {
    const contactDate = new Date(contact.createdAt)
    return contactDate >= today
  })

  const yesterdayContacts = recentContacts.filter(contact => {
    const contactDate = new Date(contact.createdAt)
    return contactDate >= yesterday && contactDate < today
  })

  const thisWeekContacts = recentContacts.filter(contact => {
    const contactDate = new Date(contact.createdAt)
    return contactDate >= thisWeek && contactDate < yesterday
  })

  const getCategoryLabel = (category: string) => {
    const categories: Record<string, string> = {
      general: 'استفسار عام',
      technical: 'دعم تقني',
      training: 'تكوين وتدريب',
      partnership: 'شراكة',
      media: 'إعلام',
      complaint: 'شكوى',
    }
    return categories[category] || category
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      general: 'bg-blue-100 text-blue-800',
      technical: 'bg-purple-100 text-purple-800',
      training: 'bg-green-100 text-green-800',
      partnership: 'bg-yellow-100 text-yellow-800',
      media: 'bg-indigo-100 text-indigo-800',
      complaint: 'bg-red-100 text-red-800',
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="space-y-6">
      {/* Statistiques générales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              <span className="font-arabic">إجمالي الرسائل</span>
              <MessageCircle className="h-5 w-5 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-arabic">{totalContacts}</div>
            <p className="text-xs text-muted-foreground font-arabic">
              {todayContacts.length} اليوم
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              <span className="font-arabic">إجمالي المستخدمين</span>
              <Users className="h-5 w-5 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-arabic">{totalUsers}</div>
            <p className="text-xs text-muted-foreground font-arabic">
              مستخدمون مسجلون
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              <span className="font-arabic">إجمالي المقالات</span>
              <FileText className="h-5 w-5 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-arabic">{totalPosts}</div>
            <p className="text-xs text-muted-foreground font-arabic">
              مقالات منشورة
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Messages récents */}
        <Card>
          <CardHeader>
            <CardTitle className="font-arabic flex items-center gap-2">
              <Mail className="h-5 w-5" />
              رسائل التواصل الأخيرة
            </CardTitle>
            <CardDescription className="font-arabic">
              آخر الرسائل المستلمة من نموذج التواصل
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentContacts.length > 0 ? (
                recentContacts.map((contact) => (
                  <div key={contact.id} className="flex items-start space-x-reverse space-x-4 p-4 border rounded-lg">
                    <div className="bg-primary/10 rounded-full p-2">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium font-arabic truncate">{contact.name}</p>
                        <Badge className={getCategoryColor(contact.category)}>
                          {getCategoryLabel(contact.category)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground font-arabic truncate">{contact.subject}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span className="font-arabic">
                          {format(new Date(contact.createdAt), 'dd MMM yyyy HH:mm', { locale: ar })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground font-arabic">
                  لا توجد رسائل حالياً
                </div>
              )}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full font-arabic">
                عرض جميع الرسائل
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Articles récents */}
        <Card>
          <CardHeader>
            <CardTitle className="font-arabic flex items-center gap-2">
              <FileText className="h-5 w-5" />
              المقالات الأخيرة
            </CardTitle>
            <CardDescription className="font-arabic">
              آخر المقالات المنشورة على الموقع
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPosts.length > 0 ? (
                recentPosts.map((post) => (
                  <div key={post.id} className="flex items-start space-x-reverse space-x-4 p-4 border rounded-lg">
                    <div className="bg-primary/10 rounded-full p-2">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium font-arabic truncate">{post.title}</p>
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
                      <p className="text-sm text-muted-foreground font-arabic">
                        بواسطة {post.author.name}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span className="font-arabic">
                          {format(new Date(post.createdAt), 'dd MMM yyyy HH:mm', { locale: ar })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground font-arabic">
                  لا توجد مقالات حالياً
                </div>
              )}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full font-arabic">
                عرض جميع المقالات
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Statistiques mensuelles */}
      <Card>
        <CardHeader>
          <CardTitle className="font-arabic flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            إحصائيات رسائل التواصل الشهرية
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
              <div className="mt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-arabic">الشهر</TableHead>
                      <TableHead className="font-arabic text-right">عدد الرسائل</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {monthlyContacts.length > 0 ? (
                      monthlyContacts.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-arabic">
                            {format(new Date(item.month), 'MMMM yyyy', { locale: ar })}
                          </TableCell>
                          <TableCell className="font-arabic text-right">{item.count}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={2} className="text-center py-8 font-arabic">
                          لا توجد بيانات كافية لعرض المخطط
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
