export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start"
            data-bs-backdrop="static"
            data-bs-keyboard="true"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Shae & Connor&apos;s Wedding
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" href="/our-story.html">
                    Our Story
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/wedding-party.html">
                    Wedding Party
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/registry.html">
                    Registery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/travel.html">
                    Travel
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/faqs.html">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/rsvp.html">
                    RSVP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
