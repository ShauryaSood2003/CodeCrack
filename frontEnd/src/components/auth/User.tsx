import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserSignIn from "../signin/UserSignIn";
import UserSignUp from "../signup/UserSignUp";

export function UserAuth() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <Tabs defaultValue="signin" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">SignIn</TabsTrigger>
          <TabsTrigger value="signup">SignUp</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <UserSignIn />
        </TabsContent>
        <TabsContent value="signup">
          <UserSignUp />
        </TabsContent>
      </Tabs>
    </div>
  );
}
