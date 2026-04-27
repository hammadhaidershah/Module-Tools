import json

FILE = "data.json"

def load_history():
    try:
        with open(FILE, "r") as f:
            return json.load(f)
    except:
        return []

def save_history(history):
    with open(FILE, "w") as f:
        json.dump(history, f)

def add_record(num1, operation, num2, result):
    history = load_history()

    history.append({
        "num1": num1,
        "operation": operation,
        "num2": num2,
        "result": result
    })

    save_history(history)