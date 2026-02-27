import templateHtmlText from 'bundle-text:./template.html';

class CheckboxComponent extends HTMLElement {
  constructor() {
    super();

    let template = new DOMParser()
      .parseFromString(templateHtmlText, 'text/html')
      .querySelector('template');

    let templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(document.importNode(templateContent, true));
  }
}

customElements.define('checkbox-component', CheckboxComponent);
