
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


export function Homepage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="bg-gradient-to-r from-[#0077B6] to-[#0077B6]/80 text-[white] py-20 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center mb-4 lg:text-6xl text-[white]">Integrated Medication Adherence and Management Platform</h1>
          <p className="text-lg text-center mb-8 max-w-2xl">
            Revolutionize your healthcare experience with our cutting-edge AI technology. Get real-time insights,
            personalized recommendations, and seamless patient care.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-[#FFCA28] px-6 py-3 text-sm font-medium text-[#0077B6] shadow transition-colors hover:bg-[#FFCA28]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Get Started
          </Link>
        </section>
        <section className="py-16 px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-[green]">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-[#e8e7e7] transition-shadow">
              <div className=" rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BadgeAlertIcon className="h-6 w-6 text-[#424242]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Real-Time Alerts</h3>
              <p className="text-[#424242]">
                Receive instant notifications for critical health events, empowering you to act quickly.
              </p>
            </div>
            <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-[#e8e7e7] transition-shadow">
              <div className=" rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <InfoIcon className="h-6 w-6 text-[#424242]" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Analysis</h3>
              <p className="text-[#424242]">
                Leverage advanced AI algorithms to gain deeper insights and personalized recommendations.
              </p>
            </div>
            <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-[#e8e7e7] transition-shadow">
              <div className=" rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <PillIcon className="h-6 w-6 text-[#424242]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Medication Adherence</h3>
              <p className="text-[#424242]">
                Ensure patients stay on track with their medication regimen through intelligent reminders and tracking.
              </p>
            </div>
            <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-md hover:shadow-lg  hover:bg-[#e8e7e7] transition-shadow">
              <div className=" rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <ShieldIcon className="h-6 w-6  text-[#424242]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Patient Safety with Monitoring</h3>
              <p className="text-[#424242]">
                Proactively identify and mitigate potential risks to ensure the highest level of patient safety.
              </p>
            </div>
            
          </div>
        </section>
        <section className="bg-[#F5F5F5] py-16 px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="Avatar 1" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h4 className="font-bold">John Doe</h4>
                  <div className="flex items-center text-[#FFCA28]">
                    <StarIcon className="h-5 w-5 mr-1" />
                    <StarIcon className="h-5 w-5 mr-1" />
                    <StarIcon className="h-5 w-5 mr-1" />
                    <StarIcon className="h-5 w-5 mr-1" />
                    <StarIcon className="h-5 w-5 mr-1" />
                  </div>
                </div>
              </div>
              <p className="text-[#424242]">
                "This platform has been a game-changer for my healthcare\n management. The real-time alerts and
                AI-powered insights have\n truly transformed my experience."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="Avatar 2" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h4 className="font-bold">Sarah Anderson</h4>
                  <div className="flex items-center text-[#FFCA28]">
                    <StarIcon className="h-5 w-5 mr-1" />
                    <StarIcon className="h-5 w-5 mr-1" />
                    <StarIcon className="h-5 w-5 mr-1" />
                    <StarIcon className="h-5 w-5 mr-1" />
                    <StarIcon className="h-5 w-5 mr-1" />
                  </div>
                </div>
              </div>
              <p className="text-[#424242]">
                "I'm amazed by the level of personalization and care this\n platform provides. It has truly transformed
                my healthcare\n experience."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt="Avatar 3" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h4 className="font-bold">Michael Johnson</h4>
                  <div className="flex items-center text-[#FFCA28]">
                    <StarIcon className="h-5 w-5 mr-1" />
                    <StarIcon className="h-5 w-5 mr-1" />
                    <StarIcon className="h-5 w-5 mr-1" />
                    <StarIcon className="h-5 w-5 mr-1" />
                    <StarIcon className="h-5 w-5 mr-1" />
                  </div>
                </div>
              </div>
              <p className="text-[#424242]">
                "I've been using this platform for months, and it has\n significantly improved my ability to manage my
                health\n conditions. Highly recommended!"
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#0077B6] text-white py-8 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <HospitalIcon className="h-8 w-8 text-[#FFCA28]" />
          <span className="text-xl font-bold text-[#FFCA28]">EcoMed</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Facebook" prefetch={false}>
              <FacebookIcon className="h-6 w-6 hover:text-[#FFCA28] transition-colors" />
            </Link>
            <Link href="#" aria-label="Twitter" prefetch={false}>
              <TwitterIcon className="h-6 w-6 hover:text-[#FFCA28] transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram" prefetch={false}>
              <InstagramIcon className="h-6 w-6 hover:text-[#FFCA28] transition-colors" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link href="#" className="hover:underline hover:text-[#FFCA28]" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline hover:text-[#FFCA28]" prefetch={false}>
            Privacy Policy
          </Link>
          <p className="text-sm text-[#E0E0E0]">&copy; 2024 Ecomed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function BadgeAlertIcon(props) {
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  )
}


function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function HospitalIcon(props: any) {
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


function InfoIcon(props : any) {
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


function MenuIcon(props: any) {
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
