const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const AwsCdk20210703 = require('../lib/aws-cdk-20210703-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new AwsCdk20210703.AwsCdk20210703Stack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
