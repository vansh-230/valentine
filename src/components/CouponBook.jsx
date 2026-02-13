import { useState } from 'react';
import './CouponBook.css';
import { config } from '../config';

function CouponBook() {
    const [redeemedCoupons, setRedeemedCoupons] = useState([]);

    const redeemCoupon = (couponId) => {
        if (!redeemedCoupons.includes(couponId)) {
            setRedeemedCoupons([...redeemedCoupons, couponId]);
        }
    };

    const isRedeemed = (couponId) => redeemedCoupons.includes(couponId);

    return (
        <div className="coupon-book-section">
            <div className="container">
                <h2 className="section-title text-center mb-lg">Coupon Book 🎟️</h2>
                <p className="section-subtitle text-center mb-xl">
                    Redeem these special coupons anytime you want!
                </p>

                <div className="coupons-container">
                    {config.coupons.map((coupon, index) => (
                        <div
                            key={coupon.id}
                            className={`coupon-card glass ${isRedeemed(coupon.id) ? 'redeemed' : ''} fade-in`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="coupon-icon">{coupon.icon}</div>

                            <div className="coupon-content">
                                <h3 className="coupon-title">{coupon.title}</h3>
                                <p className="coupon-description">{coupon.description}</p>
                            </div>

                            <button
                                className={`btn ${isRedeemed(coupon.id) ? 'btn-secondary' : 'btn-primary'} redeem-button`}
                                onClick={() => redeemCoupon(coupon.id)}
                                disabled={isRedeemed(coupon.id)}
                            >
                                {isRedeemed(coupon.id) ? 'Redeemed ✓' : 'Redeem'}
                            </button>

                            {isRedeemed(coupon.id) && (
                                <div className="stamp">
                                    <span>REDEEMED</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CouponBook;
