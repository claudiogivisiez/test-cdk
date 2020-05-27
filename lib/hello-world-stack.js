"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("@aws-cdk/core");
const s3 = require("@aws-cdk/aws-s3");
const lambda = require("@aws-cdk/aws-lambda");
const apigateway = require("@aws-cdk/aws-apigateway");
class HelloWorldStack extends cdk.Stack {
    constructor(scope, id, props) {
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
exports.HelloWorldStack = HelloWorldStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8td29ybGQtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoZWxsby13b3JsZC1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFxQztBQUNyQyxzQ0FBc0M7QUFDdEMsOENBQThDO0FBQzlDLHNEQUFzRDtBQUN0RCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDMUMsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNoRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRTtZQUNqQyxTQUFTLEVBQUUsSUFBSTtZQUNmLFVBQVUsRUFBRSxjQUFjO1NBQzdCLENBQUMsQ0FBQztRQUVILE1BQU0sWUFBWSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDOUQsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDakMsT0FBTyxFQUFFLGNBQWM7WUFDdkIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxXQUFXLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLFFBQVE7YUFDakI7U0FDSixDQUFDLENBQUM7UUFFSCxNQUFNLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUNuRCxXQUFXLEVBQUUsY0FBYztTQUM5QixDQUFDLENBQUM7UUFFSCxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVsRCw2RUFBNkU7UUFDN0UsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUvRSxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FDSjtBQTdCRCwwQ0E2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgKiBhcyBzMyBmcm9tICdAYXdzLWNkay9hd3MtczMnO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ0Bhd3MtY2RrL2F3cy1sYW1iZGEnO1xuaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tICdAYXdzLWNkay9hd3MtYXBpZ2F0ZXdheSc7XG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZFN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgICAgICBuZXcgczMuQnVja2V0KHRoaXMsICdUZXN0Q2RrQnVja2V0Jywge1xuICAgICAgICAgICAgdmVyc2lvbmVkOiB0cnVlLFxuICAgICAgICAgICAgYnVja2V0TmFtZTogJ3Rlc3RhbmRvLWNkaycsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHRlc3RGdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ3Rlc3RDZGtGdW5jdGlvbicsIHtcbiAgICAgICAgICAgIGNvZGU6IG5ldyBsYW1iZGEuQXNzZXRDb2RlKCdzcmMnKSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICd0ZXN0LmhhbmRsZXInLFxuICAgICAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEwX1gsXG4gICAgICAgICAgICBlbnZpcm9ubWVudDoge1xuICAgICAgICAgICAgICAgIFRFU1Q6ICdvbmVUd28nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYXBpID0gbmV3IGFwaWdhdGV3YXkuUmVzdEFwaSh0aGlzLCAndGVzdENka0FwaScsIHtcbiAgICAgICAgICAgIHJlc3RBcGlOYW1lOiAnVGVzdCBDREsgQXBpJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdGVzdFJlc291cmNlID0gYXBpLnJvb3QuYWRkUmVzb3VyY2UoJ3Rlc3QnKTtcblxuICAgICAgICAvL0NvbW8gc2VndW5kbyBwYXJhbWV0cm8gZXNzZSBjYXJhIGFjZWl0YSBvcHRpb25zID0+IHByb3h5IMOpIHRydWUgcG9yIGRlZmF1bHRcbiAgICAgICAgY29uc3QgdGVzdEZ1bmN0aW9uSW50ZWdyYXRpb24gPSBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFJbnRlZ3JhdGlvbih0ZXN0RnVuY3Rpb24pO1xuXG4gICAgICAgIHRlc3RSZXNvdXJjZS5hZGRNZXRob2QoJ0dFVCcsIHRlc3RGdW5jdGlvbkludGVncmF0aW9uKTtcbiAgICB9XG59XG4iXX0=