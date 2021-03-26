import React from 'react';

import styles from './index.module.css';
import compass from './compass.svg';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <h2>Error of SVG: the below svg can not show properly</h2>
      <img src={compass}/>
    </div>
  );
}

export default Index;
