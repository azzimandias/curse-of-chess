import {Figure, FigureName} from "./Figure.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import blackLogo from '../../assets/black-bishop.svg';
import whiteLogo from '../../assets/white-bishop.svg';

export class Bishop extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureName.BISHOP;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false;
        if (this.cell.isEmptyDiagonal(target))
            return true;
        return false;
    }
}
