
let url = new URL("https://jsonplaceholder.typicode.com/todos")
let xml = new XMLHttpRequest();
xml.open('GET', url);
xml.send();
xml.onload = function () {
    if (xml.status == 200) {
        var arr = JSON.parse(xml.responseText);
        for (var i = 0; i < arr.length; i++) {
            var obj = arr[i];
            var menu = document.querySelector("#status")
            var ul = document.querySelector("#ul")
            var li = document.createElement('li');
            li.innerHTML = `User ID:  ${obj.userId} || Title: ${obj.title} || Status: ${obj.completed}`;
            ul.append(li)
            obj.completed == true ? li.style.backgroundColor = 'green' : li.style.backgroundColor = 'yellow';
        }
    }


    // reset
    var button = document.getElementById("reset");
    button.addEventListener("click", function () {
        ul.innerHTML = "";
        for (var i = 0; i < arr.length; i++) {
            var li = document.createElement('li');
            var obj = arr[i];
            li.innerHTML = `User ID:  ${obj.userId} || Title: ${obj.title} || Status: ${obj.completed}`;
            ul.append(li)
            obj.completed == true ? li.style.backgroundColor = 'green' : li.style.backgroundColor = 'yellow';
        }
    })

    // completed status filter
    var menu = document.querySelector("#status")
    menu.addEventListener("click", function () {
        if (menu.value === "completed") {
            var completedStatus = arr.filter(item => item.completed == true)
            ul.innerHTML = "";
            for (var i = 0; i < completedStatus.length; i++) {
                var li = document.createElement('li');
                li.innerHTML = `User ID:  ${completedStatus[i].userId} || Title: ${completedStatus[i].title} || Status: ${completedStatus[i].completed}`
                ul.append(li);
                completedStatus[i].completed == true ? li.style.backgroundColor = 'green' : li.style.backgroundColor = 'yellow';

            }
        }
    }
    )
    // still in progress status filter
    var menu = document.querySelector("#status")
    menu.addEventListener("click", function () {
        if (menu.value === "stillInProgress") {
            var stillInProgress = arr.filter(item => item.completed == false)
            ul.innerHTML = "";
            for (var i = 0; i < stillInProgress.length; i++) {
                var li = document.createElement('li');
                li.innerHTML = `User ID:  ${stillInProgress[i].userId} || Title: ${stillInProgress[i].title} || Status: ${stillInProgress[i].completed}`
                ul.append(li);
                stillInProgress[i].completed == true ? li.style.backgroundColor = 'green' : li.style.backgroundColor = 'yellow';

            }
        }
    }
    )
    // search filter
    var searchButton = document.querySelector("#searchButton")
    var searchBar = document.querySelector("#numberSearch")
    searchButton.addEventListener("click", function () {
        if (searchBar.value <= 10 && searchBar.value >= 1) {
            ul.innerHTML = "";
            for (var i = 0; i < arr.length; i++) {
                var li = document.createElement('li');
                if (arr[i].userId == searchBar.value) {
                    li.innerHTML = `User ID:  ${arr[i].userId} || Title: ${arr[i].title} || Status: ${arr[i].completed}`
                    ul.append(li);
                    arr[i].completed == true ? li.style.backgroundColor = 'green' : li.style.backgroundColor = 'yellow';
                }
            }
        }
        else {
            alert("value must be between 1 and 10")
        }
    }
    )

}

