import React, { useContext } from "react";
import Context from "./Context";

function FilterList() {
  const ctx = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();
    var filterList = [];
    switch (ctx.filterForm.option) {
      case "name":
        filterList = ctx.albums.filter((album) =>
          new RegExp("(" + ctx.filterForm.value + ")", "i").test(
            album["im:name"].label
          )
        );
        break;
      case "artist":
        filterList = ctx.albums.filter((album) =>
          new RegExp("(" + ctx.filterForm.value + ")", "i").test(
            album["im:artist"].label
          )
        );
        break;
      case "category":
        filterList = ctx.albums.filter((album) =>
          new RegExp("(" + ctx.filterForm.value + ")", "i").test(
            album.category.attributes.label
          )
        );
        break;
      default:
        filterList = [];
    }
    console.log(filterList);
    ctx.dispatch({ type: "filterList", payload: filterList });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    ctx.dispatch({ type: "setFilterForm", payload: { [name]: value } });
  };

  return (
    <div id="filterBox">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="value"
          placeholder="Apply Filters..."
          onChange={handleChange}
          value={ctx.filterForm.value}
        />
        <select name="option" onChange={handleChange} defaultValue="category">
          <option value="name">Name</option>
          <option value="artist">Artist</option>
          <option value="category">Category</option>
        </select>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
}

export default FilterList;
