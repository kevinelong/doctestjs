function contentsOnLoad() {
    var dest = document.getElementById('contents');
    var toc = document.createElement('ul');
    var els = document.getElementsByTagName('h3');
    for (var i=0; i<els.length; i++) {
        var el = els[i];
        var name = 'header-'+(i+1);
        var marker = document.createElement('a');
        marker.setAttribute('name', name);
        el.parentNode.insertBefore(marker, el);
        el.setAttribute('id', name);
        var li = document.createElement('li');
        var anchor = document.createElement('a');
        if (el.getAttribute('href')) {
          anchor.setAttribute('href', el.getAttribute('href'));
          el.style.display = 'none';
        } else {
          anchor.setAttribute('href', '#'+name);
        }
        li.appendChild(anchor);
        anchor.innerHTML = el.innerHTML;
        toc.appendChild(li);
    }
    dest.appendChild(toc);
    if (location.hash) {
      location.hash = location.hash;
    }
}

window.onload = contentsOnLoad;

