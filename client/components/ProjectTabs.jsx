import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/anchor-is-valid */
const ProjectTabs = props => (
  <div className="tabs is-centered is-large is-boxed is-fullwidth is-mobile">
    <ul onClick={e => props.onSelect(e.target.className)} onKeyUp={props.onKeyPress}>
      <li className={props.isSelected('all')}><a className="all">All</a></li>
      <li className={props.isSelected('x-peas')}><a className="x-peas">X-PEAs</a></li>
      <li className={props.isSelected('rocket')}><a className="rocket">rocket!</a></li>
      <li className={props.isSelected('whalethen')}><a className="whalethen">WhaleThen</a></li>
      <li className={props.isSelected('famly')}><a className="famly">Fam.ly</a></li>
      <li className={props.isSelected('dootoo')}><a className="dootoo">DooToo</a></li>
    </ul>
  </div>
);
/* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/anchor-is-valid */

ProjectTabs.propTypes = {
  onSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
};

export default ProjectTabs;
