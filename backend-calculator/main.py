import argparse
from calculator import calculate
from history import add_record, load_history

parser = argparse.ArgumentParser()

parser.add_argument("--action")
parser.add_argument("--operation")

args = parser.parse_args()

if args.action == "calculate":
    parts = args.operation.split(",")

    num1 = float(parts[0])
    operation = parts[1]c
    num2 = float(parts[2])

    result = calculate(num1, operation, num2)

    add_record(num1, operation, num2, result)

    print(result)

elif args.action == "get-history":
    history = load_history()

    for item in history:
        print(item)