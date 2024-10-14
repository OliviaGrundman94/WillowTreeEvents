class Header extends HTMLElement {
    constructor() {
      super();
    }


  connectedCallback() {
    this.innerHTML = 
    `<header>
        <nav class="nav">
            <ul class="list sidebar">
                <li onClick=hideSidebar()><a href=""><i class="fa-solid fa-xmark"></i></a></li>
                <li><a href="about.html">About</a></li>
                <li>
                    <a href="#">Services</a>
                    <ul class="dropdown">
                        <li><a href="weddings.html">Weddings</a></li>
                        <li><a href="privatecelebrations.html">Private Celebrations</a></li>
                        <li><a href="corporateevents.html">Corporate Events</a></li>
                    </ul>
                </li>
                <li><a href="testimonials.html">Testimonials</a></li>
                <li><a href="enquiries.html">Enquiries</a></li>
            </ul>
            <ul class="list">
                <li class="nav_logo"><a href="index.html"><img src="/images/WillowTreeLogo_White_NoBackground.png" alt=""></a></li>
                <li class="hideOnMobile"><a href="about.html">About</a></li>
                <li class="hideOnMobile">
                    <a href="#">Services</a>
                    <ul class="dropdown">
                        <li><a href="weddings.html">Weddings</a></li>
                        <li><a href="privatecelebrations.html">Private Celebrations</a></li>
                        <li><a href="corporateevents.html">Corporate Events</a></li>
                    </ul>
                </li>
                <li class="hideOnMobile"><a href="testimonials.html">Testimonials</a></li>
                <li class="hideOnMobile"><a href="enquiries.html">Enquiries</a></li>
                <li class="menu-button" onClick=showSidebar()><a href=""><i class="fa-solid fa-bars"></i></a></li>
            
            </ul>
        </nav>
    </header>`;
    }   
}

  customElements.define('header-component', Header);

