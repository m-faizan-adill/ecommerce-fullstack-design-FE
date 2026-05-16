export default function InquiryBanner() {
  return (
    <section className="px-4 lg:px-6 py-4">
      <div
        className="relative rounded overflow-hidden bg-[url('/assets/Image/backgrounds/Group_982.png')] bg-cover bg-center bg-no-repeat"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left text */}
          <div className="flex-1 p-6 lg:p-10 text-white">
            <h2 className="text-xl lg:text-2xl font-bold mb-3">
              An easy way to send requests to all suppliers
            </h2>
            <p className="text-sm text-blue-100 mb-4 hidden lg:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <button className="lg:hidden bg-white text-blue-600 text-sm px-4 py-2 rounded font-medium hover:bg-blue-50">
              Send inquiry
            </button>
          </div>

          {/* Right form - desktop only */}
          <div className="hidden lg:block w-80 bg-white m-4 rounded p-5 shrink-0">
            <h3 className="font-medium text-gray-800 mb-4">Send quote to suppliers</h3>
            <p className="text-sm text-gray-500 mb-2">What item you need?</p>
            <textarea
              placeholder="Type more details"
              className="w-full border border-gray-200 rounded p-2 text-sm resize-none h-20 outline-none mb-3"
            />
            <div className="flex items-center gap-2 mb-4">
              <input
                type="number"
                placeholder="Quantity"
                className="flex-1 border border-gray-200 rounded p-2 text-sm outline-none"
              />
              <select className="border border-gray-200 rounded p-2 text-sm outline-none">
                <option>Pcs</option>
                <option>Kg</option>
              </select>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700">
              Send inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
