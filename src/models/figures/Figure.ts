import {Colors} from "../Colors.ts";
import logo from '../../assets/black-bishop.svg'
import {Cell} from "../Cell.ts";

export enum FigureName {
    FIGURE =    "Фигура",
    KING =      "Король",
    QUEEN =     "Ферзь",
    BISHOP =    "Слон",
    KNIGHT =    "Конь",
    ROOK =      "Ладья",
    PAWN =      "Пешка",
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureName;
    id: number;
    isFirstStep: boolean;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureName.FIGURE;
        this.id = Math.random();
        this.isFirstStep = true;
    }

    canMove(target: Cell) : boolean {
        if (target.figure?.color === this.color) {
            return false;
        }
        if (target.figure?.name === FigureName.KING) {
            return false;
        }
        return true;
    }

    moveFigure() {
        this.isFirstStep = false;
    }
}
