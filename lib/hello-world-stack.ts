import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';
export class HelloWorldStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new s3.Bucket(this, 'TestCdkBucket', {
            versioned: true,
            bucketName: 'testando-cdk',
        });

        const testFunction = new lambda.Function(this, 'testCdkFunction', {
            code: new lambda.AssetCode('src'),
            handler: 'test.handler',
            runtime: lambda.Runtime.NODEJS_10_X,
            environment: {
                TEST: 'oneTwo',
            },
        });

        const api = new apigateway.RestApi(this, 'testCdkApi', {
            restApiName: 'Test CDK Api',
        });

        const testResource = api.root.addResource('test');

        //Como segundo parametro esse cara aceita options => proxy é true por default
        const testFunctionIntegration = new apigateway.LambdaIntegration(testFunction);

        testResource.addMethod('GET', testFunctionIntegration);
    }
}
