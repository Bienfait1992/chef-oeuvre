import React from "react";
import Nav_bar from "./nav_bar";



function Header() {
    return (
        <>
            <div className="header">
                <div><img src="src/fontend/images/images.png" className="logo"></img></div>
                <div><input type="text" placeholder="Qu'est ce vous recherceher?" className="recherche" /></div>
                <div><img src="src/fontend/icones/user_11129843.png" className="user"></img></div>
                <button>Sign in</button>
                <button>Sign Up</button>
                <div><img src="src/fontend/icones/conversation-svgrepo-com.svg" alt="" className="panier" /></div>
            </div>
<Nav_bar/>
        </>
    )
}
export default Header;