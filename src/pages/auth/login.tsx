import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useLogin } from "@/hooks/auth/use-login";

import AuthLayout from "@/layouts/auth-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FloatingInput } from "@/components/ui/floating-label-input";
import { PasswordInput } from "@/components/ui/password-input";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.email(),
  password: z.string(),
  remember: z.boolean().default(false).optional(),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const { login, isPending } = useLogin();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    login(values, {
      onSettled: () => {
        form.reset();
      },
    });
  };

  return (
    <AuthLayout>
      <div className="space-y-6 mb-8">
        <h2 className="text-center text-6xl font-semibold">Sign In</h2>
        <p className="text-sm text-center text-slate-500">
          Just sign in if you have an account in here. Enjoy our Website
        </p>
      </div>
      <Card className="w-full lg:w-[480px]">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FloatingInput
                        id="floating-label-input-demo"
                        label="Email"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PasswordInput id="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-row justify-between">
                <div className="flex items-center gap-2">
                  <Input
                    type="checkbox"
                    {...form.register("remember")}
                    className="w-3.5 h-3.5"
                  />
                  <Label className="text-sm">Remember me</Label>
                </div>
                <Button asChild variant="link">
                  <Link href="#" className="text-sm">
                    Forgot Password?
                  </Link>
                </Button>
              </div>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Loading..." : "Sign In"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="flex items-center justify-center mt-8">
        <Button variant="link">
          <Link href="/auth/register">Don&apos;t have an account? Sign Up</Link>
        </Button>
      </div>
    </AuthLayout>
  );
}
