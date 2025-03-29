"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function LogoutButton() {
  const router = useRouter();
  const [loading, setloading] = useState(false);

  const handleLogOut = async () => {
    setloading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const errMessage = "error";

    if (!errMessage) {
      toast.success("Logged out", {
        description: "You have been successfully logged out",
      });
      router.push("/");
    } else {
      toast.error("Error", {
        description: errMessage,
      });
    }
    setloading(false);
  };

  return (
    <Button
      onClick={handleLogOut}
      variant="outline"
      className="w-24"
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button>
  );
}

export default LogoutButton;
