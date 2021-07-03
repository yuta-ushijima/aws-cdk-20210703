const cdk = require("@aws-cdk/core");
const s3 = require("@aws-cdk/aws-s3");

class AwsCdk20210703Stack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new s3.Bucket(this, "MyBucket", {
      bucketName: "my-bucket-aws-cdk-js-20210703",
      versioned: true,
    });
  }
}

module.exports = { AwsCdk20210703Stack };
