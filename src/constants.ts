import type { BubbleProps } from './features/bubble';

export const defaultBotProps: BubbleProps = {
  chatflowid: '',
  apiHost: undefined,
  onRequest: undefined,
  chatflowConfig: undefined,
  theme: undefined,
  observersConfig: undefined,
  storageAdapter: undefined,
  chatId: undefined,
  // Add the default value for the external command property
  externalCommand: null,
};
