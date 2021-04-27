import { Position } from "../../../main/model/Position";

export interface ISendNotificationBus {
    NotifyExecution(finalState: Position): void;
}