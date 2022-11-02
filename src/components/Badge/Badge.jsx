import React from 'react';
import './Badge.css';

const Badge = ({ children, colorScheme, type, onClickBadge, onClickBadgeClose }) => {
  return (
    <div
      className={`badge badge_type_${type} badge_background_${colorScheme}`}
      onClick={onClickBadge}
    >
      <span className={`badge__title badge__title_type_${type}`}>
        {children}
      </span>
      {type === 'clearable' && (
        <button
          className="badge__btn-clear"
          type="button"
          aria-label="Badge clear button"
          onClick={onClickBadgeClose}
        />
      )}
    </div>
  );
};

export default Badge;
