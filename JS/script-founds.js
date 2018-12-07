$("#button-send").click(function() {
	var id_company = $("#company_id").val();
	fetch("http://localhost:3000/get_founds?company_id="+id_company).then(function (response) {
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
            insertData(startup.name, json[i].round, json[i].investment);
        })
        .catch(function (error) {
            console.log(error);
        });   
            }
        })
        .catch(function (error) {
            console.log(error);
});
});
        function insertData(name, round, investment) {
        	$('.tbody').append("<tr>\
      <th scope=\"row\">"+name+"</th>\
      <td>"+investment+"</td>\
      <td>"+round+"</td>\
    </tr>");
        }