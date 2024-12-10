import Link from "@/node_modules/next/link";
import Image from "next/image";
import { Metadata } from "next";
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) {
    throw Error("Unable to fetch posts!");
  }
  return res.json();
}

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default async function About() {
  const posts = await getData();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      About page
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/about/${post.id}`}>{post.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
