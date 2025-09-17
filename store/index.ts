import { MMKV } from "react-native-mmkv";

export const localStorage = new MMKV({
    id: "local-storage",
    // TODO: need add custom encryption key
    encryptionKey: "vieltalk-chat-mobile",
});