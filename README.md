# kubernetes_node_mongo

NodeJS app in a container talks to mongoDB which lives in other container to retrieve 3-4 letters english words which match some pattern. 
For example for *h__*:

    Hot, huh, hit, hey etc.

Run the app:

    kubectl exec node-base-687368770-0780i -c node-base -it /home/get_words.js h___
