import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminSignIn from "../signin/AdminSignIn";
import AdminSignUp from "../signup/AdminSignUp";

export function AdminAuth() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <Tabs defaultValue="signin" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">SignIn</TabsTrigger>
          <TabsTrigger value="signup">SignUp</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <AdminSignIn />
        </TabsContent>
        <TabsContent value="signup">
          <AdminSignUp />
        </TabsContent>
      </Tabs>
    </div>
  );
}
