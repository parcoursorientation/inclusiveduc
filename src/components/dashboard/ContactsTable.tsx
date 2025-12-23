"use client"

import { format } from 'date-fns'
import { ar } from 'date-fns/locale'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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

interface ContactsTableProps {
  contacts: Contact[]
  setSelectedContact: (contact: Contact) => void
  getCategoryLabel: (category: string) => string
  getCategoryColor: (category: string) => string
}

export default function ContactsTable({ contacts, setSelectedContact, getCategoryLabel, getCategoryColor }: ContactsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-arabic">الاسم</TableHead>
          <TableHead className="font-arabic">البريد الإلكتروني</TableHead>
          <TableHead className="font-arabic">الموضوع</TableHead>
          <TableHead className="font-arabic">التصنيف</TableHead>
          <TableHead className="font-arabic">التاريخ</TableHead>
          <TableHead className="text-left font-arabic">الإجراءات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contacts.length === 0 ? (
          <TableRow>
            <TableCell colSpan={6} className="text-center py-8 font-arabic">
              لا توجد رسائل في هذه الفترة
            </TableCell>
          </TableRow>
        ) : (
          contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell className="font-medium font-arabic">{contact.name}</TableCell>
              <TableCell className="font-arabic">{contact.email}</TableCell>
              <TableCell className="font-arabic max-w-50 truncate">{contact.subject}</TableCell>
              <TableCell>
                <Badge className={getCategoryColor(contact.category)}>
                  {getCategoryLabel(contact.category)}
                </Badge>
              </TableCell>
              <TableCell className="font-arabic">
                {format(new Date(contact.createdAt), 'dd MMM yyyy', { locale: ar })}
              </TableCell>
              <TableCell className="text-left">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedContact(contact)}
                  className="font-arabic"
                >
                  عرض
                </Button>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}
