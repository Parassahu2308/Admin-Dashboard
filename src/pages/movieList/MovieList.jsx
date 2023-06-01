import "./movieList.css";
import { DataGrid } from "@mui/x-data-grid";
import { userData } from "../../dummyData";

export default function MovieList() {
  return (
    <div className="productList">
      <DataGrid
        rows={userData}
        disableSelectionOnClick
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
