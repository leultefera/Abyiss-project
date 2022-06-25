//The Detail API wasn't working properly



// export const getStaticPaths = async () => {
//   const res = await fetch(`${process.env.EXCHANGE_API_URL}?apiKey=${process.env.API_KEY}`);
//   const data = await res.json();


//   // map data to an array of path objects with params (id)
//   const paths = data.map(exchange => {
//     return {
//       params: { id: exchange.id.toString() }
//     }
//   })

//   return {
//     paths,
//     fallback: false
//   }
// }

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch(`{process.env.EXCHANGE_API_URL}?apiKey={process.env.API_KEY}` + id);
//   const data = await res.json();

//   return {
//     props: { exchange: data }
//   }
// }

// const Details = ({ exchange }) => {
//   return (
//     <div>
//       <h1>{exchange.name}</h1>
//     </div>
//   );
// }

// export default Details;