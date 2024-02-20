import "./List.scss"
import Card from "../Card/Card";
const List = () => {

    const data = [
        {
            id: 1,
            img: "https://images.lululemon.com/is/image/lululemon/EMEA_ece_w_tops_swiftly_sep23",
            img2: "https://images.lululemon.com/is/image/lululemon/LW3BQ4S_028850_1?size=800,800",
            title: "Long sleeve graphic",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.lululemon.com/is/image/lululemon/EMEA_ece_w_tops_swiftly_sep23",
            img2: "https://images.lululemon.com/is/image/lululemon/LW3BQ4S_028850_1?size=800,800",
            title: "Long sleeve graphic",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.lululemon.com/is/image/lululemon/EMEA_ece_w_tops_swiftly_sep23",
            img2: "https://images.lululemon.com/is/image/lululemon/LW3BQ4S_028850_1?size=800,800",
            title: "Long sleeve graphic",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.lululemon.com/is/image/lululemon/EMEA_ece_w_tops_swiftly_sep23",
            img2: "https://images.lululemon.com/is/image/lululemon/LW3BQ4S_028850_1?size=800,800",
            title: "Long sleeve graphic",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 5,
            img: "https://images.lululemon.com/is/image/lululemon/EMEA_ece_w_tops_swiftly_sep23",
            img2: "https://images.lululemon.com/is/image/lululemon/LW3BQ4S_028850_1?size=800,800",
            title: "Long sleeve graphic",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 6,
            img: "https://images.lululemon.com/is/image/lululemon/EMEA_ece_w_tops_swiftly_sep23",
            img2: "https://images.lululemon.com/is/image/lululemon/LW3BQ4S_028850_1?size=800,800",
            title: "Long sleeve graphic",
            isNew:true,
            oldPrice: 19,
            price: 12,
        }
    ]

    return(
        <div className="list">
            {data.map(item => (
                <Card item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default List