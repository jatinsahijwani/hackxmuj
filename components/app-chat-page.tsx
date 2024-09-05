'use client'

import { useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SendIcon, LockIcon, UnlockIcon } from 'lucide-react'
import Link from "next/link"
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
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-[#0077B6] text-white py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <HospitalIcon className="h-8 w-8 text-[#FFCA28]" />
          <span className="text-xl font-bold text-[#FFCA28]">AI Chatbot</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:underline hover:text-[#FFCA28]" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:underline hover:text-[#FFCA28]" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="hover:underline hover:text-[#FFCA28]" prefetch={false}>
            Monitoring
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-[#FFCA28] px-4 py-2 text-sm font-medium text-[#0077B6] shadow transition-colors hover:bg-[#FFCA28]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Login/Signup
          </Link>
        </nav>
        <Button variant="outline" size="icon" className="md:hidden" aria-label="Toggle navigation menu">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </header>
      <Card className="w-full max-w-full">
        
        <CardContent>
          <ScrollArea ref={scrollRef} className="h-[76vh] pr-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4 mt-2 `}>
                <div className={`flex items-start ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <Avatar className="w-8 h-8 bg-[#215bac] rounded-lg ">
                    <AvatarFallback className='bg-[#215bac] rounded-lg  text-[white]' >{message.sender === 'user' ? 'U' : 'AI'}</AvatarFallback>
                  </Avatar>

                  <div className={`mx-2 ${message.sender === 'user' ? ' text-white bg-[#e4e3e3]' : 'bg-[#e4e3e3]'} rounded-lg p-2 max-w-xs`}>
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
            <Input className="border-[#2d76e3dd]"
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            
            <Button 
            onClick={toggleAuthorization}
            variant={isAuthorized ? "default" : "outline"}
            className="ml-auto bg-[#043681dd] hover:bg-[#26497b]  hover:text-[white] rounded-lg text-[white]"
          >
            <SendIcon className="h-4 w-4" /> 
          </Button>
            <Button 
            onClick={toggleAuthorization}
            variant={isAuthorized ? "default" : "outline"}
            className="ml-auto bg-[#043681dd] hover:bg-[#26497b] hover:text-[white] rounded-lg text-[white]"
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

function HospitalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 6v4" />
      <path d="M14 14h-4" />
      <path d="M14 18h-4" />
      <path d="M14 8h-4" />
      <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PillIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  )
}


function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
