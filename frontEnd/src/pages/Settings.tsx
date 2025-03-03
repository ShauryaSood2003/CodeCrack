"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
  CalendarIcon,
  Coins,
  ExternalLink,
  Github,
  Globe,
  MapPin,
  Pencil,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Header from "@/components/header/Header";
import BottomNav from "@/components/header/BottomNavBar";

interface InfoField {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  points?: number;
  editable?: boolean;
  type?: "text" | "textarea" | "date" | "url";
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [date, setDate] = useState<Date>();
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<InfoField[]>([
    {
      id: "name",
      label: "Name",
      value: "Shaurya Sood",
      icon: <User className="h-4 w-4 text-muted-foreground" />,
      editable: true,
      type: "text",
    },
    {
      id: "gender",
      label: "Gender",
      value: "Male",
      icon: <User className="h-4 w-4 text-muted-foreground" />,
      editable: true,
      type: "text",
    },
    {
      id: "location",
      label: "Location",
      value: "India",
      icon: <MapPin className="h-4 w-4 text-muted-foreground" />,
      editable: true,
      type: "text",
    },
    {
      id: "birthday",
      label: "Birthday",
      value: "",
      icon: <CalendarIcon className="h-4 w-4 text-muted-foreground" />,
      points: 2,
      editable: true,
      type: "date",
    },
    {
      id: "summary",
      label: "Summary",
      value: "Tell us about yourself (interests, experience, etc.)",
      icon: <User className="h-4 w-4 text-muted-foreground" />,
      points: 2,
      editable: true,
      type: "textarea",
    },
    {
      id: "website",
      label: "Website",
      value: "",
      icon: <Globe className="h-4 w-4 text-muted-foreground" />,
      points: 2,
      editable: true,
      type: "url",
    },
    {
      id: "github",
      label: "Github",
      value: "https://github.com/ShauryaSood2003",
      icon: <Github className="h-4 w-4 text-muted-foreground" />,
      editable: true,
      type: "url",
    },
  ]);

