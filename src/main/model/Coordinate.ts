import {format} from "util";

export class Coordinate {

    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    moveNorth(): Coordinate {
        return new Coordinate(this._x, this._y + 1);
    }

    moveEast(): Coordinate {
        return new Coordinate(this._x + 1, this._y);
    }

    moveSouth(): Coordinate {
        return new Coordinate(this._x, this._y - 1);
    }

    moveWest(): Coordinate {
        return new Coordinate(this._x -1 , this._y);
    }

    toString(): string {
        return format("%s %s", this._x, this._y);
    }

    get y(): number {
        return this._y;
    }

    get x(): number {
        return this._x;
    }

}