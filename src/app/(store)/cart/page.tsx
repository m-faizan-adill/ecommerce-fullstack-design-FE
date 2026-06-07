import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SavedForLater from "@/features/carts/components/SavedForLater";
import TrustFeatures from "@/features/carts/components/TrustFeatures";
import CartItemsList from "@/features/carts/components/CartItemsList";
import OrderSummary from "@/features/carts/components/OrderSummary";
import PromoBanner from "@/features/carts/components/PromoBanner";
import { getCarts } from "@/features/carts/services/cart.service";

export default async function CartPage() {
  const carts = await getCarts();

  return (
    <div className="bg-[#F7FAFC] min-h-screen flex flex-col font-sans">
      <Header showBackButton={true} title="Shopping cart" hideRightIcons={true}/>

      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1">

        <h1 className="text-2xl font-semibold text-[#1C1C1C] mb-5">My cart (3)</h1>


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
      </main>

      <Footer />
    </div>
  );
}