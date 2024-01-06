// src/pages/Home.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Headbar from '../components/Headbar';
import { useState } from 'react';
import Modal from '../components/Modal';
import ModalContent from '../components/ModalContent';
import '../styles/Home.css';

const Home = () => {

  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [showTitleModal, setTitleShowModal] = useState(false);

  const [previewContent, setPreviewContent] = useState('');



  const handlePreviewClick = (previewType) => {
    if (previewType === 'title') {
      setPreviewContent(title);
      setTitleShowModal(true);
    } else if (previewType === 'content') {
      setPreviewContent(content);
      setTitleShowModal(true);
    }
  };


  const handleSubmit = () => {
    if (url.trim() !== '') {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handlePressSubmit = () => {
    // Hiển thị thông báo khi nút "Submit" được nhấn
    alert('Oke');
  };



  return (
    <div className="home-page">
      <Sidebar />
      <div className="content">
        <Headbar />
        <h1>Welcome to the Home Page!</h1>
        <h2>Enter your Url :</h2>
        {/* Add additional content for the home page */}

        <div className="input-container">
          <input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>

        <h2>Enter your Link :</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter link"
          />
          <button>Preview</button>
        </div>

        <h2>Enter your Title :</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={() => handlePreviewClick('title')}>Preview Title</button>
        </div>

        <h2>Enter your Content :</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={() => handlePreviewClick('content')}>Preview Content</button>
        </div>

        {showModal && <Modal url={url} onClose={closeModal} />}

        {showTitleModal && (
          <ModalContent onClose={() => setTitleShowModal(false)}>
            {/* Display the preview content */}
            <div dangerouslySetInnerHTML={{ __html: previewContent }} />
          </ModalContent>
        )}

        <div className="centered-button">
          <button className='back_but' onClick={() => handlePressSubmit()} >Submit</button>
        </div>

      </div>
    </div>
  );
};

export default Home;
