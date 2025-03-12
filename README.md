# Skaffold Blog

Blog: [SinghSpeak.com/blog/kubernetes-development-ci-cd-with-skaffold](https://singhspeak.com/blog/kubernetes-development-ci-cd-with-skaffold)

## Build Backend To Run Locally

pip install -r requirements

## Build Images

If you are working with Minikube and want to try this locally run the following before building the images:

eval $(minikube docker-env)

docker build -t background-image ./background --network=host
docker build -t frontend-image ./frontend --network=host

If you're not using minikube publish these images to a docker registry and update the manifest files (k8s/backend-deployment.yaml and k8s/frontend-deployment.yaml and ) to include the image.

## Deploy apps to the cluster

kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/backend-deployment.yaml

## Get URL for frontend service

After you deploy the services, run the following command to get the URL.

minikube service frontend-service
