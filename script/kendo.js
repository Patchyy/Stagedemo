$("#window").kendoWindow({
    actions: ["Close"],
    draggable: true,
    closed: true,
    modal: true,
    pinned: true,
    visible: false,
    resizable: false,
    title: "Visualisatie settings",
    width: "65%",
    open: function () {
        this.center();
    },

    

    
});

var wdw = $("#window").data("kendoWindow"); //get the Window widget's instance

function openWindow() {
    wdw.open(); //and call its open method
}

function closeWindow() {
    $("#cancel").click(function(){
        console.log("test");
        wdw.close();
    })
}

var switchInstance = $("#darkmode").kendoSwitch({
    messages: {
        checked: "AAN",
        unchecked: "UIT",
    }
});

$("#settings").kendoSwitch({
    messages: {
        checked: "AAN",
        unchecked: "UIT",
    }
});

$("#radiogroupTable").kendoRadioGroup({
    items: ["Grid", "Free Form", "Horizontale Lijn", "Zebra Stripes"],
    layout: "vertical",
    value: "Zebra Stripes",
    change: changelayout,
});

function changelayout() {
    console.log(this.value());
    if (this.value() == "Free Form") {
        $(".k-alt").css("background-color","#ffffff")
        // $.css("border","transparent");
        
        
    }else if(this.value() == "Zebra Stripes")
    {
        $(".k-alt").css("background-color","#F5F7FF");
        console.log("zebra");
    }else(this.value() == "Horizontale Lijn");
    {
        $(".k-alt").css("background-color","#ffffff")
        // $(".k-grid td").css("border-bottom","solid 1px rgb(0 0 0 / 12%)");
    }
}


$("#radiogroupPX").kendoRadioGroup({
    items: [{value:"40px", label: "40 pixels"}, {value:"48px", label:"48 pixels"}, {value:"56px",label:"56 pixels"}],
    layout: "vertical",
    value: "48 pixels",
    change: changeheight,
});


function changeheight(e) {
    $(".k-master-row").css("height",e.newValue);
    $(".k-header").css("height",e.newValue, "padding","0px");
}

$("#dropdownlist").kendoDropDownList();
$("#dropdownlistForm").kendoDropDownList();




$("#textButton").kendoButton();
$("#grid").kendoGrid({
    height: 750,
    sortable: true,
    width: 1650,
    
});