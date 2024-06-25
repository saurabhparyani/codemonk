import Timer from "@/components/Timer";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Timer initialMinutes={25} />
    </div>
  );
}
