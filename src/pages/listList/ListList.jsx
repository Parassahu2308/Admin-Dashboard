import "./listList.css";
import { DataGrid } from "@mui/x-data-grid";
import { userData } from "../../dummyData";

export default function ListList() {
  return (
    <div className="productList">
      <DataGrid
        rows={userData}
        disableSelectionOnClick
        // columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
