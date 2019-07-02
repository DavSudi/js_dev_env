import './index.css';

import numeral from 'numeral';

const courseValue = numeral(10000).format('$0,0.00');

console.log(`I will pay ${courseValue} for the learning JS with Corey!`); //eslint-disable-line no-consle
