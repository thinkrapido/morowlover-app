[ ! -e dist ] && mkdir dist
( sleep 15 && cp src/electron/* dist && electron . ) &
ng build -w
