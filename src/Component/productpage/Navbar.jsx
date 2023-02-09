import './Navbar.css'

function Navbar(){

    return(
        <div className= "maindiv">

            {/* rightside */}

            <h1>Men's Shoes</h1>


            {/* leftside */}

            <div style={{display:"flex"}}>
            <h1>Men's Shoes</h1>


            {/* for Buttton */}
            <div class="dropdown">
            <button onclick="myFunction()" class="dropbtn">Sort By</button>
            <div id="myDropdown" class="dropdown-content">
            <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()"/>
            <a href="#about">About</a>
            <a href="#base">Base</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
            <a href="#custom">Custom</a>
            <a href="#support">Support</a>
            <a href="#tools">Tools</a>
            </div>
            </div>


</div>
        </div>
    )
}
export default Navbar;