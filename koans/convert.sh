#!/bin/bash

file=$1
cp $file $file.tmp
sed "s/koans.add(\"About [A-Za-z0-9 ]*\", \"/it(\"should /" $file.tmp > $file
cp $file $file.tmp
sed "s/assertEquals/expect/g" $file.tmp > $file
cp $file $file.tmp
sed "s/__, /__).toBe(/g" $file.tmp > $file
rm $file.tmp
