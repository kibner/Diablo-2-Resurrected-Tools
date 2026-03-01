import templateHtmlText from 'bundle-text:./template.html';
import { Runewords } from '../../../js/data/runeword_data/index.js';
import { Runes } from '../../../js/data/rune_data/index.js';

class RunewordSearchResults extends HTMLElement {
  constructor() {
    super();

    const template = new DOMParser()
      .parseFromString(templateHtmlText, 'text/html')
      .querySelector('template');

    const templateContent = template.content;

    const tbody = templateContent.querySelector('tbody');

    this.appendRow(tbody);

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(document.importNode(templateContent, true));
  }

  appendRow(tbody) {
    for (let i = 0; i < Runewords.length; i++) {
      const runeword = Runewords[i];
      const tr = document.createElement('tr');
      const description_td = document.createElement('td');
      const stats_td = document.createElement('td');

      const description = document.createElement('runeword-description');

      const runewordName = document.createElement('span');
      runewordName.slot = 'runeword-name';
      runewordName.innerHTML = runeword.name;

      const requiredLevel = document.createElement('span');
      requiredLevel.slot = 'required-level';
      requiredLevel.innerHTML = runeword.character_level;

      const runes = description.shadowRoot.querySelector('.runes');
      console.log(description);

      for (let j = 0; j < runeword.runes.length; j++) {
        const rune = document.createElement('li');
        rune.innerHTML = Runes.find(
          (value) => value.id === runeword.runes[j],
        ).name;

        // console.log(runes);
        runes.appendChild(document.importNode(rune, true));
      }

      const equipment = description.querySelector('.equipment');

      description.appendChild(runewordName);
      description.appendChild(requiredLevel);

      description_td.appendChild(description);

      tr.appendChild(description_td);
      tr.appendChild(stats_td);
      tbody.appendChild(tr);
    }
  }
}

customElements.define('runeword-search-results', RunewordSearchResults);
