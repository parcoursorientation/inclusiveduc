import { prisma } from '../src/lib/prisma'
import bcrypt from 'bcryptjs'

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
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      name: 'Alice',
    },
  })

  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      name: 'Bob',
    },
  })

  console.log({ alice, bob })

  const post1 = await prisma.post.create({
    data: {
      title: 'Hello World',
      content: 'This is my first post',
      published: true,
      authorId: alice.id,
    },
  })

  const post2 = await prisma.post.create({
    data: {
      title: 'Prisma is awesome',
      content: 'I love using Prisma with Next.js',
      published: true,
      authorId: bob.id,
    },
  })

  console.log({ post1, post2 })

  // Ajouter des données de test pour la table Contact
  const contact1 = await prisma.contact.create({
    data: {
      name: 'فاطمة البقالي',
      email: 'fatima@example.com',
      subject: 'استفسار حول التربية الدامجة',
      message: 'أود معرفة المزيد عن برامج التربية الدامجة التي تقدمونها للأطفال ذوي الاحتياجات الخاصة.',
      category: 'general'
    },
  })

  const contact2 = await prisma.contact.create({
    data: {
      name: 'محمد أمين',
      email: 'mohammed@example.com',
      subject: 'مشكلة تقنية',
      message: 'لا أتمكن من الوصول إلى موارد التدريب على موقعكم. هل يمكنكم المساعدة؟',
      category: 'technical'
    },
  })

  const contact3 = await prisma.contact.create({
    data: {
      name: 'سعيدة الرحالي',
      email: 'saida@example.com',
      subject: 'اقتراح شراكة',
      message: 'نحن جمعية مهتمة بالتربية الدامجة وودعنا اقتراح شراكة مع مركزكم.',
      category: 'partnership'
    },
  })

  console.log({ contact1, contact2, contact3 })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
