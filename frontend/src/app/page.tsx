import Image from 'next/image'
import { FormRegister } from './pages/formRegister/formRegister'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormRegister/>
    </main>
  )
}
