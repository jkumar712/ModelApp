import { test } from 'qunit';
import moduleForAcceptance from 'project1/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | addbook');

test('visiting /addbook', function(assert) {
  visit('/addbook');

  andThen(function() {
    assert.equal(currentURL(), '/addbook');
  });
});
