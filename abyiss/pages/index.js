import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
// import axios from 'axios'


//fetch using axios

// export async function getServerSideProps(ctx) {
//   const response = axios({
//     method: 'GET',
//     url: `${process.env.COUNT_API_URL}?apiKey=${process.env.API_KEY}`,
//   });


//   return {
//     props: { amount: response }
//   };
// };



//fetch using getStaticProps 

// export const getStaticProps = async () => {
//   const res = await fetch(`${process.env.COUNT_API_URL}?apiKey=${process.env.API_KEY}`);
//   const data = await res.json();

//   return {
//     props: { amount: data }
//   }
// }


export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.COUNT_API_URL}?apiKey=${process.env.API_KEY}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { amount: data },
  }
}




export default function Home({ amount }) {

  // console.log(amount)
  return (
    <>
      <Head>
        <title>Abyiss | Home</title>
        <meta name="keywords" content="Exchanges" />
      </Head>
      <div>
        <h1 className={styles.title}>Welcome to Abyiss Dashboard</h1>

        <h3>Abyiss have about <Link href="/exchanges" ><a className={styles.bounce}>{amount.count}</a></Link> number of Crypto Exchanges</h3>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      </div>
    </>
  )
}
