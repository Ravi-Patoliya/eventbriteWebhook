const os = require('os');

function getLocalIP() {
    const interfaces = os.networkInterfaces();
    let localIP;
    const _interfaces = Object.keys(interfaces);
    for (const interfaceName of _interfaces) {
        const interfaceData = interfaces[interfaceName];
        for (let i = 0; i < interfaceData.length; i++) {
            const { address, family, internal } = interfaceData[i];
            if (family === 'IPv4' && !internal) {
                localIP = address;
                break;
            }
        }
        if (localIP) break;
    }
    return localIP;
}

function formatTime(ms) {
    if (ms < 1000) {
        return ms + 'ms';
    } else if (ms < 60 * 1000) {
        const seconds = Math.floor(ms / 1000);
        return seconds + 's';
    } else if (ms < 60 * 60 * 1000) {
        const minutes = Math.floor(ms / (60 * 1000));
        const seconds = Math.floor((ms % (60 * 1000)) / 1000);
        return minutes + 'm ' + seconds + 's';
    } else {
        const hours = Math.floor(ms / (60 * 60 * 1000));
        const minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((ms % (60 * 1000)) / 1000);
        return hours + 'h ' + minutes + 'm ' + seconds + 's';
    }
}

module.exports = {
    getLocalIP,
    formatTime,
};
