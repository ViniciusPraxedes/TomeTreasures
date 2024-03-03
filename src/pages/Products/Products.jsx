import {useLocation, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import List from "../../components/List/List";
import "./Products.scss"
import axios from "axios";
import Card from "../../components/Card/Card";
import SearchIcon from "@mui/icons-material/Search";

const Products = () =>{


    const category = useParams().category;
    const uppercaseCategory = category.toUpperCase();
    function formatCategory(category) {
        return category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    const formattedCategory = formatCategory(useParams().category);

    const [categoryText, setCategoryText] = useState("default");
    useEffect(() => {
        let categoryNames = [
            "SCIENCE_FICTION",
            "MYSTERY",
            "ROMANCE",
            "FANTASY",
            "HISTORY",
            "POETRY",
            "BEST_SELLER",
            "TRENDING"
            // Add more category names here
        ];

        let categoryTexts = [
            "Explore the limitless universe of our Science Fiction section, where imagination blurs the lines between reality and the extraordinary. From dystopian worlds to interstellar journeys, our collection invites you to embark on adventures beyond your wildest dreams.",
            "Enter our Mystery section for a thrilling adventure. Explore gripping plots, intriguing puzzles, and suspenseful tales. Dive into stories of intrigue, deception, and unexpected twists. Let your curiosity lead you through the twists and turns of mystery, where every clue brings you closer to uncovering the truth.",
            "Step into our Romance section for an enchanting journey. Explore captivating love stories, passionate encounters, and heartwarming romances. Lose yourself in tales of affection, desire, and happily ever afters. Let your heart flutter and your emotions soar as you delve into the world of romance.",
            "Enter our Fantasy section for an enchanting adventure. Explore mystical lands, encounter legendary creatures, and embark on heroic quests. Dive into tales of adventure, courage, and destiny. Unleash your imagination and discover endless possibilities.",
            "Dive into the past with our History section. Explore the stories of civilizations, revolutions, and remarkable individuals that shaped our world. From ancient times to modern eras, uncover the captivating tales that define humanity's journey through time",
            "Discover our Poetry section for a journey through words. Immerse yourself in lyrical verses, poignant emotions, and evocative imagery. Explore the beauty of language and the depth of human experience captured in every line. Let the rhythm of poetry transport you to new worlds and awaken your soul to the power of expression.",
            "Explore a curated selection of the most captivating and beloved books from around the globe. From gripping thrillers to heartwarming romances, embark on unforgettable journeys that will ignite your imagination and stir your soul. Discover your next literary obsession here, where the best stories await. Welcome to a world of literary excellence.",
            "Explore the latest and most buzz-worthy reads that are capturing hearts and minds across the literary world. From breakout debuts to highly anticipated releases, dive into the hottest titles shaping conversations and setting trends. Stay ahead of the curve and discover your next literary obsession here. Welcome to the forefront of literary excitement!"
            // Add more category texts here
        ];

        for (let i = 0; i < categoryNames.length; i++) {
            if (uppercaseCategory === categoryNames[i]) {
                setCategoryText(categoryTexts[i]);
                break;
            }
        }
    }, [uppercaseCategory]); // Dependency on uppercaseCategory



    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const location = useLocation();
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://api-gateway.eu-north-1.elasticbeanstalk.com:8080/book/books/${uppercaseCategory}`);
                setData(response.data);
                console.log(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, [location.pathname]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
        filterResults(event.target.value);
    };

    const filterResults = searchTerm => {
        const results = data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    };






    const [sort, setSort] = useState()

    const sortedData = data.slice().sort((a, b) => {
        if (sort === 'asc') {
            return a.price - b.price;
        } else if (sort === 'desc') {
            return b.price - a.price;
        } else if (sort === 'titleAZ') {
            return a.name.localeCompare(b.name); // Sort by name A-Z
        }
        // Add more cases for other sorting options if needed
    });
    const handleSort = event => {
        const value = event.target.value;
        setSort(value);
    };



    return(
        <div className="products">


            <div className="top">
                <h1>{formattedCategory}</h1>
                <p>
                    {categoryText}
                </p>
            </div>

            <div className="middle">
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <select value={sort} onChange={handleSort}>
                            <option value="asc">Price (Lowest first)</option>
                            <option value="desc">Price (Highest first)</option>
                            <option value="titleAZ">Title A-Z</option>
                        </select>
                    </div>
                </div>

                <div className="search-box">
                    <div className="row">
                        <input type="text" placeholder={`Search within ${formattedCategory}...`} value={searchTerm} onChange={handleChange} />
                        <SearchIcon className="searchIcon" />
                    </div>
                    {searchTerm && ( // Only render .result-box if there is something typed in the search bar
                        <div className="result-box">
                            <ul>
                                {searchResults.map((item, index) => (
                                    <li key={index}>
                                        <Card className="card" item={item} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>


            </div>





            <div className="bottom">

                <div className="books">
                    {sortedData.map((item, index) => (
                        <Card className="card" item={item} key={index} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Products