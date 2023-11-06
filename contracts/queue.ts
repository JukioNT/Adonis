import type { SendPushPayload } from "App/Jobs/SendPush";
declare module '@ioc:Rlanz/Queue' {
  interface JobsList {
    'App/Jobs/SendPush': SendPushPayload
  }
}
