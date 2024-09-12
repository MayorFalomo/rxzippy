import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { FormControl, FormField, FormItem, FormLabel } from "@/ui/form";
import { Textarea } from "@/ui/textarea";

// interface IProps {
//   name: string;
//   email: string;
//   message: string;
// }

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  message: z.string().min(5, {
    message: "Message must be at least 10 characters.",
  }),
});

export const ContactForm: React.FC = () => {
  type UserType = z.infer<typeof formSchema>;

  const form = useForm<UserType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit: SubmitHandler<UserType> = (values) => {
    try {
      console.log(values, "hello world");
    } catch (error) {
      console.log(error, "This is Error");
    }
  };

  return (
    <div className="w-full min-w-full">
      <FormProvider {...form}>
        <Form className="w-full" {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full"
          >
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Your Name"
                      className="w-full min-w-0"
                    />
                  </FormControl>
                  {form.formState.errors.name && (
                    <p className="text-red-500">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      placeholder="Your Email"
                      className="w-full min-w-0"
                    />
                  </FormControl>
                  {form.formState.errors.email && (
                    <p className="text-red-500">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </FormItem>
              )}
            />

            {/* Message Field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Your Message"
                      className="w-full"
                    />
                  </FormControl>
                  {form.formState.errors.message && (
                    <p className="text-red-500">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#508CFF] hover:bg-blue-600 mt-4"
            >
              Submit
            </Button>
          </form>
        </Form>
      </FormProvider>
    </div>
  );
};
