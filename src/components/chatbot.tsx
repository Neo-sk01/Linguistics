'use client'

import { useChat } from 'ai/react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar } from '@/components/ui/avatar'
import { Send, Bot, User } from 'lucide-react'
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from './ui/chat/chat-bubble'
import MessageLoading from './ui/chat/message-loading'

export default function Chatbot() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  })

  return (
    <Card className="w-[380px] h-[540px] flex flex-col shadow-none border-none">
      <CardHeader className="p-4 border-b">
        <CardTitle className="text-lg">Linguistics AI Assistant</CardTitle>
      </CardHeader>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatBubble key={message.id} variant={message.role === 'user' ? 'sent' : 'received'}>
              <ChatBubbleAvatar 
                fallback={message.role === 'user' ? 'U' : 'AI'}
                className="h-8 w-8"
              />
              <ChatBubbleMessage>
                {message.content}
              </ChatBubbleMessage>
            </ChatBubble>
          ))}
          
          {isLoading && (
            <ChatBubble variant="received">
              <ChatBubbleAvatar 
                fallback="AI"
                className="h-8 w-8"
              />
              <ChatBubbleMessage isLoading={true} />
            </ChatBubble>
          )}
          
          {messages.length === 0 && !isLoading && (
            <div className="text-center text-muted-foreground pt-8">
              <Bot className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
              <p>Hi! I'm your Linguistics AI assistant.</p>
              <p className="text-sm mt-2">How can I help you today?</p>
            </div>
          )}
        </div>
      </ScrollArea>
      
      <CardFooter className="p-4 border-t">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex gap-2">
            <input
              className="flex-1 px-3 py-2 text-sm rounded-md border border-input bg-background"
              placeholder="Type your message..."
              value={input}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardFooter>
    </Card>
  )
} 