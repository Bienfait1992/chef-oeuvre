import React from "react";


function Header() {
    return (
        <>
            <div className="header">
                <div><img src="src/fontend/images/images.png" className="logo"></img></div>
                <div><input type="text" placeholder="Qu'est ce vous recherceher?"  className="recherche"/></div>
                <div><img src="src/fontend/icones/user_11129843.png" className="user"></img></div>
                <button>Sign in</button>
                <button>Sign Up</button>

            </div>
        </>
    )
}
export default Header;