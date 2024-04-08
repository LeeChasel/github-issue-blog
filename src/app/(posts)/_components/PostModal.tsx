"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { postSchema } from "../schema";

type PostFormValues = z.infer<typeof postSchema>;

type PostModalProps = {
  triggerBtnLabel: string;
  actionBtnLabel: string;
  title: string;
  onSubmit: (values: PostFormValues) => Promise<void>;
  defaultValues?: PostFormValues;
};

const defaultData: PostFormValues = {
  title: "",
  body: "",
};

export const PostModal = ({
  triggerBtnLabel,
  actionBtnLabel,
  title,
  onSubmit,
  defaultValues = defaultData,
}: PostModalProps) => {
  const form = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues,
  });

  const handleSubmitForm = async (values: PostFormValues) => {
    await onSubmit(values);
    form.reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{triggerBtnLabel}</Button>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmitForm)} className="space-y-8">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
            </DialogHeader>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>標題</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>內文</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="h-64 resize-none" />
                  </FormControl>
                  <FormDescription>至少30個字</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button>{actionBtnLabel}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
