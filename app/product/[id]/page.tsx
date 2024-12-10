import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "About | Next App",
// };

export function generateMetadata({ params: { id } }: any) {
  return {
    title: "product " + id,
  };
}

const Product = ({ params }: any) => {
  const { id } = params;
  return (
    <div>
      <h1>Product ID: {id}</h1>
      {/* Інший контент сторінки */}
    </div>
  );
};

export default Product;
