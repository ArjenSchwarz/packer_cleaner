# Lambda: Packer cleanup

This Lambda function allows you to automatically clean up your long-running Packer instances. When using Packer it's possible that a Packer builder doesn't get terminated for one reason or another. This Lambda function allows you to automate the cleanup of these instances.

It will either stop or terminate the Packer instances and optionally send you a notification about it.

# Usage

Copy the contents of index.py (or download the release zip file) and create a Lambda function with it using the Python runtime.

The minimum resources for a Lambda function are sufficient to run it, but depending on the size of your environment you might want to increase the timeout.

## Environment variables

The following environment variables are expected:

* max_runtime: The maximum time a Packer instance is allowed to run, in full hours.
* method: "stop" or "terminate" or your options here. If you fill in anything else it will only send a notification.
* sns_topic: The ARN of the SNS topic you want to use for notifications. If you don't want notifications you can leave the value empty.

## Permissions

The Lambda function will need permissions to execute the various commands. This means you should create a Lambda role with a policy containing these permissions. See the [iam-policy.js][iam-policy.js] file for an example policy that contains the various permissions.

* **ec2:DescribeInstances**: Required for finding the instances created by Packer
* **ec2:StopInstances**: Required if you want to stop the instances
* **ec2:TerminateInstances**: Required if you want to terminate the instances
* **sns:Publish**: Required if you want to send a notification

# Manual

Using manual.py you can run the command from your local machine. Just adjust the variables at the top and you'll be good to go.
