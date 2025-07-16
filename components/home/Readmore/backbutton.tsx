// app/articles/details/[slug]/BackButton.tsx
'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

export default function BackButton() {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="md:flex bg-white font-semibold rounded-2xl px-3 hidden py-2 items-center text-blue-600  hover:text-blue-800 mb-4"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Back to Methods
    </button>
  )
}
