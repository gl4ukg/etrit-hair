import { execSync } from 'child_process'

async function main() {
  const databaseUrl = process.argv[2]

  if (!databaseUrl) {
    console.error('Usage: npm run setup-prod-db <DATABASE_URL>')
    process.exit(1)
  }

  try {
    // Set the DATABASE_URL temporarily for the migration
    process.env.DATABASE_URL = databaseUrl

    console.log('🔄 Running database migrations...')
    execSync('npx prisma migrate deploy', { stdio: 'inherit' })
    
    console.log('✅ Database setup complete!')
  } catch (error) {
    console.error('❌ Error setting up database:', error)
    process.exit(1)
  }
}

main()
