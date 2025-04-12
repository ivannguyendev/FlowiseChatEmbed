import { observersConfigType } from './components/Bot';
import { BubbleTheme } from './features/bubble/types';
import { StorageAdapter } from './utils/storage/storageAdapter';
type BotProps = {
    chatflowid: string;
    apiHost?: string;
    onRequest?: (request: RequestInit) => Promise<void>;
    chatid?: string;
    storageAdapter?: StorageAdapter;
    chatflowConfig?: Record<string, unknown>;
    observersConfig?: observersConfigType;
    theme?: BubbleTheme;
};
export declare const initFull: (props: BotProps & {
    id?: string;
}) => void;
export declare const init: (props: BotProps) => void;
export declare const destroy: () => void;
export declare const sendMessage: (text: string, files?: File[]) => void;
type Chatbot = {
    initFull: typeof initFull;
    init: typeof init;
    destroy: typeof destroy;
    sendMessage: typeof sendMessage;
};
export declare const parseChatbot: () => Chatbot;
export declare const injectChatbotInWindow: (bot: Chatbot) => void;
export {};
//# sourceMappingURL=window.d.ts.map