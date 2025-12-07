"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginAction } from "@/lib/api/auth/login.api";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { startTransition, useActionState } from "react";

export default function LoginForm() {
  // State
  const [state, formAction, isPending] = useActionState(loginAction, null);

  // Validation
  const loginSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  type LoginFields = z.infer<typeof loginSchema>;

  // React hook form
  const form = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  return (
    <>
      {/* Form  */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => {
            const formData = new FormData();
            formData.append("email", data.email);
            formData.append("password", data.password);
            startTransition(() => {
              formAction(formData);
            });
          })}
          className="space-y-4"
        >
          {/* Email field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    className="bg-white/20 border-white/20 text-white placeholder-white/50 rounded-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />

          {/* Password field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    className="bg-white/20 border-white/20 text-white placeholder-white/50 rounded-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />

          {/* Submit button */}
          <Button
            type="submit"
            disabled={isPending}
            className="w-full rounded-full py-3 bg-linear-to-r from-orange-400 to-pink-500 text-white font-semibold hover:opacity-90"
          >
            {isPending ? "Logging in..." : "Submit"}
          </Button>

          {/* Server error */}
          {state?.error && (
            <p className="text-red-400 text-sm mt-2 text-center">
              {state.error}
            </p>
          )}
        </form>
      </Form>
    </>
  );
}
