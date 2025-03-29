export type StorageAdapter = {
  saveMessages(chatflowid: string, saveObj: { chatId?: string; chatHistory?: any[]; [k: string]: any }): Promise<void>;

  getMessages(chatflowid: string, chatId: string): Promise<{ chatHistory: any[]; chatId: string; lead: any }>;

  removeMessages(chatflowid: string, chatId: string): Promise<void>;
};
