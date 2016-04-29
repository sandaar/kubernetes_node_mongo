# kubernetes_node_mongo

NodeJS app in a container talks to mongoDB which lives in other container to retrieve 3-4 letters english words which match some pattern. 
For example for *h__*:

    Hot, huh, hit, hey etc.

Run the app:

    kubectl exec node-base-687368770-0780i -c node-base -it /home/get_words.js h___
    
# TODO
replace all manual actions with single Dockerfile for each container. Current solutions got stuck at containers exiting right after creation and start. Here are those not working files:

    # populate_data.sh
    #!/bin/sh
    
    mongod  --fork --logpath=/tmp/mongodb.log --smallfiles
    sleep 20
    mongoimport --db task --collection words --file /home/words.json
    exec mongo
    
    # make sure you have records.json
    # Dockerfile for mongo
    FROM mongo:latest
    WORKDIR /home
    ADD words.json /home/words.json
    ADD populate_data.sh /home/populate_data.sh
    RUN chmod +x /home/populate_data.sh
    ENTRYPOINT ["./populate_data.sh"]
    
    # Dockerfile for nodejs
    FROM node:latest
    WORKDIR /home
    ADD get_words.js /home/get_words.js
    ADD package.json /home/package.json
    RUN chmod +x /home/get_words.js
    RUN npm install
