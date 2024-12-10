import Link from "next/link";
import Image from "next/image";

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: { revalidate: 60 }, // Кешування даних на 60 секунд
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface AboutProps {
  params: { id: string };
}

export default async function About({ id }: any) {
  try {
    // const { id } = params;
    const data = await getData(id);

    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>About Page</h1>
        <p>ID: {data?.id}</p>
        <p>Name: {data?.name}</p>
        <p>Email: {data?.email}</p>
        <Link href="/">Go Back</Link>
      </div>
    );
  } catch (error: any) {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>Error Loading Data</h1>
        <p>{error.message}</p>
        <Link href="/">Go Back</Link>
      </div>
    );
  }
}
