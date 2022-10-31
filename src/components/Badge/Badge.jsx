import React from 'react';
import './Badge.css';

const Badge = ({ children, colorScheme, type }) => {
  return (
    <div className={`badge badge_type_${type} badge_background_${colorScheme}`}>
      <span className={`badge__title badge__title_type_${type}`}>
        {children}
      </span>
      {type === 'clearable' && (
        <button className="badge__btn-clear" type="button" aria-label="Badge clear button" />
      )}
    </div>
  );
};

export default Badge;
