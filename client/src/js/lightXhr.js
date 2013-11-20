function tinyxhr(params) {
    var requestTimeout, xhr;
    try {
        xhr = new XMLHttpRequest();
    } catch (e) {
        try {
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            return null;
        }
    }
    requestTimeout = setTimeout(function() {
        xhr.abort();
        params.cb("", new Error("aborted by a timeout"), xhr);
    }, 10000);
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) {
            return;
        }
        clearTimeout(requestTimeout);
        params.cb(xhr.responseText, xhr.status !== 200 ? new Error("server respnse status is " + xhr.status) : false, xhr);
    };
    xhr.open(params.method ? params.method.toUpperCase() : "GET", params.url, true);

    if (!params.data) {
        xhr.send();
    }
    else {
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(params.data);
    }
}