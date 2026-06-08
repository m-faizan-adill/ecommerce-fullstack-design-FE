import { Button } from "@/components/ui";
import Link from "next/link";

export default function StandaloneLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Sign In</h2>
        <div className="space-y-4">
          <input type="email" placeholder="Email" className="w-full border p-2 rounded-lg" />
          <Button variant="filled" block>Continue</Button>
        </div>
        <div className="mt-4 text-center">
          <Link href="/" className="text-sm text-blue-600 hover:underline">Return to Home</Link>
        </div>
      </div>
    </div>
  );
}