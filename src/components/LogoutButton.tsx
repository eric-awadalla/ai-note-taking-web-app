"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { logoutUserAction } from "@/actions/users";

function LogoutButton() {
  const router = useRouter();
  const [loading, setloading] = useState(false);

  const handleLogOut = async () => {
    setloading(true);

    const { errorMessage } = await logoutUserAction();

    if (!errorMessage) {
      toast.success("Logged out", {
        description: "You have been successfully logged out",
      });
      router.push("/");
    } else {
      toast.error("Error", {
        description: errorMessage,
      });
    }
    setloading(false);
  };

  return (
    <Button
      onClick={handleLogOut}
      variant="outline"
      className="w-24 cursor-pointer"
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button>
  );
}

export default LogoutButton;
