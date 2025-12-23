import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Créer un utilisateur administrateur par défaut
  const hashedPassword = await bcrypt.hash('admin123', 10)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  console.log('Utilisateur admin créé:', admin)

  // Créer quelques catégories de messages de contact
  await prisma.contactCategory.upsert({
    where: { id: 'general' },
    update: {},
    create: {
      id: 'general',
      name: 'استفسار عام',
      description: 'استفسارات عامة حول التربية الدامجة',
    },
  })

  await prisma.contactCategory.upsert({
    where: { id: 'technical' },
    update: {},
    create: {
      id: 'technical',
      name: 'دعم تقني',
      description: 'مشاكل تقنية أو طلبات مساعدة في استخدام الموقع',
    },
  })

  await prisma.contactCategory.upsert({
    where: { id: 'training' },
    update: {},
    create: {
      id: 'training',
      name: 'تكوين وتدريب',
      description: 'معلومات حول التكوينات والتدريبات المتاحة',
    },
  })

  await prisma.contactCategory.upsert({
    where: { id: 'partnership' },
    update: {},
    create: {
      id: 'partnership',
      name: 'شراكة',
      description: 'اقتراحات شراكة أو تعاون',
    },
  })

  await prisma.contactCategory.upsert({
    where: { id: 'media' },
    update: {},
    create: {
      id: 'media',
      name: 'إعلام',
      description: 'طلبات إعلامية أو صحفية',
    },
  })

  await prisma.contactCategory.upsert({
    where: { id: 'complaint' },
    update: {},
    create: {
      id: 'complaint',
      name: 'شكوى',
      description: 'شكاوى أو ملاحظات',
    },
  })

  console.log('Catégories de contact créées')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
