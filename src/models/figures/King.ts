import {Figure, FigureName} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import blackLogo from '../../assets/black-king.svg';
import whiteLogo from '../../assets/white-king.svg';

export class King extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureName.KING;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) {
            return false;
        }

        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);

        if ((dx === 1 || dx === 0 || dx === -1) && (dy === 1 || dy === 0 || dy === -1)) {
            return true;
        }
        return false;
    }
}