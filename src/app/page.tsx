"use client"

import {
  Clock,
  Globe,
  Hash,
  Mail,
  MapPin,
  Phone,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
} from "lucide-react"

import {
  Badge,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  People,
} from "@/shared"
import { Header, MainTopProfile } from "@/widgets"
import { useState } from "react"

export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image."

export default function Dashboard() {
  const [activeTabLink, setActiveTabLink] = useState(2);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <MainTopProfile activeIndex={activeTabLink} setActiveIndex={setActiveTabLink} />

        <div className="md: -mt-3.5">
          <div className="container">
            <div className="max-w-[1220px] mx-auto grid grid-cols-[225px_1fr] gap-6">
              <aside className="grid gap-4 relative z-20">
                <Card>
                  <CardContent className="flex flex-col gap-4">
                    <a href="tel:07911654321" className="flex items-center gap-2 text-sm font-medium text-black">
                      <Phone className="w-4 h-4" />
                      <span>07911 654321</span>
                    </a>
                    <a href="mailto:avd.yana@videorollnet" className="flex items-center gap-2 text-sm font-medium text-black">
                      <Mail className="w-4 h-4" />
                      <span>avd.yana@videorollnet</span>
                    </a>
                    <div className="flex gap-3.5">
                      <a href="#" className="text-black">
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                      <a href="#" className="text-black">
                        <FacebookIcon className="w-4 h-4" />
                      </a>
                      <a href="#" className="text-black">
                        <TwitterIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </CardContent>
                  
                </Card>
                <Card>
                  <CardContent>
                    <p className="text-sm font-medium text-black mb-4">Hire Date</p>
                    <p className="text-sm font-medium text-black mb-2">Sep. 3,2020</p>
                    <p className="text-sm font-medium text-black">3y - 9m - 20d</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col gap-2">
                    <p className="flex gap-2 text-sm font-medium text-black">
                      <Hash className="w-4 h-4" />
                      <span>5</span>
                    </p>
                    <p className="flex gap-2 text-sm font-medium text-black">
                      <Clock className="w-4 h-4" />
                      <span>Full-Time</span>
                    </p>
                    <p className="flex gap-2 text-sm font-medium text-black">
                      <People className="w-4 h-4" />
                      <span>Operations</span>
                    </p>
                    <p className="flex gap-2 text-sm font-medium text-black">
                      <Globe className="w-4 h-4" />
                      <span>Europe</span>
                    </p>
                    <p className="flex gap-2 text-sm font-medium text-black">
                      <MapPin className="w-4 h-4" />
                      <span>London, UK</span>
                    </p>
                  </CardContent>
                </Card>
              </aside>

              <Card className="relative z-0">
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead className="hidden xl:table-column">
                          Type
                        </TableHead>
                        <TableHead className="hidden xl:table-column">
                          Status
                        </TableHead>
                        <TableHead className="hidden xl:table-column">
                          Date
                        </TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Liam Johnson</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            liam@example.com
                          </div>
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          Sale
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          <Badge className="text-xs" variant="outline">
                            Approved
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                          2023-06-23
                        </TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Olivia Smith</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            olivia@example.com
                          </div>
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          Refund
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          <Badge className="text-xs" variant="outline">
                            Declined
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                          2023-06-24
                        </TableCell>
                        <TableCell className="text-right">$150.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Noah Williams</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            noah@example.com
                          </div>
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          Subscription
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          <Badge className="text-xs" variant="outline">
                            Approved
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                          2023-06-25
                        </TableCell>
                        <TableCell className="text-right">$350.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Emma Brown</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            emma@example.com
                          </div>
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          Sale
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          <Badge className="text-xs" variant="outline">
                            Approved
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                          2023-06-26
                        </TableCell>
                        <TableCell className="text-right">$450.00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Liam Johnson</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            liam@example.com
                          </div>
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          Sale
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          <Badge className="text-xs" variant="outline">
                            Approved
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                          2023-06-27
                        </TableCell>
                        <TableCell className="text-right">$550.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

