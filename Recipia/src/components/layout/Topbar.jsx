function Topbar() {
  return (
    <header className="topbar">
      <div className="brand">Recipia</div>
      <label className="search" aria-label="Search recipes">
        <span className="search-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img">
            <path
              d="M20 20L16.65 16.65M18 11A7 7 0 1 1 4 11a7 7 0 0 1 14 0Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <input type="search" placeholder="Search for recipes" />
      </label>
      <div className="top-actions">
        <button className="action-button">
          <span className="icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 5v14M5 12h14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          Add
        </button>
        <button className="icon-button" aria-label="Saved">
          <svg viewBox="0 0 24 24" role="img">
            <path
              d="M7 4h10a2 2 0 0 1 2 2v14l-7-4-7 4V6a2 2 0 0 1 2-2Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="icon-button" aria-label="Profile">
          <svg viewBox="0 0 24 24" role="img">
            <path
              d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm6 8a6 6 0 0 0-12 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Topbar
