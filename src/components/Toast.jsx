import React, { useEffect, useState } from 'react';
import { X, Check, AlertCircle, Info, AlertTriangle } from 'lucide-react';

const Toast = ({
  message,
  title,
  type = 'success',
  duration = 3000,
  onClose,
  position = 'bottom-right',
  action,
  hasProgress = true,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    let interval;
    if (hasProgress) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev - (100 / (duration / 100));
          return newProgress < 0 ? 0 : newProgress;
        });
      }, 100);
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => {
      if (interval) clearInterval(interval);
      clearTimeout(timer);
    };
  }, [duration, onClose, hasProgress]);

  if (!isVisible) return null;

  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
  };

  const icons = {
    success: <Check className="w-5 h-5" />,
    error: <X className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
    warning: <AlertTriangle className="w-5 h-5" />,
  };

  return (
    <div
      className={`fixed z-50 p-4 rounded-lg shadow-lg transition-all transform max-w-md w-full md:w-auto animate-in fade-in slide-in-from-right-5 duration-300 ${positionClasses[position]} ${
        type === 'success'
          ? 'bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-100 border-l-4 border-green-500'
          : type === 'error'
          ? 'bg-red-50 dark:bg-red-900 text-red-800 dark:text-red-100 border-l-4 border-red-500'
          : type === 'info'
          ? 'bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-100 border-l-4 border-blue-500'
          : 'bg-yellow-50 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 border-l-4 border-yellow-500'
      }`}
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-start">
        <div
          className={`flex-shrink-0 mr-3 p-1 rounded-full ${
            type === 'success'
              ? 'bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300'
              : type === 'error'
              ? 'bg-red-100 dark:bg-red-800 text-red-600 dark:text-red-300'
              : type === 'info'
              ? 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300'
              : 'bg-yellow-100 dark:bg-yellow-800 text-yellow-600 dark:text-yellow-300'
          }`}
        >
          {icons[type]}
        </div>
        <div className="flex-1">
          {title && <h3 className="font-medium text-base">{title}</h3>}
          <p className={`text-sm ${!title && 'py-1'}`}>{message}</p>
          {action && <div className="mt-2">{action}</div>}
        </div>
        <button
          className={`ml-auto p-1 rounded-full hover:bg-opacity-20 transition-colors ${
            type === 'success'
              ? 'hover:bg-green-200 dark:hover:bg-green-800'
              : type === 'error'
              ? 'hover:bg-red-200 dark:hover:bg-red-800'
              : type === 'info'
              ? 'hover:bg-blue-200 dark:hover:bg-blue-800'
              : 'hover:bg-yellow-200 dark:hover:bg-yellow-800'
          }`}
          onClick={() => {
            setIsVisible(false);
            if (onClose) onClose();
          }}
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {hasProgress && (
        <div className="w-full h-1 mt-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-100 ${
              type === 'success'
                ? 'bg-green-500'
                : type === 'error'
                ? 'bg-red-500'
                : type === 'info'
                ? 'bg-blue-500'
                : 'bg-yellow-500'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default Toast;