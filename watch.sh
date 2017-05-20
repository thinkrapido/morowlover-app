[ ! -e dist ] && mkdir dist
( sleep 15 && cp src/electron/* dist && electron . ) &
grep -q '"ejected": true' .angular-cli.json && webpack -w || ng build -w
