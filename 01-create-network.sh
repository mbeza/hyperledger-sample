chmod -R 0755 ./artifacts
rm -rf ./artifacts/

mkdir ./artifacts
bin/cryptogen generate --config=./network-configuration/crypto-config.yaml --output=./artifacts/crypto-config/

# System channel
SYS_CHANNEL="sys-channel"

# channel name defaults to "mychannel"
CHANNEL_NAME="mychannel"

#Generate System Genesis block
#name of profile from configtx.yaml
bin/configtxgen -profile OrdererGenesis -configPath ./network-configuration -channelID $SYS_CHANNEL  -outputBlock ./artifacts/genesis.block

# Generate channel configuration block
# name of profile from configtx.yaml
bin/configtxgen -profile BasicChannel -configPath ./network-configuration -outputCreateChannelTx ./artifacts/mychannel.tx -channelID $CHANNEL_NAME


echo "#######    Generating anchor peer update for Org1MSP  ##########"
bin/configtxgen -profile BasicChannel -configPath ./network-configuration  -outputAnchorPeersUpdate ./artifacts/Org1MSPanchors.tx -channelID $CHANNEL_NAME -asOrg Org1MSP

echo "#######    Generating anchor peer update for Org2MSP  ##########"
bin/configtxgen -profile BasicChannel -configPath ./network-configuration  -outputAnchorPeersUpdate ./artifacts/Org2MSPanchors.tx -channelID $CHANNEL_NAME -asOrg Org2MSP

echo "#######    Generating anchor peer update for Org3MSP  ##########"
bin/configtxgen -profile BasicChannel -configPath ./network-configuration  -outputAnchorPeersUpdate ./artifacts/Org3MSPanchors.tx -channelID $CHANNEL_NAME -asOrg Org3MSP