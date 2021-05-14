---
layout: page
navname: Screenshots
---

<link href="{{ site.baseurl }}/assets/micromodal.custom.css" rel="stylesheet">

# Screenshots

{% assign imagenum = 0 %}

<div class="grid grid-cols-2 md:grid-cols-3 gap-3">
{% for image in site.static_files %}
{% if image.path contains 'screenshots/' %}
<div data-micromodal-trigger="{{ image.name }}" class="cursor-pointer transition-shadow duration-200 hover:shadow-lg">
<img class="object-cover w-full h-32 md:h-48 rounded-lg" src="{{ site.baseurl }}{{ image.path }}" alt="image" />
</div>
{% assign imagenum = imagenum | plus: 1 %}
{% endif %}
{% endfor %}
</div>

{% for image2 in site.static_files %}
{% if image2.path contains 'screenshots/' %}
<div class="modal micromodal-slide" id="{{ image2.name }}" aria-hidden="true">
<div class="modal__overlay" tabindex="-1" data-micromodal-close>
<img src="{{ site.baseurl }}{{ image2.path }}" style="max-width:90%;max-height:90vh;" alt="image"  role="dialog" aria-modal="true" aria-labelledby="{{ image2.name }}-title"/>
<div class="absolute top-0 right-0">
<button aria-label="Close modal" class="px-6 py-4 text-2xl text-gray-200" data-micromodal-close>&times;</button>
</div>
</div>
</div>
{% endif %}
{% endfor %}

<br>

<script src="https://unpkg.com/micromodal/dist/micromodal.min.js"></script>
<script src="{{ site.baseurl }}/assets/micromodal.custom.js"></script>
