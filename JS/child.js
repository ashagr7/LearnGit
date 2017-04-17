function showData(obj,event){
event.preventDefault();
var id = obj.id;
var text = $("#"+id).text();
var url = $("#"+id).attr("href");
parent.window.opener.$("#details > tbody").append("<tr><td>"+text+"</td><td>"+id+"</td><td>"+url+"</td></tr>");
}