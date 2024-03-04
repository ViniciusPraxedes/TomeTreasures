import "./Footer.scss"
import {Link} from "react-router-dom";
const Footer = () =>{
    return(
        <div className="footer">

            <div className="top">

                <div className="item">
                    <h1>Categories</h1>
                    <Link className="link" to="/products/science_fiction">Sci-Fi</Link>
                    <Link className="link" to="/products/mystery">Mystery</Link>
                    <Link className="link" to="/products/fantasy">Fantasy</Link>
                    <Link className="link" to="/products/history">History</Link>
                    <Link className="link" to="/products/poetry">Poetry</Link>
                    <Link className="link" to="/products/romance">Romance</Link>
                </div>


                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>

                <div className="item">
                    <h1>About</h1>
                    <span>
                        Made with ❤️ by <Link to="https://www.linkedin.com/in/vinicius-praxedes/">Vinicius Praxedes</Link>
                    </span>
                </div>

                <div className="item">
                    <h1>Contact</h1>
                    <span>
                        vinipraxedes@hotmail.com
                    </span>

                    <span>
                        <Link to="https://www.viniciuspraxedes.com/">www.viniciuspraxedes.com</Link>
                    </span>

                    <span>
                        <Link to="https://www.linkedin.com/in/vinicius-praxedes/">Linked in</Link>
                    </span>
                </div>


            </div>


            <div className="bottom">

                <div className="left">
                    <span className="logo">Tome Treasures</span>
                    <span className="copyright">© Copyright 2024. All rights reserved</span>
                </div>

                <div className="right">
                    <img src="https://help.zazzle.com/hc/article_attachments/360010513393/Logos-01.png" alt="Payment options image"/>
                </div>

            </div>


        </div>
    )
}

export default Footer