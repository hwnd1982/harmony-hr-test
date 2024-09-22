"use client";

import { useAppStore } from "@/app/store";
import { Card, CardContent, People } from "@/shared";
import { Clock, FacebookIcon, Globe, Hash, LinkedinIcon, Mail, MapPin, Phone, TwitterIcon, UserCircle2 } from "lucide-react";

export function Aside() {
  const profile = useAppStore(state => state.profile);

  return (
    <aside className="hidden md:grid gap-4 relative z-20">
      <Card>
        <CardContent className="flex flex-col gap-4">
          <a href="tel:07911654321" className="flex items-center gap-2 text-sm font-medium text-black hover:opacity-70">
            <Phone className="w-4 h-4" />
            <span>07911 654321</span>
          </a>
          <a href="mailto:avd.yana@videorollnet" className="flex items-center gap-2 text-sm font-medium text-black hover:opacity-70">
            <Mail className="w-4 h-4" />
            <span>{profile?.email}</span>
          </a>
          <div className="flex gap-3.5">
            <a href="#" className="text-black hover:opacity-70">
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a href="#" className="text-black hover:opacity-70">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href="#" className="text-black hover:opacity-70">
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
      <Card>
        <CardContent className="flex flex-col gap-2">
          <p className="flex gap-2 mb-2 text-sm font-medium text-black">
            Direct Reports
          </p>
          <p className="flex gap-2 text-sm font-medium text-black">
            <UserCircle2 className="w-4 h-4" />
            <span>Shane</span>
          </p>

          <p className="flex gap-2 text-sm font-medium text-black">
            <UserCircle2 className="w-4 h-4" />
            <span>Nathan</span>
          </p>
          
          <p className="flex gap-2 text-sm font-medium text-black">
            <UserCircle2 className="w-4 h-4" />
            <span>Mitchell</span>
          </p>

          <p className="flex gap-2 text-sm font-medium text-black">
            <UserCircle2 className="w-4 h-4" />
            <span>Philip</span>
          </p>

          <p className="flex gap-2 text-sm font-medium text-black">
            <People className="w-4 h-4" />
            <span>4 More...</span>
          </p>
        </CardContent>
      </Card>
    </aside>
  )
}