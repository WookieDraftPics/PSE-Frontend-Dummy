import "./Overview.css";





function Overview() {
    return(
        <div className="bg-backgroundGreen">
            <div id="wrapper">
                {/* Icons */}
                <figure>
                    <img className="image" src="/src/assets/images/LLIcon.png"></img>
                </figure>
                <figure>
                    <img className="image" src="/src/assets/images/LLIconName.png"></img>
                </figure>

                {/* Search bar*/}
                <div className="searchBar">
                    <input type="text" placeholder="Search..."></input>
                    {/* Lupen Button hier einfügen */}
                </div>

                {/* User Stuff */}
                <div className="centerRight">
                    <div className="textOnRight">
                        <p>Username</p>
                    </div>
                </div>
                <div>
                    <img className="imageOnRight" src="\src\assets\images\blank-profile-picture.png"></img>
                </div>
            </div>

        </div>
    );
}

export default Overview;