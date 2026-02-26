import templateHtmlText from 'bundle-text:./template.html';

(function () {
  let template = new DOMParser()
    .parseFromString(templateHtmlText, 'text/html')
    .querySelector('template');

  let templateContent = template.content;
  const head = document.querySelector('head');
  head.appendChild(document.importNode(templateContent, true));
})();
