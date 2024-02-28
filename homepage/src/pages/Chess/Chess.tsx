import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

const TILE_SIZE = 50
const ROWS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = React.useState<{
        x: number | null
        y: number | null
    }>({ x: null, y: null })
    React.useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY })
        }
        window.addEventListener('mousedown', updateMousePosition)
        return () => {
            window.removeEventListener('mousedown', updateMousePosition)
        }
    }, [])
    return mousePosition
}

function Board({
    pieces,
    selectedTile,
    onTileClick,
    onPieceClick,
}: {
    pieces: Array<Piece>
    selectedTile: { x: number | null; y: number | null }
    onTileClick: (x: number | null, y: number | null) => () => void
    onPieceClick: (x: number | null, y: number | null) => () => void
}) {
    const isSelected = (x: number, y: number) => {
        return (
            selectedTile.x !== null &&
            selectedTile.y !== null &&
            selectedTile.x === x &&
            selectedTile.y === y
        )
    }
    const boardDivs = () => {
        const board: Array<JSX.Element> = []
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const tileColor = isSelected(j, i)
                    ? 'bg-blue-500'
                    : (i + j) % 2 === 0
                    ? 'bg-green-800'
                    : 'bg-amber-100'
                const tile = (
                    <div
                        id={`${ROWS[i]}${j}`}
                        className={`absolute h-4 w-4 ${tileColor}`}
                        style={{
                            top: i * TILE_SIZE,
                            left: j * TILE_SIZE,
                            width: TILE_SIZE,
                            height: TILE_SIZE,
                        }}
                        onClick={onTileClick(j, i)}
                    />
                )
                board.push(tile)
            }
        }

        return board.map((tile, index) => <div key={index}>{tile}</div>)
    }

    const piecesDivs = pieces.map((piece: Piece) => {
        return (
            <img
                key={piece.id}
                src={piece.src}
                alt={piece.id}
                className={`absolute ${
                    isSelected(piece.position[0], piece.position[1])
                        ? 'border-4 border-yellow-500'
                        : ''
                }`}
                style={{
                    top: piece.position[1] * TILE_SIZE,
                    left: piece.position[0] * TILE_SIZE,
                    width: TILE_SIZE,
                    height: TILE_SIZE,
                    pointerEvents: 'all',
                    cursor: 'pointer',
                }}
                onClick={onPieceClick(piece.position[0], piece.position[1])}
            />
        )
    })

    return (
        <div className='h-32 w-32'>
            {boardDivs()}
            {piecesDivs}
        </div>
    )
}

enum PieceColor {
    WHITE = 'w',
    BLACK = 'b',
}
interface Piece {
    id: string
    color: PieceColor.WHITE | PieceColor.BLACK
    position: [number, number]
    src: string

    setPosition(position: [number, number]): void
}

class Pawn implements Piece {
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
    move() {
        if (
            (this.color == 'w' && this.position[0] == 7) ||
            (this.color == 'b' && this.position[0] == 0)
        ) {
            return [
                [this.position[0] + 1, this.position[1]],
                [this.position[0] + 2, this.position[1]],
            ]
        } else {
            return [[this.position[0] + 1, this.position[1]]]
        }
    }
}
class Rook implements Piece {
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
}

class Knight implements Piece {
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
}

class Bishop implements Piece {
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
}

class Queen implements Piece {
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
}

class King implements Piece {
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
}

