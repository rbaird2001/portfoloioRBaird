
var objSkillset = {
    tableOfContents: ["sql", "js", "itsm", "network", "training", "landesk","hornbill"],
    sql: {
        name: "Database (MySQL, MariaDB, Mongo, Firebase, MS SQL Server).",
        level: "Expert",
        years: 7
    },
    js: {
        name: "Javascript (Javascript, JQuery, JSON, Node.js, React JS).",
        level: "Skilled",
        years: 2
    },
    itsm: {
        name: "ITSM (IT Service Management, ITIL, IT Business Process Management).",
        level: "Guru",
        years: 10
    },
    network: {
        name: "Network technologies (TCP/IP, router managment, VOIP, Cisco, MS Active Directory).",
        level: "Expert",
        years: 15
    },
    training: {
        name: "Technical training(including training center management, curriculum development).",
        level: "Guru",
        years: 25
    },
    landesk: {
        name: "LANDesk Management Suite, LANDesk Service Desk",
        level: "Expert",
        years: 10
    },
    hornbill: {
        name: "Hornbill Supportworks & Hornbill Service Manager",
        level: "Expert",
        years: 8
    }

}

window.onload = function allSkills() {
    const skillContent = document.querySelector("#dynContent");
    let skillItem = objSkillset.tableOfContents;
    let skillBuild = "";
    let skillBuilder1 = 
        `<table>
            <thead>
                <tr>
                    <td class="tableHeader">Skill</td><td>Skill Level</td><td>Years of Experience</td>
                 </tr>
            </thead>`;
    let skillBuilder2 = "";
    let skillBuilder3 = "";

    for (i = 0; i < skillItem.length; i++) {
        let curItem = objSkillset[skillItem[i]];

        skillBuilder2 +=
        `            
                <tr>
                    <td>${curItem.name}</td> <td>${curItem.level}</td> <td>${curItem.years}</td>
                </tr>
        `;
    }
skillBuilder3 = `</table>`
skillContent.innerHTML = skillBuilder1 + skillBuilder2 + skillBuilder3;

}

