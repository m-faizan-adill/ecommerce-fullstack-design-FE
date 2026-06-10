import { Button, Select } from "../ui";
import { Input, LabeledTextarea } from "../ui/FormFields.tsx";


export default function InquiryBanner() {
  return (
    <section className="py-4">
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
            <Button variant="filled" size="md" className="lg:hidden bg-white text-blue-600">
              Send inquiry
            </Button>
          </div>

          {/* Right form - desktop only */}
          <div className="hidden lg:block w-80 bg-[#FFFFFF] m-4 rounded p-5 shrink-0">
            <h3 className="font-medium text-gray-800 mb-4">Send quote to suppliers</h3>

            <LabeledTextarea
              label="What item you need?"
              placeholder="Type more details"
              rows={3}
              className="mb-3"
            />

            <div className="flex items-center gap-2 mb-4">
              <Input
                type="number"
                placeholder="Quantity"
                className="flex-1"
              />
              <Select
                options={[
                  { value: "pcs", label: "Pcs" },
                  { value: "kg", label: "Kg" },
                ]}
                defaultValue="pcs"
                className="w-24"
              />
            </div>

            <Button variant="filled" size="md" block className="bg-linear-to-b from-[#127FFF] to-[#0067FF]">
              Send inquiry
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}