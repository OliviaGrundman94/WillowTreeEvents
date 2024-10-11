class Header extends HTMLElement {
    constructor() {
      super();
    }


  connectedCallback() {
    this.innerHTML = 
    `<header class="header" id="header">
        <nav class="nav container">
            <a href="index.html" class="nav_logo">
                <img src="images/WillowTreeLogo_White_NoBackground.png" alt="Logo">
            </a>
            <div class="nav_menu" id="nav-menu">
                <ul class="nav_list">
                    <li class="nav_item">
                        <a href="about.html" class="nav_link">About</a>
                    </li>
                    <li class="nav_item dropdown">
                        <a href="javascript:void(0)" class="dropbtn nav_link">Services</i></a>
                        <div class="dropdown-content">
                            <a href="weddings.html">Weddings</a>
                            <a href="privatecelebrations.html">Private Celebrations</a>
                            <a href="corporateevents.html">Corporate Events</a>
                        </div>
                    </li>
                    <li class="nav_item">
                        <a href="testimonials.html" class="nav_link">Testimonials</a>
                    </li>
                    <li class="nav_item">
                        <a href="enquiries.html" class="nav_link">Enquiries</a>
                    </li>
                </ul>
            </div>
                <div class="nav_toggle" id="nav-toggle">
                    <i class="fa-solid fa-bars"></i>
                </div>
        </nav>
        
    </header>
    `;
    }   
}

  customElements.define('header-component', Header);



  class GreenHeader extends HTMLElement {
    constructor() {
      super();
    }


  connectedCallback() {
    this.innerHTML = 
    `<header class="header header-green" id="header">
        <nav class="nav-green container">
            <a href="index.html" class="nav_logo-green">
                <img src="images/WillowTreeLogo_White_NoBackground.png" alt="Logo">
            </a>
            <div class="nav_menu-green" id="nav-menu-green">
                <ul class="nav_list-green">
                    <li class="nav_item-green"><a href="about.html" class="nav_link-green">About</a></li>
                    <li class="nav_item-green dropdown-green">
                        <a href="javascript:void(0)" class="nav_link-green dropbtn-green">Services</a>
                        <div class="dropdown-content-green">
                            <a href="weddings.html">Weddings</a>
                            <a href="privatecelebrations.html">Private Celebrations</a>
                            <a href="corporateevents.html">Corporate Events</a>
                        </div>
                    </li>
                    <li class="nav_item-green"><a href="testimonials.html" class="nav_link-green">
                        Testimonials</a>
                    </li>
                    <li class="nav_item-green">
                        <a href="enquiries.html" class="nav_link-green">
                        Enquiries
                        </a>
                    </li>
                </ul>
                <div class="nav_close-green" id="nav-close-green">
                    <i class="fa-solid fa-xmark">
                    </i>
                </div>
            </div>
            <div class="nav_toggle-green" id="nav-toggle-green">
                <i class="fa-solid fa-bars">
                </i>
            </div>
        </nav>
    </header>
    `;
    }   
}

  customElements.define('green-header-component', GreenHeader);