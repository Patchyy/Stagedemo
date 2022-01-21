$("#window").kendoWindow({
    actions: ["Close"],
    draggable: true,
    closed: true,
    modal: true,
    pinned: true,
    visible: false,
    resizable: false,
    title: "Visualisatie settings",
    width: "55%",
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
    $('#save').click(function(){
        wdw.close();
    })
}

var switchInstance = $("#darkmode").kendoSwitch({
    messages: {
        checked: "AAN",
        unchecked: "UIT",
    },
    change: darkmode,
    
});

function darkmode(){
    const darkmode =  new Darkmode();
    console.log(darkmode.isActivated())
    darkmode.Toggle;
}


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
    if (this.value() == "Free Form") 
    {
        $("tbody").removeClass();
        $("tbody").attr("class", "freeform *");
        
    }
    else if(this.value() == "Zebra Stripes")
    {
        $("tbody").removeClass();
        $("tbody").attr("class" , "zebra *");
        console.log("zebra");
    }
    else if(this.value() == "Horizontale Lijn")
    {
        $("tbody").removeClass();
        $("tbody").attr("class" , "horizontal *");
    }       
    else if(this.value() == "Grid")
    {
        $("tbody").removeClass();
        $("tbody").attr("class" , "grid *");
    }
};


$("#radiogroupPX").kendoRadioGroup({
    items: [{value:"40px", label: "40 pixels"}, {value:"48px", label:"48 pixels"}, {value:"56px",label:"56 pixels"}],
    layout: "vertical",
    value: "48px",
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