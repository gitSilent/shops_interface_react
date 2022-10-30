start geth --datadir ./ --networkid 1547 --http --http.api "web3,eth,net,debug,personal" --http.corsdomain "*" --allow-insecure-unlock
timeout 5

geth attach --exec miner.start(2)


cd ../
npm install
start /wait npm start