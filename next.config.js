/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
}

const requiredEnvVars = [
  'DATABASE_URL',
  'NEXTAUTH_URL',
  'NEXTAUTH_SECRET',
  'ADMIN_EMAIL',
  'ADMIN_PASSWORD',
  'RESEND_API_KEY',
]

// Validate environment variables during build
if (process.env.NODE_ENV === 'production') {
  console.log(' Validating environment variables...')
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      throw new Error(` Required environment variable "${envVar}" is missing`)
    }
  }
  console.log(' All required environment variables are present')
}

module.exports = nextConfig
