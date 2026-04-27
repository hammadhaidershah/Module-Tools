#!/bin/bash

set -euo pipefail

# The input for this script is the scores-table.txt file.
# TODO: Write a command to output scores-table.txt, with shows the line for the player whose first score was the second highest.
# Your output should be: "Piotr Glasgow 15 2 25 11 8" (without quotes).

hammadhaider@Hammads-MacBook-Pro sort-uniq-head-tail % sort -k3 -nr scores-table.txt | head -2 | tail -1
Piotr Glasgow 15 2 25 11 8