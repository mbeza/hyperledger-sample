# Set of commands to instal Fabric on Linux

`sudo apt-get install curl`

`sudo apt-get install golang-go`

`export GOPATH=$HOME/go`

`export PATH=$PATH:$GOPATH/bin`

`sudo apt-get install nodejs`

`sudo apt-get install npm`

`sudo apt-get install python`

`sudo apt-get install docker`

`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`

`sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"`

`sudo apt-get update`

`apt-cache policy docker-ce`

`sudo apt-get install -y docker-ce`

`sudo apt-get install docker-compose`

`sudo apt-get upgrade`

# Installing the latest production release of Fabric

`sudo curl -sSL https://bit.ly/2ysbOFE | bash -s`

`sudo chmod 777 -R fabric-samples`
