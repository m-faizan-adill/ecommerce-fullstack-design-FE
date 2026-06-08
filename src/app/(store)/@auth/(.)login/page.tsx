"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export default function LoginModal() {
  const router = useRouter();

  const handleClose = () => {
    router.back(); 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Click outside to close mask */}
      <div className="absolute inset-0" onClick={handleClose} />
      
      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-md rounded-xl bg-white p-6 shadow-xl border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Sign In</h2>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
        
        {/* Render your Form UI elements here */}
        <div className="space-y-4 py-2">
          <p className="text-sm text-gray-500">Welcome back to our brand store.</p>
          <input type="email" placeholder="Email" className="w-full border p-2 rounded-lg" />
          <Button variant="filled" block>Continue</Button>
        </div>
      </div>
    </div>
  );
}