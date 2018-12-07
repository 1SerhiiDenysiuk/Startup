$("#button-send").click(function(){
var name=$("#input-name").val();
var round=$("#input-round").val();
var investment=$("#input-investment").val();
fetch("http://localhost:3000/send-application?name=" + name + "&round=" + round + "&investment=" + investment );
alert("sended");
location.reload();
});