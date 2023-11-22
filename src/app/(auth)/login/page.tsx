'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import Link from 'next/link'
import { FormEvent } from 'react'

const Login = () => {
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password')
      })
    })
  }

  return (
    <section className="flex w-full flex-col items-center">
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-primary">
        Login
      </h1>
      <form onSubmit={handleLogin} className="mt-6 grid w-full max-w-sm gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <Button className="mt-2" type="submit">
          Login
        </Button>
      </form>
      <p className="mt-2 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{' '}
        <Link
          href="/register"
          className={buttonVariants({ variant: 'link', className: 'px-1' })}
        >
          Register
        </Link>
      </p>
    </section>
  )
}

export default Login
