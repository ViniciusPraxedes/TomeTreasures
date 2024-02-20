import "./Categories.scss"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
const Categories = () =>{


    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://api-gateway.eu-north-1.elasticbeanstalk.com:8080/book/all/categories");
                setData(response.data);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);


    return(

        <div>
            <h1>Categories</h1>
            <div className="categories">

                <div className="col">

                    <Link className="row" to="/products/science_fiction">
                        <img src="https://miro.medium.com/v2/resize:fit:800/0*2Xlb_L-3WuJsAbDM.jpg" alt=""/>

                        <Link className="link" to="/products/science_fiction"><button>Sci Fi</button></Link>
                    </Link>


                    <Link className="row" to="/products/mystery">
                        <img src="https://assets.editorial.aetnd.com/uploads/2014/07/gettyimages-178366909.jpg" alt=""/>
                        <Link className="link" to="/products/mystery"><button>Mystery</button></Link>
                    </Link>


                </div>

                <div className="col">

                    <Link className="row" to="/products/fantasy">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d28fa055-865a-4baf-85c4-1fc924be9b0f/dflc8wa-8b62bd39-7b93-453c-95ec-cbfbc3b83c66.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyOGZhMDU1LTg2NWEtNGJhZi04NWM0LTFmYzkyNGJlOWIwZlwvZGZsYzh3YS04YjYyYmQzOS03YjkzLTQ1M2MtOTVlYy1jYmZiYzNiODNjNjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BSYLMG-QUoWR6nmsAFeL3PI4cbq406mr70cK6sU-RZ0" alt=""/>
                        <Link className="link" to="/products/fantasy"><button>Fantasy</button></Link>
                    </Link>

                </div>

                <div className="col col-l">

                    <div className="row">

                        <div className="col">

                            <Link className="row" to="/products/history">
                                <img src="https://www.invaluable.com/blog/wp-content/plugins/inv_art-history-timeline/images/2x/08-neoclassicism.jpg" alt=""/>
                                <Link className="link" to="/products/history"><button>History</button></Link>
                            </Link>

                        </div>

                        <div className="col">


                            <Link className="row" to="/products/romance">
                                <img src="https://artincontext.org/wp-content/uploads/2022/02/Romanticism-Portraits.jpg" alt=""/>
                                <Link className="link" to="/products/romance"><button>Romance</button></Link>
                            </Link>

                        </div>

                    </div>


                    <Link className="row" to="/products/poetry">
                        <img src="https://levi-hastings.myshopify.com/cdn/shop/products/Greek_sailboat-Web.jpg?v=1568863435" alt=""/>
                        <Link className="link" to="/products/poetry"><button>Poetry</button></Link>
                    </Link>

                </div>
            </div>
        </div>

    )
}

export default Categories