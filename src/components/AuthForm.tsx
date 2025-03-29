"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

type props = {
  type: "login" | "signUp";
};

function AuthForm({ type }: props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const isLoginForm = type === "login";

  const handleSubmit = (formDate: FormData) => {
    console.log("log form submitted");
  };

  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            required
            disabled={isPending}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            required
            disabled={isPending}
          />
        </div>
      </CardContent>
      <CardFooter className="mt-4 flex flex-col gap-6">
        <Button className="w-full cursor-pointer">
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            "Login"
          ) : (
            "Sign Up"
          )}
        </Button>
        <p className="text-xs">
          {isLoginForm
            ? "Don't have an account yet?"
            : "Already have an account?"}
          <Link
            href={isLoginForm ? "/signup" : "/login"}
            className={`text-blue-500 underline ml-1 ${
              isPending && "pointer-events-none opacity-50"
            }`}
          >
            {isLoginForm ? "Sign Up" : "Login"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
}

export default AuthForm;
