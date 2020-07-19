---
---
{% include serverstatus.js %}
.then(data => {
    if (data.online == true) {
        document.getElementById("serverInd").classList.add("text-green-600");
    }
    else {
        document.getElementById("serverInd").classList.add("text-red-600");
    }
});