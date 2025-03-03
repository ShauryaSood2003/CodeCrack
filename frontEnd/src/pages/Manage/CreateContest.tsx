"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CalendarIcon, Clock, DollarSign, AlertCircle } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/header/Header";
import BottomNav from "@/components/header/BottomNavBar";

// Enums (replace with your actual enum values if different)
enum DifficultyTypes {
  EASY = "Easy",
  MEDIUM = "Medium",
  HARD = "Hard",
}

enum StatusType {
  DRAFT = "DRAFT",
  SCHEDULED = "SCHEDULED",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

// Form schema
const formSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  subTitle: z.string().min(3, {
    message: "Subtitle must be at least 3 characters.",
  }),
  rules: z.string().min(10, {
    message: "Rules must be at least 10 characters.",
  }),
  startDate: z.date({
    required_error: "Please select a date.",
  }),
  startTime: z.string({
    required_error: "Please select a time.",
  }),
  duration: z.coerce.number().min(1, {
    message: "Duration must be at least 1 minute.",
  }),
  penalty: z.coerce.number().min(0, {
    message: "Penalty cannot be negative.",
  }),
  prizePool: z.coerce.number().min(0, {
    message: "Prize pool cannot be negative.",
  }),
  cost: z.coerce.number().min(0, {
    message: "Cost cannot be negative.",
  }),
  level: z.nativeEnum(DifficultyTypes, {
    required_error: "Please select a difficulty level.",
  }),
  status: z.nativeEnum(StatusType, {
    required_error: "Please select a status.",
  }),
});

export default function CreateContestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      subTitle: "",
      rules: "",
      duration: 60,
      penalty: 0,
      prizePool: 0,
      cost: 0,
      status: StatusType.DRAFT,
    },
  });

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Combine date and time for startTime
    const dateTime = new Date(values.startDate);
    const [hours, minutes] = values.startTime.split(":").map(Number);
    dateTime.setHours(hours, minutes);

    const contestData = {
      ...values,
      startTime: dateTime,
    };

    // Here you would typically send the data to your API
    console.log(contestData);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);

    // Reset form or redirect
    // form.reset()
    // or redirect to contests list
  }

  return (
    <>
      <Header />
      <div className="w-full flex justify-center px-4">
        <div className="container  max-w-4xl py-10">
          <div className="mb-8 space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">
              Create New Contest
            </h1>
            <p className="text-muted-foreground">
              Fill in the details below to create a new contest. All fields are
              required unless specified otherwise.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Contest Details</CardTitle>
              <CardDescription>
                Provide the basic information about your contest.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Coding Challenge 2024"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            The main title of your contest.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subtitle</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Test your algorithm skills"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            A brief description or tagline.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="rules"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rules</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter contest rules and guidelines..."
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Detailed rules and guidelines for participants.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Separator />

                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Start Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={`w-full pl-3 text-left font-normal ${
                                    !field.value && "text-muted-foreground"
                                  }`}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormDescription>
                            The date when the contest starts.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="startTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Start Time</FormLabel>
                          <FormControl>
                            <div className="flex items-center">
                              <Input type="time" {...field} />
                              <Clock className="ml-2 h-4 w-4 text-muted-foreground" />
                            </div>
                          </FormControl>
                          <FormDescription>
                            The time when the contest starts.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-3">
                    <FormField
                      control={form.control}
                      name="duration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Duration (minutes)</FormLabel>
                          <FormControl>
                            <Input type="number" min={1} {...field} />
                          </FormControl>
                          <FormDescription>
                            How long the contest will run.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="level"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Difficulty Level</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select difficulty" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {Object.values(DifficultyTypes).map((level) => (
                                <SelectItem key={level} value={level}>
                                  {level.charAt(0) +
                                    level.slice(1).toLowerCase()}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            The difficulty level of the contest.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {Object.values(StatusType).map((status) => (
                                <SelectItem key={status} value={status}>
                                  {status.charAt(0) +
                                    status.slice(1).toLowerCase()}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Current status of the contest.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Separator />

                  <div className="grid gap-6 sm:grid-cols-3">
                    <FormField
                      control={form.control}
                      name="prizePool"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prize Pool</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <DollarSign className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                              <Input
                                type="number"
                                min={0}
                                className="pl-8"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormDescription>
                            Total prize amount to be distributed.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cost"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Entry Fee</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <DollarSign className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                              <Input
                                type="number"
                                min={0}
                                className="pl-8"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormDescription>
                            Cost to join the contest (0 for free).
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="penalty"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Penalty</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <AlertCircle className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                              <Input
                                type="number"
                                min={0}
                                className="pl-8"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormDescription>
                            Penalty for not solving any questions.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex justify-end space-x-4">
                    <Button variant="outline" type="button">
                      Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Creating..." : "Create Contest"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
