import Card from "../Card/Card";
import "./BestSeller.scss"
import {useEffect, useState} from "react";
import axios from "axios";

const BestSeller = ({type}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://api-gateway.eu-north-1.elasticbeanstalk.com:8080/book/books/BEST_SELLER");
                setData(response.data);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);



    return(
        <div className="featuredProducts">

            <div className="top">
                <h1>Best sellers</h1>
                <p>
                    Explore our best sellers: captivating reads that have
                    captured hearts and minds. Discover the latest releases and enduring favorites
                    that everyone is talking about. Find your next page-turner today!
                </p>
            </div>

            <div className="bottom">
                {data.map((item, index) => (
                    <Card className="card" item={item} key={index}/>
                ))}
            </div>


        </div>
    );

}

export default BestSeller