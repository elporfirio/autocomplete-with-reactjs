import React from "react";

function optionWithHighlightSearch(option, highlight) {
  const bold = option.substr(0, highlight.length);
  const rest = option.substr(highlight.length);
  return (
    <span>
      <strong>{bold}</strong>
      {rest}
    </span>
  );
}

function isSelected(index, selected) {
  return index === selected;
}

function OptionList({ options, searchString, onSelect, selected }) {
  if (!options.length) {
    return null;
  }

  return options.map((state, index) => {
    return (
      <div
        className={`option ${isSelected(selected, index) ? 'active' : ''}`
        }
        key={state.code}
        onMouseOverCapture={() => {
          console.log('aqui arria');
        }}
        onClickCapture={() => {
          console.log("triggered");
          onSelect(state.name)
        }}
      >
        {optionWithHighlightSearch(state.name, searchString)}
      </div>
    );
  });
}

export default OptionList;