  const handleSave = (id: string, newValue: string) => {
    setUserInfo(
      userInfo.map((field) =>
        field.id === id ? { ...field, value: newValue } : field
      )
    );
    setOpenDialog(null);
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  const completionPercentage =
    (userInfo.filter(
      (field) =>
        field.value &&
        field.value !== "Tell us about yourself (interests, experience, etc.)"
    ).length /
      userInfo.length) *
    100;

  return (
    <>
      <Header/>
      <div className="container mx-auto py-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
          <div className="sticky top-6 flex flex-row md:flex-col gap-6 mx-4">
            <div className="w-1/2 md:w-full">
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage
                        src="/placeholder.svg?height=96&width=96"
                        alt="Profile"
                      />
                      <AvatarFallback className="text-xl">
                        {getInitials(userInfo[0].value)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold">{userInfo[0].value}</h3>
                      <p className="text-sm text-muted-foreground">
                        {userInfo[2].value}
                      </p>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${completionPercentage}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Profile {completionPercentage.toFixed(0)}% complete
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="w-1/2 md:w-full">
              <Card>
                <CardContent className="p-0">
                  <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <TabsList className="w-full justify-start flex-col h-auto bg-transparent border-r-0">
                      <TabsTrigger
                        value="profile"
                        className="w-full justify-start data-[state=active]:bg-muted rounded-none py-3 px-4 border-b"
                      >
                        Profile
                      </TabsTrigger>
                      <TabsTrigger
                        value="account"
                        className="w-full justify-start data-[state=active]:bg-muted rounded-none py-3 px-4 border-b"
                      >
                        Account
                      </TabsTrigger>
                      <TabsTrigger
                        value="notifications"
                        className="w-full justify-start data-[state=active]:bg-muted rounded-none py-3 px-4 border-b"
                      >
                        Notifications
                      </TabsTrigger>
                      <TabsTrigger
                        value="privacy"
                        className="w-full justify-start data-[state=active]:bg-muted rounded-none py-3 px-4"
                      >
                        Privacy
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>

          </div>

          <div className="md:w-3/4">
            <Tabs value={activeTab} className="w-full">
              <TabsContent value="profile" className="m-0">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Profile Information</CardTitle>
                        <CardDescription>
                          Manage your personal information and how it appears to
                          others
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        <Coins className="h-3 w-3 mr-1" />
                        Earn points by completing your profile
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {userInfo.map((field) => (
                      <div key={field.id}>
                        <div className="flex items-center justify-between py-3">
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5">{field.icon}</div>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <p className="text-sm font-medium leading-none">
                                  {field.label}
                                </p>
                                {field.points && (
                                  <Badge
                                    variant="outline"
                                    className="text-xs bg-amber-500/10 text-amber-500 border-amber-500/20"
                                  >
                                    <Coins className="h-3 w-3 mr-1" />+
                                    {field.points}
                                  </Badge>
                                )}
                              </div>
                              <p
                                className={cn(
                                  "text-sm",
                                  !field.value && "text-muted-foreground italic",
                                  field.type === "url" &&
                                    field.value &&
                                    "text-primary underline"
                                )}
                              >
                                {field.value || "Not set"}
                                {field.type === "url" && field.value && (
                                  <ExternalLink className="h-3 w-3 inline ml-1" />
                                )}
                              </p>
                            </div>
                          </div>
                          {field.editable && (
                            <Dialog
                              open={openDialog === field.id}
                              onOpenChange={(open: any) =>
                                open
                                  ? setOpenDialog(field.id)
                                  : setOpenDialog(null)
                              }
                            >
                              <DialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="gap-1 text-muted-foreground hover:text-foreground"
                                >
                                  <Pencil className="h-3.5 w-3.5" />
                                  <span className="hidden sm:inline">Edit</span>
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Edit {field.label}</DialogTitle>
                                  <DialogDescription>
                                    Make changes to your{" "}
                                    {field.label.toLowerCase()}. Click save when
                                    you're done.
                                  </DialogDescription>
                                </DialogHeader>

                                {field.type === "textarea" ? (
                                  <div className="grid gap-4 py-4">
                                    <Label htmlFor={field.id}>
                                      {field.label}
                                    </Label>
                                    <Textarea
                                      id={field.id}
                                      defaultValue={field.value}
                                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                                      className="min-h-[120px]"
                                    />
                                  </div>
                                ) : field.type === "date" ? (
                                  <div className="grid gap-4 py-4">
                                    <Label htmlFor={field.id}>
                                      {field.label}
                                    </Label>
                                    <Popover>
                                      <PopoverTrigger asChild>
                                        <Button
                                          variant="outline"
                                          className={cn(
                                            "w-full justify-start text-left font-normal",
                                            !date && "text-muted-foreground"
                                          )}
                                        >
                                          <CalendarIcon className="mr-2 h-4 w-4" />
                                          {date
                                            ? format(date, "PPP")
                                            : "Select your birthday"}
                                        </Button>
                                      </PopoverTrigger>
                                      <PopoverContent className="w-auto p-0">
                                        <Calendar
                                          mode="single"
                                          selected={date}
                                          onSelect={setDate}
                                          initialFocus
                                        />
                                      </PopoverContent>
                                    </Popover>
                                  </div>
                                ) : (
                                  <div className="grid gap-4 py-4">
                                    <Label htmlFor={field.id}>
                                      {field.label}
                                    </Label>
                                    <Input
                                      id={field.id}
                                      defaultValue={field.value}
                                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                                      type={field.type === "url" ? "url" : "text"}
                                    />
                                  </div>
                                )}

                                <DialogFooter>
                                  <Button
                                    variant="outline"
                                    onClick={() => setOpenDialog(null)}
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    onClick={() => {
                                      if (field.type === "date" && date) {
                                        handleSave(field.id, format(date, "PPP"));
                                      } else {
                                        const input = document.getElementById(
                                          field.id
                                        ) as
                                          | HTMLInputElement
                                          | HTMLTextAreaElement;
                                        if (input)
                                          handleSave(field.id, input.value);
                                      }
                                    }}
                                  >
                                    Save
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          )}
                        </div>
                        <Separator />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="account" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>
                      Manage your account settings and preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Account settings will appear here
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>
                      Control how and when you receive notifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Notification settings will appear here
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="privacy" className="m-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Privacy Settings</CardTitle>
                    <CardDescription>
                      Manage your privacy and security preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Privacy settings will appear here
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <BottomNav/>
    </>
  );
}
