#make proyect
npm run build

#zip proyect
zip -r build.zip build

#move proyect.zip to server path
scp -i portafoliokey.pem build.zip ubuntu@ec2-54-211-21-147.compute-1.amazonaws.com:/home/ubuntu/app/dist

#connect to server to unzip
ssh -i portafoliokey.pem ubuntu@ec2-54-211-21-147.compute-1.amazonaws.com

#move to path
cd app/dist

#remove old version
rm -R build

unzip build.zip 