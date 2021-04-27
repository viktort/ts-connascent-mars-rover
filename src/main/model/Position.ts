import {Coordinate} from "./Coordinate";
import {Direction} from "./Direction";
import {format} from "util";
import deepEqual = require("deep-equal");

export class Position {
    private _coordinate: Coordinate;
    private _direction: Direction;

    private parseDirection(directionText: string): Direction {
        switch (directionText) {
            case "N":
                return Direction.NORTH()
            case "E":
                return Direction.EAST()
            case "S":
                return Direction.SOUTH()
            case "W":
                return Direction.WEST()
            default:
                return Direction.NORTH()
        }
    }

    constructor(x: number, y: number, directionText: string) {
        this._coordinate = new Coordinate(x, y);
        this._direction = this.parseDirection(directionText);
    }

    turnLeft(): Position {
        return new Position(this._coordinate.x, this._coordinate.y, this._direction.turnLeft().toString())
    }

    turnRight(): Position {
        return new Position(this._coordinate.x, this._coordinate.y, this._direction.turnRight().toString())
    }

    moveForward() {
        var coordinate: Coordinate = new Coordinate(0, 0);
        let s = this._direction.enumValue();
        if (s === "NORTH") {
            coordinate = this._coordinate.moveNorth()
        } else if (s === "EAST") {
            coordinate = this._coordinate.moveEast()
        } else if (s === "SOUTH") {
            coordinate = this._coordinate.moveSouth()
        } else if (s === "WEST") {
            coordinate = this._coordinate.moveWest();
        }
        return new Position(coordinate.x, coordinate.y, this._direction.toString());
    }

    toString(): string {
        return format("%s %s", this._coordinate.toString(), this._direction.toString())
    }

    equals(o: Position): boolean {
        return deepEqual(this._coordinate, o._coordinate) && this._direction === o._direction;
    }

    get coordinate(): Coordinate {
        return this._coordinate;
    }


    get direction(): Direction {
        return this._direction;
    }
}
