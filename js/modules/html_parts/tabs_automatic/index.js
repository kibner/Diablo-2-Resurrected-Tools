// class TabsAutomatic {
//   constructor(groupNode) {
//     this.tablistNode = groupNode;
//
//     this.tabs = [];
//
//     this.firstTab = null;
//     this.lastTab = null;
//
//     this.tabs = Array.from(this.tablistNode.querySelectorAll('[role=tab]'));
//     this.tabpanels = [];
//
//     for (let i = 0; i < this.tabs.length; i += 1) {
//       const tab = this.tabs[i];
//       const tabpanel = document.getElementById(tab.getAttribute('aria-controls'));
//
//       tab.tabIndex = -1;
//       tab.setAttribute('aria-selected', 'false');
//       this.tabpanels.push(tabpanel);
//
//       tab.addEventListener('keydown', this.onKeydown.bind(this));
//       tab.addEventListener('click', this.onClick.bind(this));
//
//       if (!this.firstTab) {
//         this.firstTab = tab;
//       }
//       this.lastTab = tab;
//     }
//
//     this.setSelectedTab(this.firstTab, false);
//   }
//
//   setSelectedTab(currentTab, setFocus) {
//     if (typeof setFocus !== 'boolean') {
//       setFocus = true;
//     }
//     for (let i = 0; i < this.tabs.length; i += 1) {
//       const tab = this.tabs[i];
//       if (currentTab === tab) {
//         tab.setAttribute('aria-selected', 'true');
//         tab.removeAttribute('tabindex');
//         this.tabpanels[i].removeAttribute('hidden');
//         if (setFocus) {
//           tab.focus();
//         }
//       } else {
//         tab.setAttribute('aria-selected', 'false');
//         tab.tabIndex = -1;
//         this.tabpanels[i].setAttribute('hidden', '');
//       }
//     }
//   }
//
//   setSelectedToPreviousTab(currentTab) {
//     let index;
//
//     if (currentTab === this.firstTab) {
//       this.setSelectedTab(this.lastTab);
//     } else {
//       index = this.tabs.indexOf(currentTab);
//       this.setSelectedTab(this.tabs[index - 1]);
//     }
//   }
//
//   setSelectedToNextTab(currentTab) {
//     let index;
//
//     if (currentTab === this.lastTab) {
//       this.setSelectedTab(this.firstTab);
//     } else {
//       index = this.tabs.indexOf(currentTab);
//       this.setSelectedTab(this.tabs[index + 1]);
//     }
//   }
//
//   /* EVENT HANDLERS */
//
//   onKeydown(event) {
//     const tgt = event.currentTarget;
//     let flag = false;
//
//     switch (event.key) {
//       case 'ArrowLeft':
//         this.setSelectedToPreviousTab(tgt);
//         flag = true;
//         break;
//
//       case 'ArrowRight':
//         this.setSelectedToNextTab(tgt);
//         flag = true;
//         break;
//
//       case 'Home':
//         this.setSelectedTab(this.firstTab);
//         flag = true;
//         break;
//
//       case 'End':
//         this.setSelectedTab(this.lastTab);
//         flag = true;
//         break;
//
//       default:
//         break;
//     }
//
//     if (flag) {
//       event.stopPropagation();
//       event.preventDefault();
//     }
//   }
//
//   onClick(event) {
//     this.setSelectedTab(event.currentTarget);
//   }
// }

const _initialize = function (tablistId) {
  const tablist = document.getElementById(tablistId);
  // new TabsAutomatic(tablist);
  let tabs = Array.from(tablist.querySelectorAll('[role=tab]'));
  let tabpanels = [];

  for (let i = 0; i < tabs.length; i += 1) {
    const tab = tabs[i];
    const tabpanel = document.getElementById(tab.getAttribute('aria-controls'));

    tab.tabIndex = -1;
    tab.setAttribute('aria-selected', 'false');
    tabpanels.push(tabpanel);

    tab.addEventListener('keydown', _onKeydown.bind(this));
    tab.addEventListener('click', _onClick.bind(this));

    if (!firstTab) {
      firstTab = tab;
    }
    lastTab = tab;
  }

  _setSelectedTab(firstTab, false);
}

const _onKeydown = function (event) {
  const tgt = event.currentTarget;
  let flag = false;

  switch (event.key) {
    case 'ArrowLeft':
      _setSelectedToPreviousTab(tgt);
      flag = true;
      break;

    case 'ArrowRight':
      _setSelectedToNextTab(tgt);
      flag = true;
      break;

    case 'Home':
      _setSelectedTab(firstTab);
      flag = true;
      break;

    case 'End':
      _setSelectedTab(lastTab);
      flag = true;
      break;

    default:
      break;
  }

  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
}

const _onClick = function (event) {
  _setSelectedTab(event.currentTarget);
}

const _setSelectedTab = function (currentTab, setFocus) {
  if (typeof setFocus !== 'boolean') {
    setFocus = true;
  }
  for (let i = 0; i < tabs.length; i += 1) {
    const tab = tabs[i];
    if (currentTab === tab) {
      tab.setAttribute('aria-selected', 'true');
      tab.removeAttribute('tabindex');
      tabpanels[i].removeAttribute('hidden');
      if (setFocus) {
        tab.focus();
      }
    } else {
      tab.setAttribute('aria-selected', 'false');
      tab.tabIndex = -1;
      tabpanels[i].setAttribute('hidden', '');
    }
  }
}

const _setSelectedToPreviousTab = function (currentTab) {
  let index;

  if (currentTab === firstTab) {
    _setSelectedTab(lastTab);
  } else {
    index = tabs.indexOf(currentTab);
    _setSelectedTab(tabs[index - 1]);
  }
}

const _setSelectedToNextTab = function (currentTab) {
  let index;

  if (currentTab === lastTab) {
    _setSelectedTab(firstTab);
  } else {
    index = tabs.indexOf(currentTab);
    _setSelectedTab(tabs[index + 1]);
  }
}

export default {
  initialize: _initialize
};
