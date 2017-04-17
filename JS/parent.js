var popupWindow;

function openWindow() {
    $.ajax({
        url: "https://api.github.com/users/hadley/orgs",
        type: "GET",
        contentType: 'application/json; charset=utf-8',
        success: function(resultData) {
            popupWindow = window.open("newpage.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
            popupWindow.document.write('<title>List Items</title>');
            popupWindow.document.write('<link rel="stylesheet" href="CSS/index.css"/>');
            popupWindow.document.write('<script src="JS/jquery-3.1.0.min.js"></script>');
            popupWindow.document.write('<script src="JS/child.js"></script>');
            popupWindow.document.write("<ul id='myList'>");
            for (i = 0; i < resultData.length; i++) {
                popupWindow.document.write("<li><a id='" + resultData[i].id + "' onclick='showData(this, event)' href=" + resultData[i].url + ">" + resultData[i].login + "</a></li>");
            }
            popupWindow.document.write("</ul>");
        },
        error: function(jqXHR, textStatus, errorThrown) {},
        timeout: 120000
    });
}