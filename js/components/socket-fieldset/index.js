import templateHtmlText from 'bundle-text:./template.html';

class SocketFieldset extends HTMLElement {
  constructor() {
    super();

    this.MIN_SOCKET_COUNT = 2;
    this.MAX_SOCKET_COUNT = 6;

    const template = new DOMParser()
      .parseFromString(templateHtmlText, 'text/html')
      .querySelector('template');

    const templateContent = template.content;

    const fieldsetComponent =
      templateContent.querySelector('fieldset-component');

    this.appendCheckboxes(fieldsetComponent);

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(document.importNode(templateContent, true));
  }

  appendCheckboxes(fieldsetComponent) {
    for (let i = this.MIN_SOCKET_COUNT; i <= this.MAX_SOCKET_COUNT; i++) {
      const checkboxComponent = document.createElement('checkbox-component');
      checkboxComponent.slot = 'fields';

      const checkboxName = document.createElement('span');
      checkboxName.slot = 'checkbox-name';
      checkboxName.innerHTML = i;

      checkboxComponent.appendChild(checkboxName);
      fieldsetComponent.appendChild(checkboxComponent);
    }
  }
}

customElements.define('socket-fieldset', SocketFieldset);
