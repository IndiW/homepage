import { Piece, PieceColor, Position, ChessBoard } from './types'

export class Pawn implements Piece {
    id: string
    color: PieceColor.WHITE | PieceColor.BLACK
    position: Position
    src: string
    constructor(
        id: string,
        color: PieceColor.WHITE | PieceColor.BLACK,
        position: Position,
        src: string,
    ) {
        this.id = id
        this.color = color
        this.position = position
        this.src = src
    }

    setPosition(position: Position) {
        this.position = position
    }
    availableMoves(chessboard: ChessBoard): Array<Position> {
        let moves: Array<Position> = []

        if (this.color == 'w') {
            const leftDiagonalIsOccupied =
                chessboard[this.position[1] - 1][this.position[0] - 1] !== null &&
                chessboard[this.position[1] - 1][this.position[0] - 1]?.color !== this.color
            const rightDiagonalIsOccupied =
                chessboard[this.position[1] - 1][this.position[0] + 1] !== null &&
                chessboard[this.position[1] - 1][this.position[0] + 1]?.color !== this.color

            if (leftDiagonalIsOccupied) {
                moves.push([this.position[0] - 1, this.position[1] - 1])
            }
            if (rightDiagonalIsOccupied) {
                moves.push([this.position[0] + 1, this.position[1] - 1])
            }
            if (this.position[1] == 6) {
                moves.push([this.position[0], this.position[1] - 1])
                moves.push([this.position[0], this.position[1] - 2])
                return moves
            } else {
                moves.push([this.position[0], this.position[1] - 1])
                return moves
            }
        } else {
            const leftDiagonalIsOccupied =
                chessboard[this.position[1] + 1][this.position[0] - 1] !== null &&
                chessboard[this.position[1] + 1][this.position[0] - 1]?.color !== this.color

            const rightDiagonalIsOccupied =
                chessboard[this.position[1] + 1][this.position[0] + 1] !== null &&
                chessboard[this.position[1] + 1][this.position[0] + 1]?.color !== this.color

            if (leftDiagonalIsOccupied) {
                moves.push([this.position[0] - 1, this.position[1] + 1])
            }
            if (rightDiagonalIsOccupied) {
                moves.push([this.position[0] + 1, this.position[1] + 1])
            }
            if (this.position[1] == 1) {
                moves.push([this.position[0], this.position[1] + 1])
                moves.push([this.position[0], this.position[1] + 2])
                return moves
            } else {
                moves.push([this.position[0], this.position[1] + 1])
                return moves
            }
        }
    }
}
export class Rook implements Piece {
    id: string
    color: PieceColor.WHITE | PieceColor.BLACK
    position: [number, number]
    src: string
    constructor(
        id: string,
        color: PieceColor.WHITE | PieceColor.BLACK,
        position: [number, number],
        src: string,
    ) {
        this.id = id
        this.color = color
        this.position = position
        this.src = src
    }

    setPosition(position: [number, number]) {
        this.position = position
    }

    availableMoves(chessboard: ChessBoard): Array<[number, number]> {
        const moves: Array<[number, number]> = []

        // Horizontal and vertical moves
        for (let i = 1; i <= 7; i++) {
            const x1 = this.position[0] + i
            const y1 = this.position[1]
            const x2 = this.position[0] - i
            const y2 = this.position[1]
            const x3 = this.position[0]
            const y3 = this.position[1] + i
            const x4 = this.position[0]
            const y4 = this.position[1] - i

            if (x1 >= 0 && x1 <= 7) {
                moves.push([x1, y1])
            }
            if (x2 >= 0 && x2 <= 7) {
                moves.push([x2, y2])
            }
            if (y3 >= 0 && y3 <= 7) {
                moves.push([x3, y3])
            }
            if (y4 >= 0 && y4 <= 7) {
                moves.push([x4, y4])
            }
        }

        return moves
    }
}

export class Knight implements Piece {
    id: string
    color: PieceColor.WHITE | PieceColor.BLACK
    position: [number, number]
    src: string
    constructor(
        id: string,
        color: PieceColor.WHITE | PieceColor.BLACK,
        position: [number, number],
        src: string,
    ) {
        this.id = id
        this.color = color
        this.position = position
        this.src = src
    }

    setPosition(position: [number, number]) {
        this.position = position
    }

    availableMoves(chessboard: ChessBoard): Array<[number, number]> {
        // Knight moves
        const moves: Array<[number, number]> = []
        const x = this.position[0]
        const y = this.position[1]

        if (x + 2 <= 7 && y + 1 <= 7) {
            moves.push([x + 2, y + 1])
        }
        if (x + 2 <= 7 && y - 1 >= 0) {
            moves.push([x + 2, y - 1])
        }
        if (x - 2 >= 0 && y + 1 <= 7) {
            moves.push([x - 2, y + 1])
        }
        if (x - 2 >= 0 && y - 1 >= 0) {
            moves.push([x - 2, y - 1])
        }
        if (x + 1 <= 7 && y + 2 <= 7) {
            moves.push([x + 1, y + 2])
        }
        if (x + 1 <= 7 && y - 2 >= 0) {
            moves.push([x + 1, y - 2])
        }
        if (x - 1 >= 0 && y + 2 <= 7) {
            moves.push([x - 1, y + 2])
        }
        if (x - 1 >= 0 && y - 2 >= 0) {
            moves.push([x - 1, y - 2])
        }

        return moves
    }
}

