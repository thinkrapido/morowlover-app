IF NOT EXIST dist ( md dist )
copy src\electron\* dist && start /b electron .
findstr /c:"\"ejected\": true" .angular-cli.json && webpack -w || start /b ng build -w
