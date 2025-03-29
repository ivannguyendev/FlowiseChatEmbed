import { LeadsConfig, MessageType } from '@/components/Bot';
import { StorageAdapter } from '@/utils/storage/storageAdapter';
type Props = {
    message: MessageType;
    chatflowid: string;
    chatId: string;
    leadsConfig?: LeadsConfig;
    storageAdapter?: StorageAdapter;
    apiHost?: string;
    showAvatar?: boolean;
    avatarSrc?: string;
    backgroundColor?: string;
    textColor?: string;
    sendButtonColor?: string;
    fontSize?: number;
    isLeadSaved: boolean;
    setIsLeadSaved: (value: boolean) => void;
    setLeadEmail: (value: string) => void;
};
export declare const LeadCaptureBubble: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=LeadCaptureBubble.d.ts.map