'use client'
import React from 'react'
import { FormProfilePlayer } from '../../features/player/components/formProfile/formProfilePlayer'
import { FormProfileClub } from '../../features/club/components/formProfile/formProfile'

export const FormProfile = () => {
  return (
    <div>
       {/* <FormProfilePlayer></FormProfilePlayer>  */}
       <FormProfileClub></FormProfileClub>
    </div>
  )
}
