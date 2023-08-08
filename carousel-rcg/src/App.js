import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';
import './style.css';
import { FaHome, FaEnvelope, FaPhone } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <div className="top-panel">
          <div className="logo">Your Logo</div>
          <div className="menu">
            <div className="menu-item">
              <FaHome />
              <span>Home</span>
            </div>
            <div className="menu-item">
              <FaEnvelope />
              <span>Contact</span>
            </div>
            <div className="menu-item">
              <FaPhone />
              <span>Call</span>
            </div>
          </div>
        </div>
        <div className="content-container">
          <div className="carousel-root">
            <Carousel 
              showThumbs={false} autoPlay={true}
              interval={5000} // Set interval to 5 seconds
              transitionTime={1000} // Set transition time for the crossfade effect
              infiniteLoop={true}>
              <div>
                <img src="/img/theguyiswatching.webp" alt="Carousel Slide 1" />
              </div>
              <div>
                <img src="/img/vendors.webp" alt="Carousel Slide 2" />
              </div>
              <div>
                <img src="/img/minipeople.webp" alt="Carousel Slide 3" />
              </div>
            </Carousel>
          </div>
          <div className="content">
            <h2>Welcome to Our Website</h2>
            <p>This is a sample React website with a carousel banner and content below.</p>
          </div>

          <div className="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonial">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo at odio eleifend scelerisque ac eu leo.</p>
              <p>- John Doe</p>
            </div>
            <div className="testimonial">
              <p>Nullam vel libero ut arcu mattis feugiat sit amet a odio. Proin ut lorem varius, consequat nulla eu, aliquam odio.</p>
              <p>- Jane Smith</p>
            </div>
          </div>

          <div className="video-panel">
            <div className="video">
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/o5g-lUuFgpg"
                  title="Video Title"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="description">
              <h2>Discover Our Services</h2>
              <p>Watch this video to learn more about what we offer and how we can help you.</p>
            </div>
          </div>

          <div className="address">
            <h2>Contact Us</h2>
            <p>123 Ocean Avenue, Seaside Town</p>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
      
      <footer>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
