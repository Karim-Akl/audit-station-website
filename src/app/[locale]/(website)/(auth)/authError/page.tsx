import Link from "next/link";

type Props = {
  searchParams: {
    error?: string;
  };
};

export default function AuthErrorPage({ searchParams }: Props) {
  return (
    <div className=" h-[calc(100vh-65px)] bg-secondary-500 flex items-center justify-center  ">
      <div className="flex rounded-2xl shadow-md bg-white p-12 flex-col items-center justify-center gap-8">
        <p className="text-4xl text-red-500"> {searchParams.error}</p>
        <Link href="/" className="rounded-full h-[42px] bg-red-800 px-4 py-2  text-xl text-white flex items-center justify-center">
          Go back to home
        </Link>
      </div>
    </div>
  );
}
