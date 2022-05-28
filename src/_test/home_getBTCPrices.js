import assert from 'assert';
import { getBTCPrices } from '../pages/home';

describe('get BlockHash detail is ok?', function () {
  assert.ok(getBTCPrices());
});
