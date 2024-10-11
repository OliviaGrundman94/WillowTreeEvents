class Footer extends HTMLElement {
    constructor() {
      super();
    }


  connectedCallback() {
    this.innerHTML = 
    `     <footer class="footer">
            <div class="footer_container">
                <div class="footer_content">
                    <div class="footer_data">
                        <div>
                            <a href="index.html" class="footer_logo">
                                <img src="images/WillowTreeLogo_White_NoBackground.png" alt="Logo">
                            </a>
                        </div>
                    
                        <div class="contact_us_data">
                            <h3 class="footer_title">Contact Us</h3>
                            <ul class="footer_links">
                                <li><a href="enquiries.html">Send Enquiry</a></li>
                            </ul>  
                        </div>
                        <div class="support_data">
                            <h3 class="footer_title">Support</h3>
                            <ul class="footer_links">
                                <li><a href="privacypolicy.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div class="footer_social">     
                            <a href="https://instagram.com/willowtreeevents.uk" target="_blank" class="footer_social_link">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" class="footer_social_link">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                            <a href="https://pinterest.com" target="_blank" class="footer_social_link">
                                <i class="fa-brands fa-pinterest"></i>
                            </a>
                        </div>
                        <!-- <span class="footer_copy">&#169; Copyright WillowTreeEvents UK. All rights reserved.</span> -->
                    </div>
                </div>
            </div>
        </footer>`
}   
}

  customElements.define('footer-component', Footer);