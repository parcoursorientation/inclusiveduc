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
  Tag,
  CheckCircle,
  XCircle
} from 'lucide-react'
import { useState } from 'react'
import ContactsTable from "./ContactsTable"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Contact {
  id: string
  name: string
  email: string
  subject: string
  message: string
  category: string
  createdAt: string
  updatedAt: string
}

interface DashboardContactsProps {
  contacts: Contact[]
}

export default function DashboardContacts({ contacts }: DashboardContactsProps) {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

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

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  const thisWeek = new Date(today)
  thisWeek.setDate(thisWeek.getDate() - 7)

  const todayContacts = contacts.filter(contact => {
    const contactDate = new Date(contact.createdAt)
    return contactDate >= today
  })

  const yesterdayContacts = contacts.filter(contact => {
    const contactDate = new Date(contact.createdAt)
    return contactDate >= yesterday && contactDate < today
  })

  const thisWeekContacts = contacts.filter(contact => {
    const contactDate = new Date(contact.createdAt)
    return contactDate >= thisWeek && contactDate < yesterday
  })

  const olderContacts = contacts.filter(contact => {
    const contactDate = new Date(contact.createdAt)
    return contactDate < thisWeek
  })

  return (
    <div className="space-y-6">
      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              <span className="font-arabic">إجمالي الرسائل</span>
              <MessageCircle className="h-5 w-5 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-arabic">{contacts.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              <span className="font-arabic">اليوم</span>
              <Calendar className="h-5 w-5 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-arabic">{todayContacts.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              <span className="font-arabic">هذا الأسبوع</span>
              <Calendar className="h-5 w-5 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-arabic">
              {todayContacts.length + yesterdayContacts.length + thisWeekContacts.length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center justify-between">
              <span className="font-arabic">غير معالجة</span>
              <XCircle className="h-5 w-5 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-arabic text-red-600">
              {contacts.filter(c => !c.updatedAt || c.updatedAt === c.createdAt).length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tableau des messages */}
      <Card>
        <CardHeader>
          <CardTitle className="font-arabic">رسائل التواصل</CardTitle>
          <CardDescription className="font-arabic">
            عرض وإدارة جميع الرسائل الواردة من نموذج التواصل
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 font-arabic">
              <TabsTrigger value="all">الكل</TabsTrigger>
              <TabsTrigger value="today">اليوم</TabsTrigger>
              <TabsTrigger value="yesterday">الأمس</TabsTrigger>
              <TabsTrigger value="week">هذا الأسبوع</TabsTrigger>
              <TabsTrigger value="older">أقدم</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-4">
              <ContactsTable contacts={contacts} setSelectedContact={setSelectedContact} getCategoryLabel={getCategoryLabel} getCategoryColor={getCategoryColor} />
            </TabsContent>

            <TabsContent value="today" className="mt-4">
              <ContactsTable contacts={todayContacts} setSelectedContact={setSelectedContact} getCategoryLabel={getCategoryLabel} getCategoryColor={getCategoryColor} />
            </TabsContent>

            <TabsContent value="yesterday" className="mt-4">
              <ContactsTable contacts={yesterdayContacts} setSelectedContact={setSelectedContact} getCategoryLabel={getCategoryLabel} getCategoryColor={getCategoryColor} />
            </TabsContent>

            <TabsContent value="week" className="mt-4">
              <ContactsTable contacts={thisWeekContacts} setSelectedContact={setSelectedContact} getCategoryLabel={getCategoryLabel} getCategoryColor={getCategoryColor} />
            </TabsContent>

            <TabsContent value="older" className="mt-4">
              <ContactsTable contacts={olderContacts} setSelectedContact={setSelectedContact} getCategoryLabel={getCategoryLabel} getCategoryColor={getCategoryColor} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Dialogue pour afficher les détails d'un message */}
      <Dialog open={!!selectedContact} onOpenChange={() => setSelectedContact(null)}>
        {selectedContact && (
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="font-arabic text-lg">تفاصيل الرسالة</DialogTitle>
              <DialogDescription className="font-arabic">
                عرض محتوى الرسالة ومعلومات المرسل
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium font-arabic">الاسم</span>
                  </div>
                  <p className="font-arabic">{selectedContact.name}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium font-arabic">البريد الإلكتروني</span>
                  </div>
                  <p className="font-arabic">{selectedContact.email}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium font-arabic">التصنيف</span>
                </div>
                <Badge className={getCategoryColor(selectedContact.category)}>
                  {getCategoryLabel(selectedContact.category)}
                </Badge>
              </div>

              <div className="space-y-2">
                <span className="text-sm font-medium font-arabic">الموضوع</span>
                <p className="font-arabic">{selectedContact.subject}</p>
              </div>

              <div className="space-y-2">
                <span className="text-sm font-medium font-arabic">الرسالة</span>
                <ScrollArea className="h-[150px] w-full rounded-md border p-4">
                  <p className="font-arabic whitespace-pre-wrap">{selectedContact.message}</p>
                </ScrollArea>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span className="font-arabic">
                  {format(new Date(selectedContact.createdAt), 'dd MMMM yyyy HH:mm', { locale: ar })}
                </span>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => setSelectedContact(null)} className="font-arabic">
                  إغلاق
                </Button>
                <Button className="font-arabic">
                  <Mail className="h-4 w-4 ml-2" />
                  الرد عبر البريد
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}


