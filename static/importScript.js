function importModule () {
    document.querySelectorAll('[data-include]').forEach((element) => {
        var moduleName = element.getAttribute('data-include');
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
            if (this.status == 200) {
                element.innerHTML = this.responseText;
                var link = document.createElement( "link" );
                link.href = "/static/" + moduleName + ".css";
                link.rel = "stylesheet";
                document.getElementsByTagName( "head" )[0].appendChild(link);
            }
            if (this.status == 404) {element.innerHTML = "Page not found.";}
            }
        }      
        xhttp.open("GET", moduleName, true);
        xhttp.send();
    });
    document.body.style.opacity = 1;
    document.documentElement.style.opacity = 1;
}