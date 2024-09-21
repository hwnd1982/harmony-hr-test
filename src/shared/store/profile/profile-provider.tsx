'use client'

import React, { useEffect } from 'react'
import { Profile } from './profile'
import { useAppStore } from '@/app/store';

export function ProfileProvider({profile, children}: {profile: Profile | null, children: React.ReactNode}) {
  useEffect(() => {
    useAppStore.getState().setProfile(profile);
  }, [profile]);

  console.log(profile);

  return (
    <>
      {children}
    </>
  )
}
