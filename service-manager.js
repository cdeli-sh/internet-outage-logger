import { Service } from 'node-windows';

var svc = new Service({
  name: 'Internet Monitor',
  description: 'Monitors the internet and sends a message to Discord when it goes down or comes back up',
  script: 'C:\\Users\\delli\\Documents\\internet-outage-logger\\index.js'
});

svc.on('install', function () {
  svc.start();
});

svc.on('uninstall', function () {
  console.log('Uninstall complete.');
  console.log('The service exists: ', svc.exists);
});

if (process.argv[2] === 'install') {
  svc.install();
  console.log('Service installed');
} else if (process.argv[2] === 'uninstall') {
  svc.uninstall();
  console.log('Service uninstalled');
}