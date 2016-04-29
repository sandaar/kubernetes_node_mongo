    # for a reference. to be removed in future
    # Dockerfile 
    FROM mongo:latest
    WORKDIR /home
    ADD words.json /home/words.json
    ADD gen_words.py /home/gen_words.py
    
    # build
    docker build -t gcr.io/lunar-tube-129306/mongo_base:v1 .
    
    #run and then exit by Ctrl-C
    docker run  --name mongo_base gcr.io/lunar-tube-129306/mongo_base
    :v1
    
    # start in bg
    docker start mongo_base
    
    # go to tty 
    docker exec -it mongo_base bash
    
    # import data and then ctrl p ctrl q to detach
    mongoimport --db task --collection words --file /home/words.json
    
    # push
    gcloud docker push gcr.io/lunar-tube-129306/mongo_base:v1
    
    # deploy to the cloud
    kubectl run mongo-base --image=gcr.io/lunar-tube-129306/mongo_bas
    e:v1
    
     # ensure 
    kubectl get deployments
    kubectl get pods
    
    # go to tty
    kubectl exec mongo-base-3730009108-jeb1x -c mongo-base -it bash
    
    # import data
    mongoimport --db task --collection words --file /home/words.json
    
    # verify data present
    mongo
    show dbs
    use task
    show collections
    db.words.count({})
    exit
    ctr p ctrl q
    
     # ensure STATUS RUNNING, AVAILABLE 1
    kubectl get deployments
    kubectl get pods
