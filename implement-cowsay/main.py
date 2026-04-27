import cowsay
cowsay.cow("Hello")

import cowsay
import sys

if len(sys.argv) < 2:
    print("Please write a message")
else:
    message = " ".join(sys.argv[1:])
    cowsay.cow(message)