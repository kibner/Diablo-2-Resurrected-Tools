import templateHtmlText from 'bundle-text:./template.html';

(function () {
  let template = new DOMParser()
    .parseFromString(templateHtmlText, 'text/html')
    .getElementsByTagName('template')[0];

  let templateContent = template.content;

  const shadowRoot = document
    .querySelector('head');

  shadowRoot.appendChild(document.importNode(templateContent, true));
})();
