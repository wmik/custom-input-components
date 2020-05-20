import React from 'react';

/**
 * @typedef StyleObject
 * @type {Object}
 * @property {CSSStyleDeclaration} label
 * @property {CSSStyleDeclaration} input
 * @property {CSSStyleDeclaration} container
 *
 * @typedef CheckboxProps
 * @type {Object}
 * @property {Number} size
 * @property {Boolean} [round]
 * @property {Boolean} checked
 * @property {Function} onClick
 * @property {String} borderColor
 * @property {String} activeColor
 * @property {String} [label]
 * @property {String} [id]
 * @property {Boolean} [innerIcon]
 * @property {('left'|'right')} [labelPosition=left]
 * @property {StyleObject} [style]
 *
 * @param {CheckboxProps}
 */
export function Checkbox({
  size,
  round,
  checked,
  onClick,
  borderColor,
  activeColor,
  label,
  id,
  innerIcon,
  labelPosition = 'left',
  style = {}
}) {
  let css = Object.assign(
    {
      border: '1px solid',
      borderColor: checked ? activeColor : borderColor,
      borderRadius: round ? '50%' : '2px',
      width: size,
      height: size,
      margin: '0 4px',
      cursor: 'pointer',
      backgroundColor: checked ? activeColor : 'transparent',
      transition: 'all 0.2s ease-in-out'
    },
    style.input
  );

  return (
    <span
      style={Object.assign(
        {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        style.container
      )}
    >
      {label && labelPosition === 'left' && (
        <label htmlFor={id} style={style.label}>
          {label}
        </label>
      )}
      <span style={css} onClick={onClick}>
        {innerIcon && !round && checked && (
          <svg
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
          </svg>
        )}
        {innerIcon && round && checked && (
          <svg fill="white">
            <circle cx={size / 2} cy={size / 2} r={size / 4} />
          </svg>
        )}
        <input
          hidden
          id={id}
          type="checkbox"
          checked={checked}
          onChange={() => {}}
        />
      </span>
      {label && labelPosition === 'right' && (
        <label htmlFor={id} style={style.label}>
          {label}
        </label>
      )}
    </span>
  );
}

export default function App() {
  let [isChecked, setIsChecked] = React.useState(false);

  return (
    <div className="App">
      <p>
        <Checkbox />
      </p>
      <p>
        <Checkbox
          innerIcon
          size={16}
          label="Checkbox"
          checked={isChecked}
          borderColor="hsl(210deg, 10%, 80%)"
          activeColor="hsl(210deg, 80%, 70%)"
          onClick={() => setIsChecked(prevState => !prevState)}
          style={{ container: { fontFamily: 'sans-serif' } }}
        />
      </p>
      <p>
        <Checkbox
          round
          size={16}
          id="radio"
          label="Radio"
          labelPosition="right"
          checked={!isChecked}
          borderColor="hsl(210deg, 10%, 80%)"
          activeColor="hsl(210deg, 80%, 70%)"
          onClick={() => setIsChecked(prevState => !prevState)}
          style={{ label: { fontFamily: 'sans-serif' } }}
        />
      </p>
      <p>
        <Switch
          checked={isChecked}
          onClick={() => setIsChecked(prevState => !prevState)}
        />
      </p>
    </div>
  );
}

/**
 * @callback EventListener
 * @param {Event} event
 * @returns {void}
 *
 * @typedef SwitchProps
 * @type {Object}
 * @property {Boolean} checked
 * @property {EventListener} onClick
 *
 * @param {SwitchProps}
 */
function Switch({ checked, onClick }) {
  let css = {
    track: {
      display: 'block',
      cursor: 'pointer',
      height: 16,
      width: 32,
      borderRadius: 8,
      backgroundColor: checked
        ? 'hsl(210deg, 80%, 70%)'
        : 'hsl(210deg, 20%, 80%)',
      transition: 'background-color 0.2s ease-in-out'
    },
    thumb: {
      display: 'block',
      width: 11,
      height: 11,
      backgroundColor: 'white',
      borderRadius: '50%',
      transform: checked ? 'translate(16px, 2.5px)' : 'translate(4px, 2.5px)',
      transition: 'transform 0.2s ease-in-out'
    }
  };

  return (
    <span style={css.track} onClick={onClick}>
      <span style={css.thumb} />
    </span>
  );
}
