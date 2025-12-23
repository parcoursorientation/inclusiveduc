
"use client"

import { useSession } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function WelcomeMessage() {
  const { data: session } = useSession()

  if (!session) {
    return null
  }

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'صباح الخير'
    if (hour < 18) return 'طاب يومك'
    return 'مساء الخير'
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-arabic">
          {getGreeting()}، {session.user.name || 'مستخدم'}!
        </CardTitle>
        <CardDescription className="font-arabic">
          مرحباً بعودتك إلى لوحة التحكم
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 font-arabic">
              البريد الإلكتروني:
            </p>
            <p className="font-medium">{session.user.email}</p>
          </div>
          <Badge variant={session.user.role === 'ADMIN' ? 'default' : 'secondary'}>
            {session.user.role === 'ADMIN' ? 'مدير' : 'مستخدم'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
