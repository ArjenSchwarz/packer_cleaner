import os

os.environ['max_runtime'] = "2"
os.environ['method'] = "terminate"
os.environ['sns_topic'] = ""

import index

index.lambda_handler("", "")
