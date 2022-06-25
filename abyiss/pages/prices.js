import Head from 'next/head'


// fetch using getStaticProps

// export const getStaticProps = async () => {
//   const res = await fetch(`${process.env.PRICE_API_URL}?apiKey=${process.env.API_KEY}`);
//   const data = await res.json();

//   return {
//     props: { price: data }
//   }
// }


//fetch using getServerSideProps
export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.PRICE_API_URL}?apiKey=${process.env.API_KEY}`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { price: data }
    }
}

//Conver time stamp to readable date
const timestampConvert = (time) => {
    let unix_timestamp = time
    // converted to milliseconds
    const date = new Date(unix_timestamp * 1000);
    // Hours 
    const hours = date.getHours();
    // Minutes 
    const minutes = "0" + date.getMinutes();
    // Seconds
    const seconds = "0" + date.getSeconds();
    // final display
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);


    return formattedTime
}


const Prices = ({ price }) => {
    console.log(price)
    return (
        <>
            <Head>
                <title>Current Price</title>
            </Head>
            <div>
                <p>Exchange: <strong>{price.exchange}</strong></p>
                <p>market: <strong>{price.market}</strong></p>
                <p>price: <strong>${price.price}</strong></p>
                <p>Timestamp: <strong>{timestampConvert(price.timestamp)}</strong></p>
            </div>
            <hr />
            {/* Incase there is more price listing */}
            <div>
                <p>Exchange: <strong>{price.exchange}</strong></p>
                <p>market: <strong>{price.market}</strong></p>
                <p>price: <strong>${price.price}</strong></p>
                <p>Timestamp: <strong>{timestampConvert(price.timestamp)}</strong></p>
            </div>
        </>
    );
}

export default Prices;