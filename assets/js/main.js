


$(document).ready(function () {
    let mainContent =

        `<div id="slideNavRow" class="row">
        <div id="slideNavBtnCol" class="col s4">
            <div class="sidenav-trigger btn" data-target="slideOut"><i class="material-icons">menu</i></div>
        </div>
    </div>
    <div class="row" id="myNameRow">
        <div class="col s12" id="myNameCol">
            <div class="valign-wrapper center-align" id="namePosition">
                <h2 class="center-align" id="myName">Robert Baird</h2>
            </div>
        </div>
    </div>
    <div id="sideNavRow" class="row">
        <div id="smallNav">
            <ul id="slideOut" class="sidenav">
                <li id="homeSelect"><a href="index.html">Home</a></li>
                <li id="historySelect"><a href="history.html">Professional History</a></li>
                <li id="portfolioSelect"><a href="portfolio.html">Portfolio</a> </li>
                <li id="skillSelect"><a href="skills.html">Relevant Skills</a></li>
                <li id="contactSelect"><a href="contact.html">Contact Me</a></li>
            </ul>
        </div>
    </div>
    <div class="row">
        <div class="col s12">
            <div>
                <hr>
            </div>
        </div>
    </div>`

    $("#pageContent").html(mainContent);
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});