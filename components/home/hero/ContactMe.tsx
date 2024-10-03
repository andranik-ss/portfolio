'use client'

import { StandardButton } from '@/components/buttons/StandardButton'

export function ContactMe() {
  return (
    <StandardButton onClick={() => document.getElementById('contact')?.scrollIntoView()}>Contact me</StandardButton>
  )
}
