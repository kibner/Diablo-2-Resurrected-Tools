const _getCheckboxComponent = function (
  fieldsetName,
  checkboxId,
  checkboxName,
  checkboxLabel,
) {
  const template = document.querySelector(`#checkbox-template`);
  const clone = document.importNode(template.content, true);
  const label = clone.querySelector(`label`);
  const checkbox = clone.querySelector(`input[type="checkbox"]`);

  checkbox.setAttribute('id', checkboxId);
  checkbox.setAttribute('name', fieldsetName);
  checkbox.setAttribute('value', checkboxName);

  label.setAttribute('for', checkbox.getAttribute('id'));
  label.append(checkboxLabel);

  return clone;
};

const _getCheckedCheckboxes = function (targetElement, fieldsetName) {
  return Array.from(
    targetElement.querySelectorAll(`input[name=${fieldsetName}]:checked`),
  ).reduce(
    (previousValue, currentValue) => previousValue.concat(currentValue.value),
    [],
  );
};

export {
  _getCheckboxComponent as GetCheckboxComponent,
  _getCheckedCheckboxes as GetCheckedCheckboxes,
};
