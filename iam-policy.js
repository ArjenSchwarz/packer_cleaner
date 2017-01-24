{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Stmt1484809260000",
            "Effect": "Allow",
            "Action": [
                "ec2:DescribeInstances",
                "ec2:StopInstances",
                "ec2:TerminateInstances"
            ],
            "Resource": [
                "*"
            ]
        },
        {
          "Sid": "Stmt1484809260001",
          "Effect": "Allow",
          "Action": [
            "sns:Publish"
          ],
          "Resource": [
            "arn:aws:sns:*:123456789012:my_topic"
          ]
        }

    ]
}
