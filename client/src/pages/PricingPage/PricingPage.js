import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PricingList from './PricingList/PricingList';
import styles from './PricingPage.module.sass';

function PricingPage () {
  return (
    <div>
      <Header />
      <div className={styles.pageContainer}>
        <PricingList />
      </div>
      <Footer />
    </div>
  );
}

export default PricingPage;
