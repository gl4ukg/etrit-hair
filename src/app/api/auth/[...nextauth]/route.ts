import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth';

const handler = NextAuth(authOptions);

// Export runtime configuration
export const runtime = 'nodejs'

export { handler as GET, handler as POST };