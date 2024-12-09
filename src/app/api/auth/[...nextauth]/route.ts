import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth';

// Force Node runtime
export const runtime = 'nodejs';

// Create handler with explicit error handling
const handler = async (req: Request, context: any) => {
  try {
    const authHandler = await NextAuth(authOptions);
    return authHandler(req, context);
  } catch (error) {
    console.error('NextAuth Error:', error);
    return new Response(
      JSON.stringify({
        error: 'Internal Server Error',
        message: 'Authentication failed'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};

export { handler as GET, handler as POST };