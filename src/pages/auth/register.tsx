import Link from "next/link";

import AuthLayout from "@/layouts/auth-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  FloatingInput,
  FloatingLabel,
} from "@/components/ui/floating-label-input";

export default function Register() {
  return (
    <AuthLayout>
      <div className="space-y-6 mb-8">
        <h2 className="text-center text-6xl font-semibold">Register</h2>
        <p className="text-sm text-center text-slate-500">
          Let’s Sign up first for enter into Square Website. Uh She Up!
        </p>
      </div>
      <Card>
        <CardContent>
          <div>
            <p>Login</p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <div className="flex flex-col md:flex-row gap-4">
              <Button
                asChild
                variant="secondary"
                className="flex-none order-1 md:order-0"
              >
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button type="submit" className="flex-1">
                Register
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
