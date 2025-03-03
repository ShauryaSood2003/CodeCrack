"use client";

import type React from "react";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { X, Plus, MessageSquarePlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

// Form schema
const formSchema = z.object({
  question: z.string().min(5, {
    message: "Question must be at least 5 characters.",
  }),
  referenceMaterial: z.string().min(10, {
    message: "Reference material must be at least 10 characters.",
  }),
  topic: z.string().min(2, {
    message: "Topic must be at least 2 characters.",
  }),
  subTopics: z.array(z.string()).min(1, {
    message: "Add at least one subtopic.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function AddDiscussionDialog() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newSubTopic, setNewSubTopic] = useState("");

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
      referenceMaterial: "",
      topic: "",
      subTopics: [],
    },
  });

  // Add a subtopic
  const addSubTopic = () => {
    if (newSubTopic.trim() === "") return;

    const currentSubTopics = form.getValues("subTopics");
    if (!currentSubTopics.includes(newSubTopic.trim())) {
      form.setValue("subTopics", [...currentSubTopics, newSubTopic.trim()]);
      form.clearErrors("subTopics");
    }
    setNewSubTopic("");
  };

  // Remove a subtopic
  const removeSubTopic = (index: number) => {
    const currentSubTopics = form.getValues("subTopics");
    form.setValue(
      "subTopics",
      currentSubTopics.filter((_, i) => i !== index)
    );
  };

  // Handle key press in subtopic input
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSubTopic();
    }
  };

  // Form submission handler
  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);

    // Here you would typically send the data to your API
    console.log(values);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setOpen(false);
    form.reset();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <MessageSquarePlus className="mr-2 h-4 w-4" />
          Start New Discussion
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Start a New Discussion</DialogTitle>
          <DialogDescription>
            Create a new discussion topic to engage with the community.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 pt-2"
          >
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="What would you like to discuss?"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    A clear, concise question to start the discussion.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="referenceMaterial"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reference Material</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Add context, examples, or reference material..."
                      className="min-h-24 resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide context or supporting information for your question.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Main Topic</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Programming, Science, Art"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    The primary category for this discussion.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subTopics"
              render={() => (
                <FormItem>
                  <FormLabel>Subtopics</FormLabel>
                  <div className="flex items-center space-x-2">
                    <FormControl>
                      <Input
                        placeholder="Add subtopics..."
                        value={newSubTopic}
                        onChange={(e) => setNewSubTopic(e.target.value)}
                        onKeyDown={handleKeyPress}
                      />
                    </FormControl>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addSubTopic}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {form.getValues("subTopics").map((subtopic, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="px-2 py-1"
                      >
                        {subtopic}
                        <button
                          type="button"
                          onClick={() => removeSubTopic(index)}
                          className="ml-1 rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        >
                          <X className="h-3 w-3" />
                          <span className="sr-only">Remove</span>
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <FormDescription>
                    Add relevant subtopics to help categorize your discussion.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create Discussion"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
