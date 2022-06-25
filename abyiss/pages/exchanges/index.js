import styles from '../../styles/Exchanges.module.css'
// import Link from 'next/link'
// import Detail from './Detail';


//fetch using getStaticProps

// export const getStaticProps = async () => {
//   const res = await fetch(`${API_URL}?apiKey=${API_KEY}`);
//   const data = await res.json();

//   return {
//     props: { exchange: data }
//   }
// }



//Fetch using getServerSideProps
export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.EXCHANGE_API_URL}?apiKey=${process.env.API_KEY}`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { exchange: data }
    }
}


const Exchanges = ({ exchange }) => {
    console.log(exchange);
    return (
        <div>
            {/* <Detail /> */}
            <h1>All Exchanges ({exchange.length})</h1>
            {exchange.map(exchange => (

                //send the exchange object to the Detail component (The Detail API wasn't working properly)
                // <Link href={'/Exchanges/' + exchange.id} key={exchange.id}>
                <a className={styles.items}>
                    <h3>{exchange.name}</h3>
                    <hr />
                </a>
                // </Link>
            ))}
        </div>
    );
}

export default Exchanges;