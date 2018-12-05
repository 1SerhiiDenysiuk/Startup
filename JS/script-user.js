$(document).ready(function () {
    getData();
})

function getData() {
    fetch("http://localhost:3000/startup").then(function (response) {
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        })
        .then(function (json) {
            for (var i in json) {
                console.log(json[i].name);
                insertData(json[i].name,json[i].startup_description, json[i].investment)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

function insertData(title, description, investment) {
    $('.row').append("<div class=\"card\" style=\"width: 18rem;\">\
  <div class=\"card-body\">\
    <h5 class=\"card-title\">"+ title + "</h5>\
    <h6 class=\"card-subtitle mb-2 text-muted\">"+ investment +"</h6>\
    <p class=\"card-text\">"+ description +"</p>\
    <a href=\"#\" class=\"card-link\">Дінзнатися детальніше</a>\
  </div>\
</div>")
}