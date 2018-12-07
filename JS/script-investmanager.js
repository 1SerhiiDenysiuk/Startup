$(document).ready(function () {
    getData();
})

function getData() {
    fetch("http://localhost:3000/application").then(function (response) {
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        })
        .then(function (json) {
            for (var i in json) {
            fetch("http://localhost:3000/get_startup_by_id?id="+json[i].startup_id).then(function (response) {
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        })
        .then(function (startup){
            insertData(startup.name, startup.startup_description, json[i].investment, json[i].startup_id);
        })
        .catch(function (error) {
            console.log(error);
        });   
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

function insertData(title, description, investment, startup_id) {
    $('.row').append("<div class=\"card\" style=\"width: 18rem;\">\
  <div class=\"card-body\">\
    <h5 class=\"card-title\">"+ title + "</h5>\
    <h6 class=\"card-subtitle mb-2 text-muted\">"+ investment +"</h6>\
    <p class=\"card-text\">"+ description +"</p>\
    <a href=\"#\" class=\"card-link\">Дізнатися детальніше</a>\
    <button type=\"button\" class=\"btn btn-success\"id=\"access\" OnClick=\"access('"+startup_id+"')\">Прийняти</button>\
    <button type=\"button\" class=\"btn btn-danger\" id=\"cancel\" OnClick=\"cancel('"+startup_id+"')\">Відхилити</button>\
  </div>\
</div>");
}

function access(id_startup){
    if($("#materialChecked2").prop("checked", true)){
        alert("ok");
        var is_invest_company = 1;
    }
    else {
        var is_invest_company = 0;
    }
    var investor_id = $("#investor_id").val();
    alert(investor_id);
    fetch("http://localhost:3000/access_application?id="+id_startup + "&investor_id=" + investor_id + "&is_invest_company="+ is_invest_company);
    alert("applied");
    location.reload();
};
function cancel(id_startup){
    fetch("http://localhost:3000/cancel_application?id="+id_startup);
    alert("canceled");
    location.reload();
};
