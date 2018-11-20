import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/scale.css';

import {capitalize, dashToCamel} from '../../utils';

const classNameMap = {
	vertical: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
	horizontal: ['right-top', 'right-bottom', 'left-top', 'left-bottom']
};

function getDegreeStyle(alignment, color, rungs, i) {
	const borderOrientation = alignment.split('-');
	const spacingDirection = borderOrientation[0] === 'top' || borderOrientation[0] === 'bottom' ? 'width' : 'height';

	return {
		[spacingDirection]: `${(100 / rungs)}%`,
		[borderOrientation[1]]: `${(100 / rungs) * i}%`,
		borderColor: color
	};
}

function getScaleClassName(alignment) {
	return styles[`scale${dashToCamel(alignment)}`];
}

function getLabelClassName(alignment) {
	return styles[`labelContainer${dashToCamel(alignment)}`];
}

function getScaleDegreeClassName(alignment) {
	const className = Object.keys(classNameMap).filter(k => classNameMap[k].indexOf(alignment) > -1)[0];
	return styles[`scaleDegree${capitalize(className)}`];
}

function getWrapperClassName(alignment) {
	return styles[`scaleWrapper${dashToCamel(alignment)}`];
}

const Scale = ({alignment, className, color, rungs}) => (
	<div className={getWrapperClassName(alignment)}>

	</div>
);

Scale.propTypes = {
	alignment: PropTypes.string,
	className: PropTypes.string,
	color: PropTypes.string,
	rungs: PropTypes.number
};

export default Scale;
