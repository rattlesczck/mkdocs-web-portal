// Simple TOC toggle for MkDocs Material
window.addEventListener('DOMContentLoaded', function() {
  var toc = document.querySelector('.md-sidebar--secondary');
  if (!toc) return;

  var btn = document.createElement('button');
  btn.textContent = 'Toggle Table of Contents';
  btn.style.position = 'fixed';
  btn.style.top = '80px';
  btn.style.right = '20px';
  btn.style.zIndex = '1000';
  btn.style.background = '#2196f3';
  btn.style.color = '#fff';
  btn.style.border = 'none';
  btn.style.padding = '8px 16px';
  btn.style.borderRadius = '4px';
  btn.style.cursor = 'pointer';

  btn.onclick = function() {
    if (toc.style.display === 'none') {
      toc.style.display = '';
    } else {
      toc.style.display = 'none';
    }
  };

  document.body.appendChild(btn);
});
