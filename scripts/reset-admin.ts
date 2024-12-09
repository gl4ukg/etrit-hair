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
    // Delete existing admin
    await prisma.admin.deleteMany({})
    console.log('Deleted existing admin users')

    // Create new admin
    const passwordHash = await hash(password, 12)
    const admin = await prisma.admin.create({
      data: {
        email,
        passwordHash
      }
    })

    console.log('New admin user created:', admin.email)
  } catch (error) {
    console.error('Error resetting admin:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
