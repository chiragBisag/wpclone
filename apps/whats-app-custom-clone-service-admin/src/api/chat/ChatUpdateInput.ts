import { MessageUpdateManyWithoutChatsInput } from "./MessageUpdateManyWithoutChatsInput";

export type ChatUpdateInput = {
  messages?: MessageUpdateManyWithoutChatsInput;
  participants?: string | null;
};
