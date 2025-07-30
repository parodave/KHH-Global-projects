'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/33781579222"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="outline" className="rounded-full text-green-600 border-green-500 hover:bg-green-50">
        <MessageCircle className="mr-2 h-4 w-4" />
        WhatsApp
      </Button>
    </Link>
  )
}
