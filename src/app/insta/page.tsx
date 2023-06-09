// async function getData() {
//   const res = await fetch(
//     `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
//   )
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data")
//   }

//   return res.json()
// }

// export default async function Page() {
//   const feed = await getData()
//   const images = feed.data
//   console.log(images)

//   return (
//     <main>
//       <ul
//         role="list"
//         className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
//       >
//         {images.map((image) => (
//           <li key={image.source} className="relative">
//             <div className="aspect-h-7 aspect-w-10 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
//               <img
//                 src={image.media_url}
//                 alt={image.caption}
//                 className="pointer-events-none object-cover group-hover:opacity-75"
//               />
//               <button
//                 type="button"
//                 className="absolute inset-0 focus:outline-none"
//               >
//                 <span className="sr-only">View details for {image.title}</span>
//               </button>
//             </div>
//             <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
//               {image.caption}
//             </p>
//             <p className="pointer-events-none block text-sm font-medium text-gray-500">
//               {image.timestamp}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </main>
//   )
// }

function Insta() {
  return <div>Insta</div>
}

export default Insta
