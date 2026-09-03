import React from 'react';
import Icon from './Icon';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="toast-notification" role="status" aria-live="polite">
      <Icon name="CheckCircle2" size={18} color="#10b981" />
      <span className="toast-text">{message}</span>
      <button className="toast-close" onClick={onClose} aria-label="Dismiss notification">
        <Icon name="X" size={14} color="#94a3b8" />
      </button>
    </div>
  );
}
