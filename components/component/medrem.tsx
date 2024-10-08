
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export function Medrem() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <main className="flex-1 grid grid-cols-[1fr_300px] gap-8 p-8">
        <div className="grid gap-8">
          <div className="grid gap-4">
            <h1 className="text-2xl font-semibold">Medication Calendar</h1>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <ChevronLeftIcon className="h-4 w-4" />
                  </Button>
                  <span className="font-medium">April 2023</span>
                  <Button variant="ghost" size="icon">
                    <ChevronRightIcon className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <CalendarIcon className="h-4 w-4" />
                  </Button>
                  <Button  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" variant="ghost" size="icon">
                    <ListIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2">
                <div className="flex h-12 items-center justify-center text-sm font-medium text-muted-foreground">
                  Sun
                </div>
                <div className="flex h-12 items-center justify-center text-sm font-medium text-muted-foreground">
                  Mon
                </div>
                <div className="flex h-12 items-center justify-center text-sm font-medium text-muted-foreground">
                  Tue
                </div>
                <div className="flex h-12 items-center justify-center text-sm font-medium text-muted-foreground">
                  Wed
                </div>
                <div className="flex h-12 items-center justify-center text-sm font-medium text-muted-foreground">
                  Thu
                </div>
                <div className="flex h-12 items-center justify-center text-sm font-medium text-muted-foreground">
                  Fri
                </div>
                <div className="flex h-12 items-center justify-center text-sm font-medium text-muted-foreground">
                  Sat
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-muted text-sm font-medium text-muted-foreground">
                  1
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-muted text-sm font-medium text-muted-foreground">
                  2
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-muted text-sm font-medium text-muted-foreground">
                  3
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-primary text-sm font-medium text-primary-foreground">
                  4
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-secondary text-sm font-medium text-secondary-foreground">
                  5
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-[green] text-sm font-medium text-green-50">
                  6
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-[red] text-sm font-medium text-red-50">
                  7
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-primary text-sm font-medium text-primary-foreground">
                  8
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-secondary text-sm font-medium text-secondary-foreground">
                  9
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-[green] text-sm font-medium text-green-50">
                  10
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-primary text-sm font-medium text-primary-foreground">
                  11
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-secondary text-sm font-medium text-secondary-foreground">
                  12
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-[green] text-sm font-medium text-green-50">
                  13
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-[red] text-sm font-medium text-red-50">
                  14
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-primary text-sm font-medium text-primary-foreground">
                  15
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-[red] text-sm font-medium text-secondary-foreground">
                  16
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-[green] text-sm font-medium text-green-50">
                  17
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-primary text-sm font-medium text-primary-foreground">
                  18
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-[red] text-sm font-medium text-secondary-foreground">
                  19
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-[green] text-sm font-medium text-green-50">
                  20
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-[red] text-sm font-medium text-red-50">
                  21
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-primary text-sm font-medium text-primary-foreground">
                  22
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-secondary text-sm font-medium text-secondary-foreground">
                  23
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-[green] text-sm font-medium text-green-50">
                  24
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-primary text-sm font-medium text-primary-foreground">
                  25
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-secondary text-sm font-medium text-secondary-foreground">
                  26
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-[green] text-sm font-medium text-green-50">
                  27
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-[red] text-sm font-medium text-red-50">
                  28
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-primary text-sm font-medium text-primary-foreground">
                  29
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-secondary text-sm font-medium text-secondary-foreground">
                  30
                </div>
                <div className="flex h-12 items-center justify-center rounded-lg bg-muted text-sm font-medium text-muted-foreground">
                  1
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-xl font-semibold">Medication Schedule</h2>
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Metformin</CardTitle>
                  <CardDescription>500mg, 2 times a day</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-2 w-2 rounded-full bg-green-500" />
                        <span>Taken</span>
                      </div>
                      <div className="text-sm text-muted-foreground">8:00 AM</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-2 w-2 rounded-full bg-red-500" />
                        <span>Missed</span>
                      </div>
                      <div className="text-sm text-muted-foreground">8:00 PM</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-2 w-2 rounded-full bg-blue-500" />
                        <span>Upcoming</span>
                      </div>
                      <div className="text-sm text-muted-foreground">8:00 AM</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Lisinopril</CardTitle>
                  <CardDescription>10mg, 1 time a day</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-2 w-2 rounded-full bg-green-500" />
                        <span>Taken</span>
                      </div>
                      <div className="text-sm text-muted-foreground">9:00 AM</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-2 w-2 rounded-full bg-blue-500" />
                        <span>Upcoming</span>
                      </div>
                      <div className="text-sm text-muted-foreground">9:00 AM</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Reminder Settings</CardTitle>
              <CardDescription>Customize your medication reminders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <div className="font-medium">Notifications</div>
                  <div className="grid gap-2">
                    <div className="-mx-2 flex items-center gap-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                      <BellIcon className="h-5 w-5" />
                      <div className="flex-1">
                        <div className="font-medium">SMS Reminders</div>
                        <div className="text-muted-foreground">
                          Get text message reminders for your medication schedule
                        </div>
                      </div>
                      <Switch />
                    </div>
                    <div className="-mx-2 flex items-center gap-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                      <BellIcon className="h-5 w-5" />
                      <div className="flex-1">
                        <div className="font-medium">Push Notifications</div>
                        <div className="text-muted-foreground">Get app notifications for your medication schedule</div>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="grid gap-2">
                  <div className="font-medium">Refill Management</div>
                  <div className="-mx-2 flex items-center gap-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                    <PillIcon className="h-5 w-5" />
                    <div className="flex-1">
                      <div className="font-medium">Automated Refills</div>
                      <div className="text-muted-foreground">Automatically refill your prescriptions</div>
                    </div>
                    <Switch />
                  </div>
                  <div className="-mx-2 flex items-center gap-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                    <PillBottleIcon className="h-5 w-5" />
                    <div className="flex-1">
                      <div className="font-medium">Preferred Pharmacy</div>
                      <div className="text-muted-foreground">Select your preferred pharmacy for refills</div>
                    </div>
                    <Select>
                      <SelectTrigger className="h-8 w-40">
                        <SelectValue placeholder="Select pharmacy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pharmacy1">Walgreens</SelectItem>
                        <SelectItem value="pharmacy2">CVS</SelectItem>
                        <SelectItem value="pharmacy3">Rite Aid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Connected Devices</CardTitle>
              <CardDescription>Integrate your smart medication devices</CardDescription>
            </CardHeader>
            <CardContent>
              <div />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function BellIcon(props: any) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function CalendarIcon(props: any) {
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
    </svg>
  )
}


function ChevronLeftIcon(props: any) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props: any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function ListIcon(props: any) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}


function PillBottleIcon(props: any) {
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
      <path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" />
      <path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
      <rect width="16" height="5" x="4" y="2" rx="1" />
    </svg>
  )
}


function PillIcon(props: any) {
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
