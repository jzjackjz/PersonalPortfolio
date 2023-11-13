function createNavigation() {
    return `
        <nav id="desktop-nav">
            <div class="logo">Jack Zhang</div>
            <div>
                <ul class="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Skills</a></li>
                    <li><a href="#projects">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    `;
}

function navigationClick() {
    return `
        <nav id="hamburger-nav">
        <div class="logo">Jack Zhang</div>
        <div class="hamburger-menu">
            <div class="hamburger-icon" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
            </div>
            <div class="menu-links">
            <li><a href="#about" onclick="toggleMenu()">About</a></li>
            <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
            <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
            <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
            </div>
        </div>
        </nav>
        `;
}

function createFooter() {
    return `
        <footer>
        <nav>
            <div class="nav-links-container">
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Skills</a></li>
                <li><a href="#projects">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </div>
        </nav>
        </footer>
        `;
}