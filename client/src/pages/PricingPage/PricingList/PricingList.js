import { Link } from 'react-router-dom';
import prices from './prices.json';
import styles from './PricingList.module.sass';

function PricingList () {
  const mapBody = (pr, index) => (
    <li key={index}>
      {pr.body}
      {pr.tooltipe}
    </li>
  );

  const mapArticles = (p, index) => (
    <li key={index} className={styles.priceItem}>
      <div style={{ border: `5px solid ${p.color}` }}>
        <h3 style={{ color: `${p.color}` }}>{p.type}</h3>
        <p>{p.describeType}</p>
        <p style={{ color: `${p.color}` }}>{p.price}</p>
      </div>

      <ul>{p.profit.map(mapBody)}</ul>
      <Link to='#' style={{ backgroundColor: `${p.color}` }}>
        <i class='fa fa-check' /> Start
      </Link>
    </li>
  );
  return <ul className={styles.pricesList}>{prices.map(mapArticles)}</ul>;
}

export default PricingList;
