#!/bin/bash

set -euo pipefail

# The input for this script is the scores.json file.
# TODO: Write a command to output the names of each player, as well as their city.
# Your output should contain 6 lines, each with two words on it.

hammadhaider@Hammads-MacBook-Pro jq % jq -r '.[] | .name + " " + .city' scores.json
Ahmed London
Basia London
Mehmet Birmingham
Leila London
Piotr Glasgow
Chandra Birmingham