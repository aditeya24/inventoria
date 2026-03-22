import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
    return (
        <div className="home-container">
            <header>
                <img src="/path/to/profile-picture.jpg" alt="User profile picture" />
                <h1>Welcome</h1>
                <p>Username</p>
            </header>

            <h2>Your Borrowed Items</h2>
            <div className="borrowed-item-grid">
                <div className="grid-image-box"><img src="./HomePageImages/image1.png" alt="Item" /></div>
                <div className="grid-image-box"><img src="./HomePageImages/image2.png" alt="Item" /></div>
                <div className="grid-image-box"><img src="./HomePageImages/image3.png" alt="Item" /></div>

                <div className="grid-image-box"><img src="./HomePageImages/image4.png" alt="Item" /></div>
                <div className="grid-image-box"><img src="./HomePageImages/image5.png" alt="Item" /></div>
                <div className="grid-image-box"><img src="./HomePageImages/image6.png" alt="Item" /></div>

                <div className="grid-image-box"><img src="./HomePageImages/image7.png" alt="Item" /></div>
                <div className="grid-image-box"><img src="./HomePageImages/image8.png" alt="Item" /></div>
                <div className="grid-image-box"><img src="./HomePageImages/image9.png" alt="Item" /></div>

                <div className="grid-image-box"><img src="./HomePageImages/image10.png" alt="Item" /></div>
                <div className="grid-image-box"><img src="./HomePageImages/image11.png" alt="Item" /></div>
                <div className="grid-image-box"><img src="./HomePageImages/image12.png" alt="Item" /></div>
            </div>

            <div className="action-buttons-group">
                <button type="button">Borrow Item</button>
                <button type="button">Return Item</button>
            </div>

            <div className="logout-group">
                <button type="button">Log Out</button>
            </div>
        </div>
    );
};

export default HomePage;