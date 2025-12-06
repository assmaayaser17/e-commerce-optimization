"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { registerAction } from "@/lib/api/auth/register.api";

export default function RegisterForm() {
  // State for server action
  const [state, formAction, isPending] = useActionState(registerAction, null);

  // Validation schema
  const registerSchema = z
    .object({
      name: z.string().min(1, "Name is required"),
      email: z.string().min(1, "Email is required").email("Invalid email"),
      password: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters"),
      rePassword: z.string().min(1, "Confirm password is required"),
      phone: z.string().optional(),
    })
    .refine((data) => data.password === data.rePassword, {
      message: "Passwords do not match",
      path: ["rePassword"],
    });

  type RegisterFields = z.infer<typeof registerSchema>;

  // React Hook Form
  const form = useForm<RegisterFields>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    mode: "onChange",
  });

  return (
    <div className="bg-white/20 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-[380px] mx-auto">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-white text-center mb-6">
        Register
      </h2>

      {/* Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("password", data.password);
            formData.append("rePassword", data.rePassword);
            if (data.phone) formData.append("phone", data.phone);
           startTransition(() => {
      formAction(formData);
    });
          })}
          className="space-y-4"
        >
          {/* Name field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
                    className="bg-white/20 border-white/20 text-white placeholder-white/50 rounded-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />

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

          {/* Confirm Password field */}
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm your password"
                    className="bg-white/20 border-white/20 text-white placeholder-white/50 rounded-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />

          {/* Phone field */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Phone (optional)</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your phone"
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
            {isPending ? "Registering..." : "Submit"}
          </Button>

          {/* Server error */}
          {state?.error && (
            <p className="text-red-400 text-sm mt-2 text-center">{state.error}</p>
          )}

          {/* Server success */}
          {state?.success && (
            <p className="text-green-400 text-sm mt-2 text-center">
              Registration successful!
            </p>
          )}
        </form>
      </Form>
    </div>
  );
}
