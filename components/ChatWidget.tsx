'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MessageSquare, X } from 'lucide-react'
import Chatbot from '@/src/components/chatbot'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
        {isOpen && (
            <div className="bg-background rounded-lg shadow-xl border border-border mb-4">
                 <Chatbot />
            </div>
        )}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-16 h-16 shadow-lg flex items-center justify-center"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={30} /> : <MessageSquare size={30} />}
      </Button>
    </div>
  )
} 