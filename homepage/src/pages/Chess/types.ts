export type Position = [number, number]
export enum PieceColor {
    WHITE = 'w',
    BLACK = 'b',
}
export interface Piece {
    id: string
    color: PieceColor.WHITE | PieceColor.BLACK
    position: Position
    src: string

    setPosition(position: Position): void
    availableMoves(board?: ChessBoard): Array<Position>
}

export type ChessBoard = Array<Array<Piece | null>>
