#!/usr/bin/env bash
ng build --prod

## /Library/WebServer/Documents/angularapp/ path to VH directory

cp dist/* /Library/WebServer/Documents/angularapp/


# will chain more commands later on