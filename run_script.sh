#!/bin/bash 
kubectl port-forward svc/frontend-svc 8080:8080 -n project --address=0.0.0.0 & 
kubectl port-forward svc/backend-svc  5000:5000 -n project --address=0.0.0.0 & 
echo "port forwarded both the services "
