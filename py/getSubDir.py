

import os
test_directory = "solid-jellyfish.com"
for child in os.listdir(test_directory):
    test_path = os.path.join(test_directory, child)
    if os.path.isdir(test_path):
        print (test_path)
