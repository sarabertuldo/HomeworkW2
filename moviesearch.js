let checkErrArr1;

document.getElementById("title")
.addEventListener("blur", (e) => { 
    if (document.getElementById("title").value.length < 3) {
        document.getElementById("queryError").innerText =
        "Must enter at least 3 characters or more.";
        checkErrArr1 = false;
    } if (document.getElementById("title").value.length >= 3) {
        document.getElementById("queryError").innerText = "";
        checkErrArr1 = true;
    }
    }
);

document.getElementById("fetch").addEventListener("click", function () {
    if (checkErrArr1) {
        document.getElementById("searchErr").innerText = "";
    let userSearch = document.getElementById("title").value;
    let movieType = document.getElementById("movieType").value;
    let movieYear = document.getElementById("movieYear").value;
    fetch(
        `http://www.omdbapi.com/?apikey=f6132db4&s=${userSearch}&type=${movieType}&y=${movieYear}`)
    .then (function (response) {
        console.log(response);
        if (!response.ok) {
        console.log(response.status);
    }
    return response.json();
    })
    .then (function (res) {
        let tempTitles = document.getElementsByClassName("title");
        if (tempTitles.length > 0) {
            document.getElementById("resultsTitles").innerHTML = "";
        }
        console.log(res);
        tempRes = res;
        for (let i = 0; i < res.Search.length; i++) {
            let tempDiv = document.createElement("div");
            tempDiv.className = "title";
            tempDiv.innerText = res.Search[i].Title;
            document.getElementById("resultsTitles").append(tempDiv);
        }
    });
    } else {
    document.getElementById("searchErr").innerText = "Please fix the errors above";
    }
});