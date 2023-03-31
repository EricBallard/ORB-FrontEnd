#/bin/bash
serve -s build --listen 443 --ssl-cert "/path/to/fullchain.pem" --ssl-key "/path/to/privkey.pem" > filename.log 2>&1 &