'use client';

import { useRouter } from 'next/navigation'
import LoginTemplate from '../../components/templates/login'

export default function LoginPage() {
  const router = useRouter()

  const handleSuccessLogin = () => {
    router.push('/home')
  }

  return <LoginTemplate onSuccess={handleSuccessLogin} />
}
