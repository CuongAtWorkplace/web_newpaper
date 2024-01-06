import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../styles/Modal.css';

const Modal = ({ url, onClose }) => {
  const [hoveredElement, setHoveredElement] = useState(null);

  const handleIframeLoad = () => {
    const iframeElement = document.getElementById('myIframe');
    if (iframeElement) {
      iframeElement.contentDocument.addEventListener('mousemove', handleMouseMove);
    }
  };

  const handleMouseMove = (e) => {
    const targetElement = e.target;
    if (targetElement) {
      setHoveredElement(targetElement.outerHTML);
    }
  };

  useEffect(() => {
    const iframeElement = document.getElementById('myIframe');
    if (iframeElement && iframeElement.contentDocument) {
      iframeElement.contentDocument.removeEventListener('mousemove', handleMouseMove);
      iframeElement.contentDocument.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (iframeElement && iframeElement.contentDocument) {
        iframeElement.contentDocument.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [url]);

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <iframe
          sandbox="allow-same-origin allow-scripts"
          title="Embedded Content"
          id="myIframe"
          src={url}
          width="100%"
          height="100%"
          onLoad={handleIframeLoad}
        />
        <button className="Modal_Button" onClick={onClose}>
          Close
        </button>
        {hoveredElement && (
          <div>
            <h2>Content of Hovered Element:</h2>
            <pre>{hoveredElement}</pre>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
