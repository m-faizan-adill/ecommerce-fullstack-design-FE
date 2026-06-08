import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SavedForLater from "@/features/carts/components/SavedForLater";
import TrustFeatures from "@/features/carts/components/TrustFeatures";
import CartItemsList from "@/features/carts/components/CartItemsList";
import OrderSummary from "@/features/carts/components/OrderSummary";
import PromoBanner from "@/features/carts/components/PromoBanner";
import { getCarts } from "@/features/carts/services/cart.service";
import { ProfileIcon } from "@/assets";
import Link from "next/link";
import { Button } from "@/components/ui";

export default async function CartPage() {
  const carts = await getCarts();
  const isLoggedIn = false;

  return (
    <div className="bg-[#F7FAFC] min-h-screen flex flex-col font-sans">
      <Header showBackButton={true} title="Shopping cart" hideRightIcons={true} />


      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1">
        {!isLoggedIn ? (
          <div className="flex flex-col items-center justify-center py-12 bg-white rounded-xl border border-gray-200 shadow-sm max-w-md mx-auto my-8 p-8">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <ProfileIcon className="w-8 h-8" />
            </div>
            <h1 className="text-xl font-semibold text-[#1C1C1C] mb-2">Please sign in</h1>
            <p className="text-sm text-gray-500 text-center mb-6">
              Sign in to view your cart items, save products for later, and check out securely.
            </p>
            <Link href="/login" passHref className="w-full">
              <Button variant="filled" block>
                Log In / Register
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-semibold text-[#1C1C1C] mb-5">My cart ({carts?.length || 0})</h1>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">

              <div className="lg:col-span-3 w-full">
                <CartItemsList carts={carts} />
              </div>

              <div className="lg:col-span-1 w-full">
                <OrderSummary />
              </div>
            </div>

            <TrustFeatures />
            <SavedForLater />
            <PromoBanner />
          </>

        )
        }

      </main >

      <Footer />
    </div >
  );
}