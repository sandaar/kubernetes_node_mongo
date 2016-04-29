    docker run --name node_base --link mongo_base:mongodb -it gcr.io/lunar-tube-129306/node_base:v1
    docker exec -it node_base bash
    npm install
    root@aa904f400526:/home# chmod +x get_words.js 
    root@aa904f400526:/home# ./get_words.js h___
    ctrl p ctrl q
    docker exec -it node_base /home/get_words.js h___
    
    deploy
    kubectl run node-base --image=gcr.io/lunar-tube-129306/node_base:v
    1 -i --tty
    ctrl p ctrl q
    kubectl exec node-base-687368770-0780i -c node-base -it bash
    npm install
    chmod +x get_words.js
    ctrl p ctrl q
    
    # hack! exposing external ip to get in 
    kubectl expose deployment mongo-base --type='LoadBalancer'
    
    # get internal ip
    kubectl get services mongo-base
    
    # edit the script
     kubectl exec node-base-687368770-0780i -c node-base -it bash
    sed -i 's/mongo:/xxx.xxx.xxx.xxx:/g' get_word.js
     
    # run the script
    kubectl exec node-base#-687368770-0780i -c node-base -it /home/get_words.js h___
