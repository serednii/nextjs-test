"use client";
export default function ({ error }: { error: Error }) {
  return <h1>Oops!!! {error.message}</h1>;
}
