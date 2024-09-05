
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"

export function Dashboard() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={`flex min-h-screen flex-col bg-background ${darkMode ? "dark" : ""}`}>
      <main className="grid flex-1 grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader className="pb-4">
            <CardTitle>Health Overview</CardTitle>
            <CardDescription>Your overall health status and upcoming appointments.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Pulse Rate</CardTitle>
              </CardHeader>
              <CardContent className="">
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold ">72</div>
                  <Progress value={92} className="h-4 w-32 " />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold">3</div>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Blood Pressure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold">120/80</div>
                  <div className="text-sm text-muted-foreground">Normal</div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-2">
          <CardHeader className="pb-4">
            <CardTitle>Real-Time Alerts</CardTitle>
            <CardDescription>
              Notifications for potential drug interactions, missed doses, and refill reminders.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-red-500/20 p-2 text-red-500">
                  <TriangleAlertIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Potential Drug Interaction</div>
                  <p className="text-sm text-muted-foreground">
                    Your medication for high blood pressure may interact with your new antibiotic. Please consult your
                    doctor.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-yellow-500/20 p-2 text-yellow-500">
                  <CalendarCheckIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Missed Dose Reminder</div>
                  <p className="text-sm text-muted-foreground">
                    You missed your morning dose of Metformin. Please take it as soon as possible.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-500/20 p-2 text-blue-500">
                  <AlarmClockIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Refill Reminder</div>
                  <p className="text-sm text-muted-foreground">
                    Your prescription for Atorvastatin is due for a refill. Please contact your pharmacy.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-1">
          <CardHeader className="pb-4">
            <CardTitle>Medication Schedule</CardTitle>
            <CardDescription>Track your medication intake and stay on top of your schedule.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Metformin</div>
                  <p className="text-sm text-muted-foreground">Taken 2 times a day</p>
                </div>
                <Checkbox checked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Atorvastatin</div>
                  <p className="text-sm text-muted-foreground">Taken once a day</p>
                </div>
                <Checkbox checked={false} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Lisinopril</div>
                  <p className="text-sm text-muted-foreground">Taken once a day</p>
                </div>
                <Checkbox checked />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-2">
          <CardHeader className="pb-4">
            <CardTitle>AI-Powered Insights</CardTitle>
            <CardDescription>Predictive analytics to help you stay on top of your health.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div>
                <div className="font-medium">Diabetes Risk Prediction</div>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold">12%</div>
                  <Progress value={12} className="h-4 w-32" />
                </div>
              </div>
              <div>
                <div className="font-medium">Heart Disease Risk Prediction</div>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold">8%</div>
                  <Progress value={8} className="h-4 w-32" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

function AlarmClockIcon(props) {
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
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M5 3 2 6" />
      <path d="m22 6-3-3" />
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />
    </svg>
  )
}


function CalendarCheckIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  )
}


function CrossIcon(props) {
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
      <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z" />
    </svg>
  )
}


function MoonIcon(props) {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function SunIcon(props) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}


function TriangleAlertIcon(props) {
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}
