If an Old server is running on port 3000:


Find what's using port 3000:


netstat -ano | findstr :3000
Or use PowerShell:


powershell "Get-NetTCPConnection -LocalPort 3000"
Kill the process using that port:
Look for the PID (process ID) in the output, then:


taskkill //F //PID <PID_NUMBER>
Replace <PID_NUMBER> with the actual process ID.

Start your server:


nodemon server.js
Better solution - Use a different port:
You could change your server to use a different port (like 3001, 3002, etc.) to avoid conflicts: