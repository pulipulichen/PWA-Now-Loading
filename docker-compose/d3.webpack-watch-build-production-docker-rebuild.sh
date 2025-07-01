BASEDIR=$(dirname "$0")
cd "$BASEDIR"
# cd ..
# 使用共用腳本執行 docker compose 指令
# Use shared script to execute docker compose command
./run-docker-compose.sh run -d app npm run w3.webpack-watch-build-production
