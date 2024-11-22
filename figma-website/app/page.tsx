import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-[200rem]">
        <h1 className="text-4xl font-bold">Hello, world!</h1>
      </div>
    </div>
  );
}
