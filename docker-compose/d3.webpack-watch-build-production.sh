BASEDIR=$(dirname "$0")
cd "$BASEDIR"
# cd ..

# 引入共用腳本以取得 SUDO_CMD 變數
# Source the shared script to get the SUDO_CMD variable
./run-docker-compose.sh

# 調整系統核心參數，增加檔案監控數量 (可能需要 sudo)
# Adjust system kernel parameters to increase file watch limit (may require sudo)
$SUDO_CMD sysctl -w fs.inotify.max_user_watches=524288

# 使用共用腳本執行 docker compose 指令
# Use shared script to execute docker compose command
./run-docker-compose.sh run app npm run w3.webpack-watch-build-production
