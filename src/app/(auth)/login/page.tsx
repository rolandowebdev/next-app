'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import Link from 'next/link'

const Login = () => {
  return (
    <section className="flex w-full flex-col items-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-primary lg:text-5xl">
        Login
      </h1>
      <form className="mt-6 grid w-full max-w-sm gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password" />
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