const INITIAL_CHESS_BOARD = [
    [
        new Rook('bRa', PieceColor.BLACK, [0, 0], 'pieces/bR.svg'),
        new Knight('bNa', PieceColor.BLACK, [1, 0], 'pieces/bN.svg'),
        new Bishop('bBa', PieceColor.BLACK, [2, 0], 'pieces/bB.svg'),
        new Queen('bQ', PieceColor.BLACK, [3, 0], 'pieces/bQ.svg'),
        new King('bK', PieceColor.BLACK, [4, 0], 'pieces/bK.svg'),
        new Bishop('bBb', PieceColor.BLACK, [5, 0], 'pieces/bB.svg'),
        new Knight('bNb', PieceColor.BLACK, [6, 0], 'pieces/bN.svg'),
        new Rook('bRb', PieceColor.BLACK, [7, 0], 'pieces/bR.svg'),
    ],
    [
        new Pawn('bPa', PieceColor.BLACK, [0, 1], 'pieces/bP.svg'),
        new Pawn('bPb', PieceColor.BLACK, [1, 1], 'pieces/bP.svg'),
        new Pawn('bPc', PieceColor.BLACK, [2, 1], 'pieces/bP.svg'),
        new Pawn('bPd', PieceColor.BLACK, [3, 1], 'pieces/bP.svg'),
        new Pawn('bPe', PieceColor.BLACK, [4, 1], 'pieces/bP.svg'),
        new Pawn('bPf', PieceColor.BLACK, [5, 1], 'pieces/bP.svg'),
        new Pawn('bPg', PieceColor.BLACK, [6, 1], 'pieces/bP.svg'),
        new Pawn('bPh', PieceColor.BLACK, [7, 1], 'pieces/bP.svg'),
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
        new Pawn('wPa', PieceColor.WHITE, [0, 6], 'pieces/wP.svg'),
        new Pawn('wPb', PieceColor.WHITE, [1, 6], 'pieces/wP.svg'),
        new Pawn('wPc', PieceColor.WHITE, [2, 6], 'pieces/wP.svg'),
        new Pawn('wPd', PieceColor.WHITE, [3, 6], 'pieces/wP.svg'),
        new Pawn('wPe', PieceColor.WHITE, [4, 6], 'pieces/wP.svg'),
        new Pawn('wPf', PieceColor.WHITE, [5, 6], 'pieces/wP.svg'),
        new Pawn('wPg', PieceColor.WHITE, [6, 6], 'pieces/wP.svg'),
        new Pawn('wPh', PieceColor.WHITE, [7, 6], 'pieces/wP.svg'),
    ],
    [
        new Rook('wRa', PieceColor.WHITE, [0, 7], 'pieces/wR.svg'),
        new Knight('wNa', PieceColor.WHITE, [1, 7], 'pieces/wN.svg'),
        new Bishop('wBa', PieceColor.WHITE, [2, 7], 'pieces/wB.svg'),
        new Queen('wQ', PieceColor.WHITE, [3, 7], 'pieces/wQ.svg'),
        new King('wK', PieceColor.WHITE, [4, 7], 'pieces/wK.svg'),
        new Bishop('wBb', PieceColor.WHITE, [5, 7], 'pieces/wB.svg'),
        new Knight('wNb', PieceColor.WHITE, [6, 7], 'pieces/wN.svg'),
        new Rook('wRb', PieceColor.WHITE, [7, 7], 'pieces/wR.svg'),
    ],
]

export function Chess() {
    const [selectedTile, setSelectedTile] = useState<{ x: number | null; y: number | null }>({
        x: null,
        y: null,
    })
    const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null)
    const [chessboard, setChessboard] = useState<Array<Array<Piece | null>>>(INITIAL_CHESS_BOARD)

    const handleTileClick = (x: number | null, y: number | null) => {
        return () => {
            if (x === null || y === null) return null
            const row = Math.floor(x)
            const col = Math.floor(y)
            if (row < 0 || row > 7 || col < 0 || col > 7) return null
            if (
                (selectedTile.x === row && selectedTile.y === col) ||
                chessboard[col][row] !== null
            ) {
                setSelectedTile({ x: null, y: null })
            } else if (
                selectedPiece !== null &&
                selectedTile.x !== null &&
                selectedTile.y !== null
            ) {
                const newBoard = [...chessboard]
                const piece = selectedPiece
                piece.setPosition([row, col])
                newBoard[col][row] = piece
                newBoard[selectedTile.y][selectedTile.x] = null
                setChessboard(newBoard)
                setSelectedTile({ x: null, y: null })
                setSelectedPiece(null)
            } else {
                setSelectedTile({ x: row, y: col })
            }
        }
    }

    const handlePieceClick = (x: number | null, y: number | null) => {
        return () => {
            if (x === null || y === null) return null
            const row = Math.floor(x)
            const col = Math.floor(y)
            if (row < 0 || row > 7 || col < 0 || col > 7) return null
            if (selectedTile.x === row && selectedTile.y === col) {
                setSelectedTile({ x: null, y: null })
                setSelectedPiece(chessboard[col][row])
            }
            if (
                selectedPiece !== null &&
                selectedTile.x !== null &&
                selectedTile.y !== null &&
                chessboard[col][row] !== null &&
                selectedPiece.color !== chessboard[col][row]?.color
            ) {
                const newBoard = [...chessboard]
                newBoard[col][row] = selectedPiece
                newBoard[col][row]?.setPosition([row, col])
                newBoard[selectedTile.y][selectedTile.x] = null
                setChessboard(newBoard)
            }
            if (selectedPiece !== null) {
                setSelectedTile({ x: null, y: null })
                setSelectedPiece(null)
            } else {
                setSelectedTile({ x: row, y: col })
                setSelectedPiece(chessboard[col][row])
            }
        }
    }

    const pieces: Piece[] = []
    for (const row in chessboard) {
        for (const col in chessboard[row]) {
            const cell = chessboard[row][col]
            if (cell !== null) {
                pieces.push(cell)
            }
        }
    }

    return (
        <div className='flex items-center justify-center'>
            <Board
                pieces={pieces}
                selectedTile={selectedTile}
                onTileClick={handleTileClick}
                onPieceClick={handlePieceClick}
            />
        </div>
    )
}