'use client';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@/shared/ui"
import { signIn } from "../actions";
import { useFormState } from "react-dom";


export default function LoginForm() {
  const [state, formAction] = useFormState(signIn, undefined);
  
  return (
    <Card className="w-full max-w-sm">
      <form action={formAction}>
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          {
            state ? 
            <span className="text-red-600">{`Error ${state.extensions.originalError.statusCode}: ${state.message}`}</span> :
            <span>Enter your email below to login to your account.</span> 
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" name="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" name="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" type="submit">Sign in</Button>
      </CardFooter>
      </form>
    </Card>
  )
}
