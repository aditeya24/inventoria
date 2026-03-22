import React, { useState } from 'react';
// Ensure this points to the CSS file we created
import './style.css';

const ReturnedItemPage: React.FC = () => {
    // State to hold the number of items the user wants to borrow
    const [borrowAmount, setBorrowAmount] = useState('');

    // Function to handle the borrow action
    const handleBorrow = () => {
        console.log(`User wants to borrow: ${borrowAmount} items`);
        // You would typically add your API call here to process the transaction
    };

    return (
        <>
            {/* Header Section */}
            <header>
                <img
                    src="path/to/profile-picture.jpg"
                    alt="User profile"
                    width="50"
                    height="50"
                />
                <button type="button">Back</button>
            </header>

            <main>
                {/* Item Information Card */}
                <div className="item-details-card">
                    <img
                        src="path/to/image-placeholder.png"
                        alt="Item Image Placeholder"
                        width="200"
                        height="200"
                    />
                    <h3>Item Name</h3>
                    <p><strong>Catergory</strong></p>
                    <p>description of the item</p>
                </div>

                {/* Availability Card */}
                <div className="availability-card">
                    <h2>100</h2>
                    <p>Amount Available</p>
                </div>

                {/* Borrow Action Form */}
                <div className="borrow-action-section">
                    <label htmlFor="borrowAmount">Amount :</label>
                    <textarea
                        id="borrowAmount"
                        name="borrowAmount"
                        rows={3}
                        placeholder="Number of item borrowed"
                        value={borrowAmount}
                        onChange={(e) => setBorrowAmount(e.target.value)}
                    />
                    <button type="button" onClick={handleBorrow}>Borrow</button>
                </div>
            </main>
        </>
    );
};

export default ReturnedItemPage;