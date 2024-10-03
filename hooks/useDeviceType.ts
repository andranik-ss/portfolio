import { headers } from 'next/headers'

export const isMobile = (userAgent: string): boolean => {
  return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent)
}

export function useDeviceType() {
  const userAgent = headers().get('user-agent') || ''

  return {
    isMobile: isMobile(userAgent),
  }
}
