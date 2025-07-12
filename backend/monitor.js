const fs = require('fs');
const path = require('path');

class ServiceMonitor {
  constructor() {
    this.logFilePath = path.join(__dirname, 'service.log');
    this.isRunning = false;
  }

  // Create a simple log file monitor since we don't have HTTP endpoints
  async checkServiceStatus() {
    console.log('🔍 Checking Chiliz Service Status...');
    console.log('================================');

    try {
      // Check if the service is running by looking for recent log entries
      if (fs.existsSync(this.logFilePath)) {
        const stats = fs.statSync(this.logFilePath);
        const lastModified = stats.mtime;
        const timeSinceLastUpdate = Date.now() - lastModified.getTime();
        
        console.log('📄 Log file found:', this.logFilePath);
        console.log('🕐 Last update:', lastModified.toISOString());
        console.log('⏱️  Time since last update:', Math.floor(timeSinceLastUpdate / 1000), 'seconds');
        
        if (timeSinceLastUpdate < 60000) { // Less than 1 minute
          console.log('✅ Service appears to be running (recent log activity)');
        } else {
          console.log('⚠️  Service might not be running (no recent log activity)');
        }
      } else {
        console.log('❌ No log file found - service likely not running');
      }

      // Check for process by name
      const { exec } = require('child_process');
      exec('ps aux | grep "node.*index.js" | grep -v grep', (error, stdout, stderr) => {
        if (stdout.trim()) {
          console.log('✅ Node process found running');
          console.log('📊 Process info:', stdout.trim().split('\n')[0]);
        } else {
          console.log('❌ No Node process found for index.js');
        }
      });

    } catch (error) {
      console.error('❌ Error checking service status:', error.message);
    }

    console.log('================================');
    console.log('💡 To check if the service is working:');
    console.log('   1. Check the console output of the running service');
    console.log('   2. Look for "New block" messages (indicates WebSocket connection)');
    console.log('   3. Look for "Service Status" messages every 5 minutes');
  }

  async testBasicConnectivity() {
    console.log('🌐 Testing Chiliz RPC connectivity...');
    
    try {
      const { ethers } = require('ethers');
      const provider = new ethers.JsonRpcProvider('https://spicy-rpc.chiliz.com');
      
      const network = await provider.getNetwork();
      console.log(`✅ Connected to network: ${network.name} (Chain ID: ${network.chainId})`);
      
      const blockNumber = await provider.getBlockNumber();
      console.log(`✅ Latest block number: ${blockNumber}`);
      
      const gasPrice = await provider.getFeeData();
      console.log(`✅ Gas price: ${ethers.formatUnits(gasPrice.gasPrice, 'gwei')} Gwei`);
      
      console.log('🎉 Chiliz RPC is accessible!');
      
    } catch (error) {
      console.error('❌ Chiliz RPC connectivity test failed:', error.message);
    }
  }

  startContinuousMonitoring(intervalMinutes = 5) {
    console.log(`🚀 Starting continuous monitoring (every ${intervalMinutes} minutes)...`);
    console.log('⏹️  Press Ctrl+C to stop monitoring');
    
    this.isRunning = true;
    
    // Run initial check
    this.checkServiceStatus();
    
    // Set up interval
    this.monitorInterval = setInterval(() => {
      if (this.isRunning) {
        console.log('\n⏰ Scheduled status check...');
        this.checkServiceStatus();
      }
    }, intervalMinutes * 60 * 1000);

    // Graceful shutdown
    process.on('SIGINT', () => {
      this.stopMonitoring();
      process.exit(0);
    });
  }

  stopMonitoring() {
    console.log('🛑 Stopping monitoring...');
    this.isRunning = false;
    if (this.monitorInterval) {
      clearInterval(this.monitorInterval);
    }
  }

  showServiceLogs(lines = 50) {
    console.log(`� Showing last ${lines} lines of service output:`);
    console.log('================================');
    
    const { exec } = require('child_process');
    exec(`ps aux | grep "node.*index.js" | grep -v grep | awk '{print $2}'`, (error, stdout, stderr) => {
      if (stdout.trim()) {
        const pid = stdout.trim().split('\n')[0];
        console.log(`📊 Service PID: ${pid}`);
        console.log('💡 To see live logs, run: tail -f /proc/' + pid + '/fd/1');
      } else {
        console.log('❌ Service not running - cannot show logs');
      }
    });
  }

  showHelp() {
    console.log('Chiliz Service Monitor (Security-focused)');
    console.log('==========================================');
    console.log('This service runs privately with no HTTP endpoints.');
    console.log('');
    console.log('Commands:');
    console.log('  node monitor.js status          - Check service status');
    console.log('  node monitor.js connectivity     - Test RPC connectivity');
    console.log('  node monitor.js monitor [mins]   - Continuous monitoring');
    console.log('  node monitor.js logs             - Show service logs');
    console.log('  node monitor.js help             - Show this help');
    console.log('');
    console.log('Security Features:');
    console.log('  ✅ No HTTP server exposed');
    console.log('  ✅ Private key never transmitted');
    console.log('  ✅ WebSocket-only connections to Chiliz RPC');
    console.log('  ✅ Local process monitoring only');
  }
}

// CLI usage
if (require.main === module) {
  const monitor = new ServiceMonitor();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'status':
      monitor.checkServiceStatus();
      break;
    
    case 'connectivity':
      monitor.testBasicConnectivity();
      break;
    
    case 'monitor':
      const interval = parseInt(process.argv[3]) || 5;
      monitor.startContinuousMonitoring(interval);
      break;
    
    case 'logs':
      monitor.showServiceLogs();
      break;
    
    case 'help':
      monitor.showHelp();
      break;
    
    default:
      monitor.showHelp();
  }
}

module.exports = ServiceMonitor;
