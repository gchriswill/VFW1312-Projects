
//JSON Data Objects
var memberssData = {
    "familyData"   : {
        "sectTitle" : "Family members",
        "secFooter" : "Totall members: ",
        "members"   : [{
            "name"     : "Christopher",
            "last"     : "Gonzalez",
            "AKA"      : "GchrisWill",
            "phone"    : "239-2577522",
            "email"    : "gchriswill@me.com",
            "relation" : "mySelf"
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
    "nonFamilyData" : {
        "sectTitle" : "Non Family members",
        "secFooter" : "Totall members: ",
        "members"    : [{
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
            "relation"  : "Roomate"
        }]
    },
    "nonFamilyData1" : {
        "sectTitle" : "Non Family members",
        "secFooter" : "Totall members: ",
        "members"    : [{
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
            "relation"  : "Roomate"
        }]
    }
};

//Table View creator
var myTable = Ti.UI.createTableView({
    style: Ti.UI.iPhone.TableViewStyle.GROUPED
});

//Detail Information Window creator
var detailInfo = function(){
  var detailWin = Ti.UI.createWindow({
      title: "List memberss",
      backgroundColor: "#fff"
  });
  
  //Detail Label for holding text creator
  var detailLabel = Ti.UI.createLabel({
       text: this.name + " \n" + this.last  + " \n" + this.AKA  + " \n" + this.phone  + " \n" + this.email + " \n" + this.relation
  });
  detailWin.add(detailLabel);
  navWin.openWindow(detailWin, {animate: true});
};

//Global Table's Section and Row creator and event listener asigner 
var sections = [];
for (var n in memberssData){
    var tableSection = Ti.UI.createTableViewSection({
        headerTitle: memberssData[n].sectTitle,
        footerTitle: memberssData[n].secFooter + memberssData[n].members.length
    });
    for (var i = 0, j = memberssData[n].members.length; i < j; i++){
        var tableRows = Ti.UI.createTableViewRow({
            title:    memberssData[n].members[i].name,
            name:     memberssData[n].members[i].name,
            last:     memberssData[n].members[i].last,
            AKA:      memberssData[n].members[i].AKA,
            phone:    memberssData[n].members[i].phone,
            email:    memberssData[n].members[i].email,
            relation: memberssData[n].members[i].relation,
            hasChild: true
        });
        tableSection.add(tableRows);
        tableRows.addEventListener("click", detailInfo);
    };
    sections.push(tableSection);
};

myTable.setData(sections);

mainWin.add(myTable);