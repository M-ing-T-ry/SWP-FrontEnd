import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const LoginForm = () => {
  const handleSubmit = () => {};
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          placeholder="Enter your email"
          className=" focus-visible:ring-slate-300 "
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          placeholder="Enter your password"
          className=" focus-visible:ring-slate-300 "
        />
      </div>

      <Button className="w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