export class Bishop implements Piece {
    id: string
    color: PieceColor.WHITE | PieceColor.BLACK
    position: [number, number]
    src: string
    constructor(
        id: string,
        color: PieceColor.WHITE | PieceColor.BLACK,
        position: [number, number],
        src: string,
    ) {
        this.id = id
        this.color = color
        this.position = position
        this.src = src
    }

    setPosition(position: [number, number]) {
        this.position = position
    }

    availableMoves(chessboard: ChessBoard): Array<[number, number]> {
        const moves: Array<[number, number]> = []
        // Diagonal moves
        for (let i = 1; i <= 7; i++) {
            const x1 = this.position[0] + i
            const y1 = this.position[1] + i
            const x2 = this.position[0] + i
            const y2 = this.position[1] - i
            const x3 = this.position[0] - i
            const y3 = this.position[1] + i
            const x4 = this.position[0] - i
            const y4 = this.position[1] - i

            if (x1 >= 0 && x1 <= 7 && y1 >= 0 && y1 <= 7) {
                moves.push([x1, y1])
            }
            if (x2 >= 0 && x2 <= 7 && y2 >= 0 && y2 <= 7) {
                moves.push([x2, y2])
            }
            if (x3 >= 0 && x3 <= 7 && y3 >= 0 && y3 <= 7) {
                moves.push([x3, y3])
            }
            if (x4 >= 0 && x4 <= 7 && y4 >= 0 && y4 <= 7) {
                moves.push([x4, y4])
            }
        }

        return moves
    }
}

export class Queen implements Piece {
    id: string
    color: PieceColor.WHITE | PieceColor.BLACK
    position: [number, number]
    src: string
    constructor(
        id: string,
        color: PieceColor.WHITE | PieceColor.BLACK,
        position: [number, number],
        src: string,
    ) {
        this.id = id
        this.color = color
        this.position = position
        this.src = src
    }

    setPosition(position: [number, number]) {
        this.position = position
    }

    availableMoves(chessboard: ChessBoard): Array<[number, number]> {
        const moves: Array<[number, number]> = []

        // Horizontal and vertical moves
        for (let i = 1; i <= 7; i++) {
            const x1 = this.position[0] + i
            const y1 = this.position[1]
            const x2 = this.position[0] - i
            const y2 = this.position[1]
            const x3 = this.position[0]
            const y3 = this.position[1] + i
            const x4 = this.position[0]
            const y4 = this.position[1] - i

            if (x1 >= 0 && x1 <= 7) {
                moves.push([x1, y1])
            }
            if (x2 >= 0 && x2 <= 7) {
                moves.push([x2, y2])
            }
            if (y3 >= 0 && y3 <= 7) {
                moves.push([x3, y3])
            }
            if (y4 >= 0 && y4 <= 7) {
                moves.push([x4, y4])
            }
        }

        // Diagonal moves
        for (let i = 1; i <= 7; i++) {
            const x1 = this.position[0] + i
            const y1 = this.position[1] + i
            const x2 = this.position[0] + i
            const y2 = this.position[1] - i
            const x3 = this.position[0] - i
            const y3 = this.position[1] + i
            const x4 = this.position[0] - i
            const y4 = this.position[1] - i

            if (x1 >= 0 && x1 <= 7 && y1 >= 0 && y1 <= 7) {
                moves.push([x1, y1])
            }
            if (x2 >= 0 && x2 <= 7 && y2 >= 0 && y2 <= 7) {
                moves.push([x2, y2])
            }
            if (x3 >= 0 && x3 <= 7 && y3 >= 0 && y3 <= 7) {
                moves.push([x3, y3])
            }
            if (x4 >= 0 && x4 <= 7 && y4 >= 0 && y4 <= 7) {
                moves.push([x4, y4])
            }
        }

        return moves
    }
}

export class King implements Piece {
    id: string
    color: PieceColor.WHITE | PieceColor.BLACK
    position: [number, number]
    src: string
    constructor(
        id: string,
        color: PieceColor.WHITE | PieceColor.BLACK,
        position: [number, number],
        src: string,
    ) {
        this.id = id
        this.color = color
        this.position = position
        this.src = src
    }

    setPosition(position: [number, number]) {
        this.position = position
    }

    availableMoves(chessboard: ChessBoard): Array<[number, number]> {
        const moves: Array<[number, number]> = []

        // Horizontal and vertical moves
        if (this.position[0] + 1 <= 7) {
            moves.push([this.position[0] + 1, this.position[1]])
        }
        if (this.position[0] - 1 >= 0) {
            moves.push([this.position[0] - 1, this.position[1]])
        }
        if (this.position[1] + 1 <= 7) {
            moves.push([this.position[0], this.position[1] + 1])
        }
        if (this.position[1] - 1 >= 0) {
            moves.push([this.position[0], this.position[1] - 1])
        }
        if (this.position[0] + 1 <= 7 && this.position[1] + 1 <= 7) {
            moves.push([this.position[0] + 1, this.position[1] + 1])
        }
        if (this.position[0] + 1 <= 7 && this.position[1] - 1 >= 0) {
            moves.push([this.position[0] + 1, this.position[1] - 1])
        }
        if (this.position[0] - 1 >= 0 && this.position[1] + 1 <= 7) {
            moves.push([this.position[0] - 1, this.position[1] + 1])
        }
        if (this.position[0] - 1 >= 0 && this.position[1] - 1 >= 0) {
            moves.push([this.position[0] - 1, this.position[1] - 1])
        }

        return moves
    }
}
