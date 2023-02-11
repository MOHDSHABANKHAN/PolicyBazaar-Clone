import "./Navbar.css";
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

function Navbar() {
  return (
    <div
      className="maindiv"
      style={{
        width: "90%",
        marginTop: "-50px",
        height: "50px",
        alignItems: "center",
        position: "fixed",
        border: "2px solid black",
        backgroundColor: "white",
      }}
    >
      {/* rightside */}

      <div>
        Category
      </div>

      {/* leftside */}

      <div style={{ display: "flex", cursor: "pointer" }}>
        <div style={{ marginRight: "50px", display: "flex" }}>
          <div style={{ paddingRight: "8px" }}>Hide Filters</div>
          <img
            style={{ marginTop: "3px" }}
            width="16px"
            height="16px"
            src="https://e7.pngegg.com/pngimages/550/928/png-clipart-computer-icons-iconfinder-symbol-apple-icon-format-filter-icon-angle-text.png"
            alt="icon"
          />
        </div>

        {/* for Buttton */}
        <div className="drpdown">
          <div className="dropdown">
            <div style={{marginRight:"10px", marginBottom:"10px"}}
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sort By 
              <span><img style={{marginBottom:"-10px"}} src="https://cdn.icon-icons.com/icons2/1673/PNG/512/chevrondownoutline_110911.png" alt="icon" width="30px"/></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
