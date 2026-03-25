import React from 'react';
// Ensure this points to the CSS file we created
import './style.css';

const BorrowPage: React.FC = () => {
    return (
        <>
        {/* Header / Search Section */}
        <header>
            <div className="profile-icon-container">
            <a href='../HomePage/HomePage.html'>
                <img
                 src="path/to/profile.jpg"
                 alt="User profile"
                 className="profile-icon"
                />
            </a>
        </div>
        <input 
          type="text" 
          placeholder="Search" 
          className="search-input" 
        />
        <button 
          type="button" 
          className="filter-button" 
          aria-label="Filter"
        ></button>
      </header>

      {/* Main Grid Section (3 columns, 4 rows) */}
      <main className="items-grid">
        {/* Dynamically generating 12 empty cards for the grid */}
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="item-card"></div>
        ))}
      </main>

      {/* Pagination Section */}
      <nav className="pagination" aria-label="Pagination Navigation">
        <a href="#" className="page-number active" aria-current="page">1</a>
        <a href="#" className="page-number">2</a>
        <a href="#" className="page-number">3</a>
        <span className="ellipsis">...</span>
        <a href="#" className="page-number">67</a>
        <a href="#" className="page-number">68</a>
        </nav>
</>
);
};

export default BorrowPage;