
//The detail fetching API wasn't working for me properly 


// export const getStaticProps = async () => {
//     const res = await fetch(`${process.env.DETAIL_API_URL}?apiKey=${process.env.API_KEY}`);
//     const data = await res.json();

//     return {
//         props: { detail: data }
//     }
// }


// const Detail = ({ detail }) => {
//     console.log(detail.name);
//     return (
//         {
//             detail.map(detail => (
//                 <h3>{detail.name}</h3>
//             ))
//         }
//     );
// }
// export default Detail;