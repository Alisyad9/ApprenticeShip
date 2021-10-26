function createEl(tag, props, ...children) {
  const element = document.createElement(tag);

  for (const prop in props) {
    console.log(element[prop]);
    // console.log(props[prop], ' <-props[prop] ->');

    element[prop] = props[prop];
    console.log(element[prop]);
  }
  console.log(children);
  element.append(...children);

  return element;
}

export { createEl };
