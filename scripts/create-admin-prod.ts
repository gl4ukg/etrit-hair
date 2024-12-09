import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

// Create a new PrismaClient instance with the production DATABASE_URL
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.argv[2] // Database URL will be passed as a command line argument
    }
  }
})

async function main() {
  const email = process.argv[3]
  const password = process.argv[4]

  if (!email || !password) {
    console.error('Usage: npm run create-admin-prod <DATABASE_URL> <ADMIN_EMAIL> <ADMIN_PASSWORD>')
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

    console.log('✅ Admin user created successfully!')
    console.log('Email:', admin.email)
    console.log('You can now log in at: /admin/login')
  } catch (error) {
    console.error('❌ Error creating admin:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
