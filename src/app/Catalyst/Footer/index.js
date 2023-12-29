import Image from 'next/image';
import React from 'react'
import styles from './styles.module.css';

const PAGES = ['home', 'all products', 'featured products', 'contact', 'about us'];

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.brand_name}>
            <span className={styles.highlight_name}>right</span>fit.com
        </div>
        <div className={styles.footer_bottom_section}>
            <div className={styles.footer_left_section}>
                <div className={styles.footer_left_sub_section_one}>
                    {PAGES.map((page)=> {return(<div key={page} className={styles.page_name}>{page}</div>)})}
                </div>
                <div className={styles.footer_left_sub_section_two}>
                   <div className={styles.payment_gateway}>We are a registered E-Commerce seller and we support a variety of Local and International payment modes</div>
                    <Image src="https://i.postimg.cc/pVcbhMQR/image-1.png" alt="payment gateway" width={329} height={55} />
                </div>
            </div>
            <div className={styles.footer_right_section}>
                <div className={styles.protected_by}>Website protected by</div>
                <Image src="https://i.postimg.cc/KjHwX0HT/image-2.png" alt="brand logo" width={220} height={53} />
            </div>
        </div>
    </div>
  )
}

export default Footer;