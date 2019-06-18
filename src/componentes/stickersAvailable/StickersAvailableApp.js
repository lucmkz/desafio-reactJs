import React from 'react'

const StickersAvailable = ({ checkedReact, checkedVue, checkedAngular, handleClick }) => (
  <div className="fieldset">
    <div className="space" />
    <label>
      <strong>Quais stickers:</strong>
    </label>
    <div className="space" />
    <div className="stickers">
      <img className={checkedReact ? "imgChecked" : "imgUnChecked"} onClick={handleClick} id="react" alt=""></img> <label onClick={handleClick} id="react">React</label>
      <br />
      <img className={checkedVue ? "imgChecked" : "imgUnChecked"} onClick={handleClick} id="vue" alt=""></img> <label onClick={handleClick} id="vue">Vue</label>
      <br />
      <img className={checkedAngular ? "imgChecked" : "imgUnChecked"} onClick={handleClick} id="angular" alt=""></img> <label onClick={handleClick} id="angular">Angular</label>
    </div>
  </div>
)

export default StickersAvailable