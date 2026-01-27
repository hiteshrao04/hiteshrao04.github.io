import React, { useEffect } from 'react';
import { Truck, Clock, MapPin, Package } from 'lucide-react';
import './DeliveryPolicy.css';

const DeliveryPolicy = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animated');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="delivery-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="display-large animated">Delivery Policy</h1>
          <p className="body-large animated">Fresh from Farm to Your Home</p>
        </div>
      </section>

      {/* Main Delivery Info */}
      <section className="delivery-main-section">
        <div className="container">
          <div className="delivery-highlight network-card animated">
            <Truck size={64} className="delivery-icon" />
            <h2 className="heading-1">Harvest-to-Home Delivery</h2>
            <p className="body-large">
              We harvest your kinnow fresh after receiving your order. No cold storage, 
              no aging - just pure farm freshness delivered to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Details */}
      <section className="delivery-details-section">
        <div className="container">
          <div className="delivery-grid">
            <div className="network-card animated hover-lift">
              <Clock size={48} className="detail-icon" />
              <h3 className="heading-3">Delivery Timeline</h3>
              <ul className="delivery-list">
                <li><strong>Order Confirmation:</strong> Within 2 hours</li>
                <li><strong>Harvest Time:</strong> Same day or next morning</li>
                <li><strong>Packing:</strong> Immediately after harvest</li>
                <li><strong>Delivery:</strong> Within 24-48 hours of order</li>
              </ul>
            </div>

            <div className="network-card animated hover-lift">
              <MapPin size={48} className="detail-icon" />
              <h3 className="heading-3">Delivery Areas</h3>
              <ul className="delivery-list">
                <li><strong>Punjab Region:</strong> All major cities</li>
                <li><strong>Chandigarh:</strong> Available</li>
                <li><strong>Ludhiana:</strong> Available</li>
                <li><strong>Patiala:</strong> Available</li>
                <li><strong>Other Areas:</strong> Contact for availability</li>
              </ul>
            </div>

            <div className="network-card animated hover-lift">
              <Package size={48} className="detail-icon" />
              <h3 className="heading-3">Minimum Order</h3>
              <ul className="delivery-list">
                <li><strong>Minimum:</strong> 5 KG</li>
                <li><strong>Recommended:</strong> 10 KG (Best value)</li>
                <li><strong>Bulk Orders:</strong> 50 KG+ (Contact us)</li>
                <li><strong>Packaging:</strong> Farm-fresh boxes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="process-section">
        <div className="container">
          <h2 className="heading-1 section-title animated">Our Delivery Process</h2>
          <div className="process-timeline">
            <div className="timeline-item animated">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3 className="heading-3">Order Placed</h3>
                <p className="body-medium">
                  You place an order via WhatsApp with your delivery address and preferred quantity.
                </p>
              </div>
            </div>

            <div className="timeline-item animated">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3 className="heading-3">Order Confirmed</h3>
                <p className="body-medium">
                  We confirm availability, delivery date, and total amount including delivery charges.
                </p>
              </div>
            </div>

            <div className="timeline-item animated">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3 className="heading-3">Fresh Harvest</h3>
                <p className="body-medium">
                  Your kinnow is freshly picked from our farm trees at optimal ripeness.
                </p>
              </div>
            </div>

            <div className="timeline-item animated">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3 className="heading-3">Quality Check & Pack</h3>
                <p className="body-medium">
                  Each fruit is inspected and carefully packed to ensure safe delivery.
                </p>
              </div>
            </div>

            <div className="timeline-item animated">
              <div className="timeline-number">5</div>
              <div className="timeline-content">
                <h3 className="heading-3">Delivery</h3>
                <p className="body-medium">
                  Your order is delivered to your doorstep within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Charges */}
      <section className="charges-section">
        <div className="container">
          <div className="charges-card network-card animated">
            <h2 className="heading-2">Delivery Charges</h2>
            <div className="charges-grid">
              <div className="charge-item">
                <h4 className="heading-3">Within City</h4>
                <p className="charge-price">₹50-100</p>
                <p className="body-small">Depends on location</p>
              </div>
              <div className="charge-item">
                <h4 className="heading-3">Nearby Cities</h4>
                <p className="charge-price">₹100-200</p>
                <p className="body-small">Within 50km radius</p>
              </div>
              <div className="charge-item">
                <h4 className="heading-3">Bulk Orders (20kg+)</h4>
                <p className="charge-price">Discounted</p>
                <p className="body-small">Contact for rates</p>
              </div>
            </div>
            <p className="body-small charge-note">
              * Delivery charges will be confirmed at the time of order based on your location
            </p>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="policy-notes-section">
        <div className="container">
          <div className="policy-notes-card network-card animated">
            <h2 className="heading-2">Important Information</h2>
            <div className="notes-content">
              <div className="note-item">
                <h4 className="heading-3">Seasonal Availability</h4>
                <p className="body-medium">
                  Deliveries are available only during harvest season (November - February). 
                  Limited daily capacity based on harvest.
                </p>
              </div>
              <div className="note-item">
                <h4 className="heading-3">Weather Delays</h4>
                <p className="body-medium">
                  In case of extreme weather, deliveries may be delayed. We'll notify you immediately.
                </p>
              </div>
              <div className="note-item">
                <h4 className="heading-3">Quality Guarantee</h4>
                <p className="body-medium">
                  If you're not satisfied with the quality, contact us within 24 hours of delivery.
                </p>
              </div>
              <div className="note-item">
                <h4 className="heading-3">Contact Required</h4>
                <p className="body-medium">
                  Please ensure someone is available to receive the delivery. We'll call before arrival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeliveryPolicy;
