
"use client"

import { useSession } from 'next-auth/react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function UserProfile() {
  const { data: session } = useSession()

  if (!session) {
    return null
  }

  const userInitials = session.user.name
    ? session.user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
    : session.user.email?.substring(0, 2).toUpperCase() || 'U'

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarFallback className="text-lg">{userInitials}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="font-arabic">
            {session.user.name || 'مستخدم'}
          </CardTitle>
          <CardDescription>{session.user.email}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <span className="text-sm font-arabic">الدور:</span>
          <Badge variant={session.user.role === 'ADMIN' ? 'default' : 'secondary'}>
            {session.user.role === 'ADMIN' ? 'مدير' : 'مستخدم'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
