import "./Overview.css";
import ExistingDoc from "../components/overview/existingDoc";

function Overview() {
    return(
        <div className="bg-backgroundGreen pb-10">
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
            {/* Border */}
            <div className="line"/>

            {/* Document Overview */}
                <div id = "wrapper">
                    {/* new Document */}
                    <img className="newDoc" src="\src\assets\images\plus-icon.png"></img>
                
                {/* existing Documents 
                    -> repeat for each Doc later -> fix alignment
                    (if 5< in line -> new line) */}
                    <ExistingDoc/>
                    <ExistingDoc/>
                </div>
        </div>
    );
}

export default Overview;