import React from "react";
import Image from "next/image";
// import { faker, simpleFaker } from '@faker-js/faker';
// // or, if desiring a different locale
// // import { fakerDE as faker } from '@faker-js/faker';
// const f = simpleFaker.number.int(10); // 4
// const randomName = faker.person.fullName(); // Rowan Nikolaus
// const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
function ProductCard({ product }) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  return (
    <>
      <div className="card w-full bg-base-100 rounded-xl shadow-xl gap-4 border-2 border-black px-4 py-2">
        <figure>{product.image}</figure>
        <div className="card-body">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-3xl">{product.name}</h2>
            <span className="text-3xl font-bold">${numberWithCommas(product.price)}</span>
          </div>

          <p>{product.desc}</p>
          <div className="flex items=center justify-center md:justify-end mt-4">
            <button className="flex flex-row items-center justify-center px-4 py-2 bg-black text-white w-fit h-11 rounded-lg gap-2">
            <svg className="mb-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> 
            <>Add to Cart</>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const product_list = [
  {
    name: "Pen",
    price: 1000,
    desc: "Sell me this fucking pen right here.",
    image: <Image src="/leospen/pen.webp" alt="Shoes" loading="eager"  width={500} height={500} />,
  },
  {
    name: "Ketchup",
    price: 5,
    desc: "Can I get some ketchup, please?",
    image: <Image src="/leospen/ketchup.webp" alt="Shoes" loading="lazy" width={500} height={500} />,
  },
  {
    name: "An Amish Guy",
    price: 3100,
    desc: "I'm not talking 'bout Buddhist or Amish",
    image: <Image src="/leospen/amish.webp" alt="Shoes" loading="lazy" width={774} height={824} />,
  },
  {
    name: "A Buddhist Monk",
    price: 5400,
    desc: "There's no such thing as an Amish Buddhist.",
    image: <Image src="/leospen/buddhist.webp" alt="Shoes" loading="lazy" width={705} height={953}/>,
  },
];

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-4 gap-6">
      {product_list.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
