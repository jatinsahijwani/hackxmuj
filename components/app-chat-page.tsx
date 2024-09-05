'use client'

import { useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SendIcon, LockIcon, UnlockIcon } from 'lucide-react'

// Mock function to simulate AI responses
const getAIResponse = async(message: string) => {
  let finalMessage = '';
  let response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAxDBCUuOZNUVRDfI_7-1rRUXnYBVVtbiQ',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"contents":[{"parts":[{"text":`${message}`}]}]})
  })
  const data = await response.json();
  finalMessage = (data.candidates[0].content.parts[0].text);
  return { type: 'text', content: finalMessage };
}

type Message = {
  sender: 'user' | 'ai'
  content: string
  type: 'text' | 'image'
}

export function AppChatPage() {
  const scrollRef = useRef();
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isAuthorized, setIsAuthorized] = useState(false)

  const handleSend = async() => {
    if (input.trim() === '') return;
    const newMessages = [...messages, { sender: 'user', content: input, type: 'text' }];
    setMessages(newMessages);
    setInput('');
    const aiResponse = await getAIResponse(input);
    setMessages([...newMessages, { sender: 'ai', ...aiResponse }]);
  }

  const toggleAuthorization = () => {
    setIsAuthorized(!isAuthorized)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">AI Chatbot</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea ref={scrollRef} className="h-[80vh] pr-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                <div className={`flex items-start ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>{message.sender === 'user' ? 'U' : 'AI'}</AvatarFallback>
                  </Avatar>
                  <div className={`mx-2 ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-lg p-2 max-w-xs`}>
                    {message.type === 'text' ? (
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    ) : (
                      <img src={message.content} alt="AI generated image" className="rounded-lg" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-center space-x-2">
            <Input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button onClick={handleSend} disabled={!isAuthorized}>
              <SendIcon className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
            <Button 
            onClick={toggleAuthorization}
            variant={isAuthorized ? "default" : "outline"}
            className="ml-auto"
          >
            {isAuthorized ? <UnlockIcon className="mr-2 h-4 w-4" /> : <LockIcon className="mr-2 h-4 w-4" />}
            {isAuthorized ? 'Authorized' : 'Authorize'}
          </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}