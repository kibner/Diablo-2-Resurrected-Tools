import templateHtmlText from 'bundle-text:./template.html';
import { Equipment } from '/js/data/equipment_data/index.js';

class EquipmentFieldset extends HTMLElement {
  constructor() {
    super();

    let template = new DOMParser()
      .parseFromString(templateHtmlText, 'text/html')
      .querySelector('template');

    let templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    const templateDocument = document.importNode(templateContent, true);

    for (let i = 0; i < Equipment.length; i++) {
      let checkbox = document.createElement('checkbox-component');
    }

    shadowRoot.appendChild(templateDocument);
  }
}

const _appendCheckboxes = function (targetElement, fieldsetName) {
  for (let i = 0; i < Equipment.length; i++) {
    targetElement.appendChild(
      GetCheckboxComponent(
        fieldsetName,
        _generateCheckboxId(fieldsetName, Equipment[i].id),
        Equipment[i].id,
        Equipment[i].name,
      ),
    );
  }
};

customElements.define('equipment-fieldset', EquipmentFieldset);
