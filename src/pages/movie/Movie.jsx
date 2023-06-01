import { Link } from "react-router-dom";
import "./movie.css";
import { Publish } from "@mui/icons-material";

export default function Movie() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="" alt="" className="productInfoImg" />
            <span className="productName">X wars</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">2</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">Action</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">2023</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">17</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input type="text" placeholder="Xwars" />
            <label>Year</label>
            <input type="text" placeholder="2023" />
            <label>Genre</label>
            <input type="text" placeholder="Action" />
            <label>Limit</label>
            <input type="text" placeholder="17" />
            <label>Trailer</label>
            <input type="file" placeholder="Xwars" />
            <label>Video</label>
            <input type="file" placeholder="Video" />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src="" alt="" className="productUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
