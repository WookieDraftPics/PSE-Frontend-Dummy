function ExistingDoc() {
    return(
        <div className="existingDoc">
          <div id = "wrapper">
                <div>
                    <div className="DocName">Dokumentenname</div>
                    <div className="DocDate">Erstellungsdatum</div>
                </div>
                <img className="settingsImg" src="\src\assets\images\threeDots-icon.png"></img>
            </div>
            <div className="line"/>
            <img src="\src\assets\images\copy-file-icon.png"></img>
        </div>
    );
}
export default ExistingDoc;