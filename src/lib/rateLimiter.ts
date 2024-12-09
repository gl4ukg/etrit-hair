import { RateLimiterMemory } from 'rate-limiter-flexible'

const rateLimiter = new RateLimiterMemory({
  points: 5, // 5 requests
  duration: 60, // per 1 minute
})

const bookingLimiter = new RateLimiterMemory({
  points: 3, // 3 booking attempts
  duration: 3600, // per hour
})

const contactLimiter = new RateLimiterMemory({
  points: 3, // 3 contact attempts
  duration: 3600, // per hour
})

export type RateLimitResponse = {
  success: boolean
}

export const rateLimit = {
  async general(ip: string): Promise<RateLimitResponse> {
    try {
      await rateLimiter.consume(ip)
      return { success: true }
    } catch {
      return { success: false }
    }
  },

  async booking(ip: string): Promise<RateLimitResponse> {
    try {
      await bookingLimiter.consume(ip)
      return { success: true }
    } catch {
      return { success: false }
    }
  },

  async contact(ip: string): Promise<RateLimitResponse> {
    try {
      await contactLimiter.consume(ip)
      return { success: true }
    } catch {
      return { success: false }
    }
  }
}
