import { ShoppingCart } from "lucide-react";
import Button from "../ui/Button";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      {/* Newsletter */}
      <div className="text-center py-8 border-b border-gray-100">
        <h3 className="font-medium text-gray-800 mb-1">Subscribe on our newsletter</h3>
        <p className="text-sm text-gray-500 mb-4">Get daily news on upcoming offers from many suppliers all over the world</p>
        <div className="flex justify-center gap-2 max-w-sm mx-auto">
          <div className="flex flex-1 border border-gray-300 rounded overflow-hidden">
            <span className="px-3 text-gray-400 flex items-center text-sm">✉</span>
            <input type="email" placeholder="Email" className="flex-1 py-2 text-sm outline-none" />
          </div>
          {/* <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
            Subscribe
          </button> */}
          <Button variant="filled" size="md">Subscribe</Button>

        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-5 gap-6">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 font-semibold text-gray-800 mb-3">
            <div className="w-7 h-7 bg-blue-600 rounded flex items-center justify-center">
              <ShoppingCart size={14} className="text-white" />
            </div>
            Brand
          </div>
          <p className="text-xs text-gray-500 mb-3">Best information about the company goes here but now lorem ipsum is</p>
          <div className="flex gap-2">
            {["f", "t", "in", "be", "@"].map((s) => (
              <a key={s} href="#" className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-500 hover:border-blue-600 hover:text-blue-600">
                {s}
              </a>
            ))}
          </div>
        </div>

        {[
          { title: "About", links: ["About Us", "Find store", "Categories", "Blogs"] },
          { title: "Partnership", links: ["About Us", "Find store", "Categories", "Blogs"] },
          { title: "Information", links: ["Help Center", "Money Refund", "Shipping", "Contact us"] },
          { title: "For users", links: ["Login", "Register", "Settings", "My Orders"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-medium text-gray-800 mb-3 text-sm">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs text-gray-500 hover:text-blue-600">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Get app */}
      <div className="hidden md:block absolute right-6 bottom-24">
      </div>

      <div className="border-t border-gray-100 px-6 py-4 flex items-center justify-between text-xs text-gray-400">
        <span>© 2023 Ecommerce.</span>
        <span>English</span>
      </div>
    </footer>
  );
}
