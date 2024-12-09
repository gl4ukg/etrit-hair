import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD

  if (!email || !password) {
    console.error('ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env')
    process.exit(1)
  }

  try {
    const passwordHash = await hash(password, 12)
    
    const admin = await prisma.admin.upsert({
      where: { email },
      update: { passwordHash },
      create: {
        email,
        passwordHash
      }
    })

    console.log('Admin user created:', admin.email)
  } catch (error) {
    console.error('Error creating admin:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
