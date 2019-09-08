
var objHistory = {
    tableOfContents: ["hist03","hist02","hist01"],
    hist01: {
        dateRange: "Mar. 1996 - Feb. 2005 ",
        title: "IT Director & Technical Trainer",
        org: "New Horizons Computer Learning Center",
        citySt:"Salt Lake City, UT",
        desc:["Introduced ITIL/ITSM practices for managmement of classroom needs. This along with selected technologies resulted in increase in custom classes which would ultimately account for 40% of all courseware sales."
            ,"Implemented LANDesk/Ivanti management solutions to prepare classrooms for courses. Introduced virtualization for more flexible courseware offerings."
            , "Project manager for Novell's on-line training for Linux SUSE and Netware Advanced Technical Training."
        ]
    },
    hist02: {
        dateRange: "Feb. 2005 - Feb. 2012",
        title: "Sr. Consultant & Sr. Trainer",
        org: "Ivanti (Formerly LANDesk Software)",
        citySt:"South Jordan, UT",
        desc:["Noted for being one of the few with expertise in all of LANDesk's product lines. Consulted in Management Suite and Service Desk where achieved success integrating products to clients worldwide."
        , "Received accolades for usability of implementations and overall professionalism. Efforts played key role in growing Professional Services 5% - 15% annually."
        , "Made extensive use of custom scripts and SQL code to overcome product limitations."
        ]
    },
    hist03:{
        dateRange: "Feb. 2012 - Present 2005 ",
        title: "Product Specialist & Developer",
        org: "Bittercreek Technologies",
        citySt:"Salt Lake City, UT",
        desc:["Implement Hornbill Service Manager at customer sites. Maintain and customize its functionality for the customer."
        , "Use Javascript, PHP, MySql, and other coding skills to solve problems and innovate solutions when boxed product is insufficient for customer needs."
        ]
    },
}


window.onload = function (){
    const histContent = document.querySelector("#dynContent");
    let histItem = objHistory.tableOfContents;
    let histBuild = "";
    let histBuilder1 = "";
    let histBuilder2 = "";
    let histBuilder3 = "";
    for(i=0;i<histItem.length;i++){
        let curItem = objHistory[histItem[i]];
        histBuilder1 = ""
        histBuilder2 = ""
        histBuilder3 = ""
        histBuilder1 += 
         `<div class="col s12">
            <div class="card">
                <div class="card-content">
                    <p class="activator">${curItem.dateRange}<i class="material-icons right">more_vert</i></p>
                    <span class="card-title grey-text text-darken-4">${curItem.title}</span>
                    <p class="org">${curItem.org}</p>
                    <p>${curItem.citySt}</p>
                </div>
                <div class="card-action activator">
                    <span class="activator clickAct">Click for more detail<span>
                </div>
                <div class="card-reveal">
                    <span class="card-title">${curItem.org}<i class="material-icons right">close</i></span>
                    `
        for(j=0;j<curItem.desc.length;j++){
            let description = curItem.desc[j];
            histBuilder2 +=
                    `
                    <p>
                        ${description}
                    </p>
                    `
        }
        histBuilder3 += 
                ` 
                </div>
            </div>
        </div>
        `
        histBuild += histBuilder1 + histBuilder2 + histBuilder3
    }
    histContent.innerHTML = histBuild;
}