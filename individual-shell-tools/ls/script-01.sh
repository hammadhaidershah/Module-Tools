#!/bin/bash

set -euo pipefail

# Do not change this part of the script - only change after the TODO comment.

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
if [[ "${script_dir}" != "$(pwd)" ]]; then
  echo >&2 "ERROR: You haven't cd'd into the correct directory."
  echo >&2 "For each exercise, you should cd to the directory containing the script before running it."
  exit 1
fi

# TODO: Write a command to list the files and folders in this directory.
# The output should be a list of names including child-directory, script-01.sh, script-02.sh, and more.

hammadhaider@Hammads-MacBook-Pro individual-shell-tools % ls -R
awk             grep            ls              sed
cat             helper-files    README.md       wc

./awk:
README.md               script-02.sh            script-05.sh
scores-table.txt        script-03.sh            script-06-stretch.sh
script-01.sh            script-04.sh            script-07-stretch.sh

./cat:
script-01.sh            script-03.sh
script-02.sh            script-04-stretch.sh

./grep:
dialogue-2.txt  dialogue.txt    script-02.sh    script-04.sh    script-06.sh
dialogue-3.txt  script-01.sh    script-03.sh    script-05.sh    script-07.sh

./helper-files:
helper-1.txt    helper-2.txt    helper-3.txt

./ls:
child-directory script-01.sh    script-02.sh    script-03.sh    script-04.sh

./ls/child-directory:
helper-1.txt    helper-2.txt    helper-3.txt

./sed:
input.txt       script-02.sh    script-04.sh    script-06.sh
script-01.sh    script-03.sh    script-05.sh

./wc:
script-01.sh    script-02.sh    script-03.sh