import { execSync } from 'child_process'

async function main() {
  const databaseUrl = process.argv[2]

  if (!databaseUrl) {
    console.error('Usage: npm run init-prod-db <DATABASE_URL>')
    process.exit(1)
  }

  try {
    // Add ?connect_timeout=10 to the URL to prevent hanging
    const enhancedUrl = `${databaseUrl}&pgbouncer=false&connect_timeout=10`
    
    // Set the DATABASE_URL temporarily for the migration
    process.env.DATABASE_URL = enhancedUrl

    console.log('🔄 Creating initial migration...')
    execSync('npx prisma migrate dev --name init --skip-seed', { stdio: 'inherit' })
    
    console.log('🔄 Applying migration to production...')
    execSync('npx prisma migrate deploy', { stdio: 'inherit' })
    
    console.log('✅ Database initialization complete!')
  } catch (error) {
    console.error('❌ Error initializing database:', error)
    process.exit(1)
  }
}

main()
