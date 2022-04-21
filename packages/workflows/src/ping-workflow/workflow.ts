import { proxyActivities } from "@temporalio/workflow";
import type * as activities from "./activities";

const { ping } = proxyActivities<typeof activities>({
  startToCloseTimeout: "1 minute",
});

export async function WorkflowPing() {
  await ping();
}

export async function WorkflowEnv() {
  await ping();
}
