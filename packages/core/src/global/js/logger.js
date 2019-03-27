function log(message, includeInBuild = false, ...args) {
  makeLog({ logType: 'log', message, includeInBuild, ...args });
}
function warn(message, includeInBuild = false, ...args) {
  makeLog({ logType: 'warn', message, includeInBuild, ...args });
}
function error(message, includeInBuild = false, ...args) {
  makeLog({ logType: 'error', message, includeInBuild, ...args });
}
function debug(message, includeInBuild = false, ...args) {
  makeLog({ logType: 'debug', message, includeInBuild, ...args });
}

function makeLog({ logType, message, includeInBuild, ...args }) {
  if (includeInBuild || process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console[logType](`[ray] ${message}`, ...(isEmptyObject(args) ? [] : args));
  }
}

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export default { log, warn, error, debug };
