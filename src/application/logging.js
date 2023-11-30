import winston from "winston";

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.printf((log) => {
    return `${new Date()}-${log.level.toUpperCase()} : ${JSON.stringify(
      log.message
    )}`;
  }),
  transports: [new winston.transports.Console({})],
});
