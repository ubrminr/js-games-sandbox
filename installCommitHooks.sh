#!/bin/sh

TEMPLATE_FILE_NAME="$(git rev-parse --show-toplevel)/config/pre-commit.sample"
FILE_NAME="$(git rev-parse --show-toplevel)/.git/hooks/pre-commit"

cp $TEMPLATE_FILE_NAME $FILE_NAME
chmod +x $FILE_NAME

printf "\nDONE\n"

exit 0