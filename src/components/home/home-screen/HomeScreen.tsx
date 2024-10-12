"use client"
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import { Button } from '@/components/ui/button'


const HomeScreen = () => {
  return (
    <div><LogoutLink><Button>Logout</Button></LogoutLink></div>
  )
}

export default HomeScreen;