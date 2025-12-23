import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, category } = await request.json()

    // Valider les données
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont obligatoires' },
        { status: 400 }
      )
    }

    // Créer une nouvelle entrée dans la table Contact
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
        category: category || 'general',
      },
    })

    return NextResponse.json(
      { success: true, message: 'Message envoyé avec succès', data: contact },
      { status: 201 }
    )
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error)
    return NextResponse.json(
      { error: 'Erreur serveur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}