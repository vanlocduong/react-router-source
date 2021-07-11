import { datadogRum } from "@datadog/browser-rum";
import { datadogLogs } from "@datadog/browser-logs";

export const DD_RUM = () => {
  return datadogRum.init({
    applicationId: "edee95dc-c29b-48cd-8d49-a00d0b12ea4f",
    clientToken: "pub7247b8be46092ac0362a8a28630e7c89",
    site: "datadoghq.com",
    service: "custom-user-actions-example",
    env: "dev-day",
    version: "1.0.0",
    sampleRate: 100,
    trackInteractions: true,
    useCrossSiteSessionCookie: true,
    trackSessionAcrossSubdomains: true
  });
};

export const DD_LOGS = () => {
  return datadogLogs.init({
    clientToken: "pub7247b8be46092ac0362a8a28630e7c89",
    site: "datadoghq.com",
    service: "custom-user-actions-example",
    env: "dev-day",
    version: "1.0.0",
    sampleRate: 100,
    trackInteractions: true,
    useCrossSiteSessionCookie: true,
    trackSessionAcrossSubdomains: true,
    forwardErrorsToLogs: true,
    silentMultipleInit: true
  });
};
