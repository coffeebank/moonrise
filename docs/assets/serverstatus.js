---
---
{% include serverstatus.js %}
.then(data => {
    if (data.online == true) {
        {% if site.siteNav %}
        document.getElementById("serverInd").classList.add("text-green-600");
        document.getElementById("serverPlaynow").innerHTML = `<span class="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-thin uppercase text-gray-900 mr-2 shadow-lg">Play Now: ${data.players.online} Online</span>`;
        {% else %}
        document.getElementById("serverStatus").innerHTML = `<p class="font-bold select-none"><span class="text-green-600">&#11044;</span>&emsp;We're online!&ensp;&middot;&ensp;${data.players.online} playing</p>`;
        document.getElementById("serverStatusM").innerHTML = `<p class="font-bold select-none"><span class="text-green-600">&#11044;</span>&emsp;Online, ${data.players.online} playing</p>`;
        {% endif %}
    }
    else {
        {% if site.siteNav %}
        document.getElementById("serverInd").classList.add("text-red-600");
        {% else %}
        document.getElementById("serverStatus").innerHTML = `<p class="font-bold select-none"><span class="text-red-600">&#11044;</span>&emsp;Sorry! We're offline...</p>`;
        document.getElementById("serverStatusM").innerHTML = `<p class="font-bold select-none"><span class="text-red-600">&#11044;</span>&emsp;Offline</p>`;
        {% endif %}
    }
});