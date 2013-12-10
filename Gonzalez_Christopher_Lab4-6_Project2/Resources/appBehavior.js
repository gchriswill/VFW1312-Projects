
//JSON Data Objects
var memberssData = {
    "familyContacts"    : {
        "sectTitle" : "Family Contacts",
        "secFooter" : "Totall members: ",
        "members"   : [{
            "name"     : "Christopher",
            "last"     : "Gonzalez",
            "AKA"      : "GchrisWill",
            "phone"    : "239-257-7522",
            "email"    : "gchriswill@me.com",
            "relation" : "Myself"
        },{
            "name"     : "Wilma",
            "last"     : "Melendez",
            "AKA"      : "Wilmita",
            "phone"    : "787-769-9245",
            "email"    : "mwilmaivon@icloud.com",
            "relation" : "Mother"
        },{  
            "name"     : "Loraine",
            "last"     : "Robles",
            "AKA"      : "MloraineWill",
            "phone"    : "N/A",
            "email"    : "N/A",
            "relation" : "Sister"
        },{
            "name"     : "Ken",
            "last"     : "Melendez",
            "AKA"      : "MkentWill",
            "phone"    : "N/A",
            "email"    : "kenrobles7@yahoo.com",
            "relation" : "Brother"
        }]
    },
    "generalContacts" : {
        "sectTitle" : "General Contacts",
        "secFooter" : "Totall members: ",
        "members"   : [{
            "name"      : "Gaby",
            "last"      : "Serrano",
            "AKA"       : "SgabyWill",
            "phone"     : "N/A",
            "email"     : "N/A",
            "relation"  : "Brother in law"
        },{  
            "name"      : "Griselle",
            "last"      : "Melendez",
            "AKA"       : "MGris",
            "phone"     : "N/A",
            "email"     : "N/A",
            "relation"  : "Main Roomate"
        },{  
            "name"      : "Ben",
            "last"      : "Melendez",
            "AKA"       : "Mben",
            "phone"     : "N/A",
            "email"     : "N/A",
            "relation"  : "Roomate 2"
        }]
    },
    "academicContacts": {
        "sectTitle" : "Academic Contacts",
        "secFooter" : "Totall members: ",
        "members"   : [{
            "name"      : "Chad",
            "last"      : "Gibson",
            "AKA"       : "Chaddy",
            "phone"     : "N/A",
            "email"     : "visualframeworks@gmail.com",
            "relation"  : "VFW1213's Instructor"
        },{  
            "name"      : "Richard",
            "last"      : "Huthson",
            "AKA"       : "Richy",
            "phone"     : "N/A",
            "email"     : "N/A",
            "relation"  : "Lab Specialist"
        }]
    }
};//End of JSON Data

//Table View creator
var myTable = Ti.UI.createTableView({
    style: Ti.UI.iPhone.TableViewStyle.GROUPED
});//End

//Global Table's Section and Row creator and event listener assigner 
var sections = [];
for (var n in memberssData){
    var tableSection = Ti.UI.createTableViewSection({
        headerTitle: memberssData[n].sectTitle,
        footerTitle: memberssData[n].secFooter + memberssData[n].members.length,
    });
    for (var i = 0, j = memberssData[n].members.length; i < j; i++){
        var tableRows = Ti.UI.createTableViewRow({
            title:    memberssData[n].members[i].name + " " + memberssData[n].members[i].last,
            
            //Declaring custom properties to pass them to detailInfo function
            name:     "Name: "     + memberssData[n].members[i].name,
            last:     "Last: "     + memberssData[n].members[i].last,
            AKA:      "AKA: "      + memberssData[n].members[i].AKA,
            phone:    "Phone: "    + memberssData[n].members[i].phone,
            email:    "Email: "    + memberssData[n].members[i].email,
            relation: "Relation: " + memberssData[n].members[i].relation,
            hasChild: true
        });
        tableSection.add(tableRows);
    };
    sections.push(tableSection);
};//End

//Event Listener and Detail Information function Window creator
myTable.addEventListener("click", function(eventHolder){
  //Second main window creator
  var detailWin = Ti.UI.createWindow({
      title: eventHolder.source.title,
      backgroundColor: "#cecece"
  });
  
  //Detail Label for holding text creator
  var detailLabel = Ti.UI.createLabel({
       text: eventHolder.source.name + " \n" + eventHolder.source.last  + " \n" + eventHolder.source.AKA  + " \n" + eventHolder.source.phone  + " \n" + eventHolder.source.email + " \n" + eventHolder.source.relation,
       font: {fontSize: 18, fontFamyly: "Arial"}
  });
  detailWin.add(detailLabel);
  navWin.openWindow(detailWin, {animate: true});
});

//Calls
myTable.setData(sections);
mainWin.add(myTable);