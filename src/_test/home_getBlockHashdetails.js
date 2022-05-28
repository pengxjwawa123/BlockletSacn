import assert from 'assert';
import { getBlockHashdetails } from '../pages/home';

describe('get BlockHash detail is ok?', function () {
  assert.ok(getBlockHashdetails());
});
