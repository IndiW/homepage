import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { ChessBoard, Piece, PieceColor } from './types'
import { INITIAL_CHESS_BOARD, TILE_SIZE, ROWS } from './constants'

function Board({
    pieces,
    selectedTile,
    onTileClick,
    onPieceClick,
    moves,
    attackedPieces,
}: {
    pieces: Array<Piece>
    selectedTile: { x: number | null; y: number | null }
    onTileClick: (x: number | null, y: number | null) => () => void
    onPieceClick: (x: number | null, y: number | null) => () => void
    moves: Array<[number, number]>
    attackedPieces: Array<Piece>
}) {
    const isSelected = (x: number, y: number) => {
        return (
            selectedTile.x !== null &&
            selectedTile.y !== null &&
            selectedTile.x === x &&
            selectedTile.y === y
        )
    }

    const isValidMove = (x: number, y: number) => {
        return moves?.some(([moveX, moveY]) => moveX === x && moveY === y)
    }

    const isAttackedPiece = (x: number, y: number) => {
        return attackedPieces.some((piece) => piece.position[0] === x && piece.position[1] === y)
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
                    <>
                        <div
                            id={`${ROWS[i]}${j}`}
                            className={`absolute h-4 w-4 ${tileColor}`}
                            style={{
                                top: i * TILE_SIZE,
                                left: j * TILE_SIZE,
                                width: TILE_SIZE,
                                height: TILE_SIZE,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onClick={onTileClick(j, i)}
                        >
                            <div
                                className={`${isValidMove(j, i) ? '' : 'invisible'} bg-green-600`}
                                style={
                                    isAttackedPiece(j, i)
                                        ? {
                                              borderStyle: 'solid',
                                              borderWidth: TILE_SIZE / 10,
                                              borderColor: 'red',
                                              height: '100%',
                                              width: '100%',
                                          }
                                        : {
                                              borderRadius: '50%',
                                              height: '20%',
                                              width: '20%',
                                          }
                                }
                            />
                        </div>
                    </>
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
                    isSelected(piece.position[0], piece.position[1]) ? '' : ''
                } animate-none `}
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
        <>
            {boardDivs()}
            {piecesDivs}
        </>
    )
}

export function Chess() {
    const [turn, setTurn] = useState<PieceColor>(PieceColor.WHITE)
    const [selectedTile, setSelectedTile] = useState<{ x: number | null; y: number | null }>({
        x: null,
        y: null,
    })
    const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null)
    const [attackedPieces, setAttackedPieces] = useState<Array<Piece>>([])
    const [chessboard, setChessboard] = useState<ChessBoard>([...INITIAL_CHESS_BOARD])

    const handleTileClick = (x: number | null, y: number | null) => {
        return () => {
            console.log('tile click')
            if (x === null || y === null) return null
            const row = Math.floor(x)
            const col = Math.floor(y)
            if (row < 0 || row > 7 || col < 0 || col > 7) return null

            const canMovePieceToEmptyTile =
                selectedPiece !== null &&
                selectedPiece.color === turn &&
                isValidMove(row, col) &&
                chessboard[col][row] == null

            const cantMovePieceToEmptyTile =
                selectedPiece === null || selectedPiece.color !== turn || !isValidMove(row, col)

            const isSameTileAsSelected = selectedTile.x === row && selectedTile.y === col

            const noSelectedPiece = selectedPiece == null

            if (isSameTileAsSelected) {
                setSelectedTile({ x: null, y: null })
            } else if (noSelectedPiece) {
                setSelectedTile({ x: row, y: col })
            } else if (canMovePieceToEmptyTile) {
                if (selectedTile.x == null || selectedTile.y == null) return
                const newBoard = [...chessboard]
                newBoard[col][row] = selectedPiece
                newBoard[col][row]?.setPosition([row, col])
                newBoard[selectedTile.y][selectedTile.x] = null
                setChessboard(newBoard)
                setTurn(turn === PieceColor.WHITE ? PieceColor.BLACK : PieceColor.WHITE)
                setSelectedTile({ x: null, y: null })
                setSelectedPiece(null)
            } else if (cantMovePieceToEmptyTile) {
                setSelectedTile({ x: null, y: null })
                setSelectedPiece(null)
            } else {
                setSelectedTile({ x: row, y: col })
            }
        }
    }

    const isValidMove = (x: number, y: number): boolean => {
        if (selectedPiece === null) return false
        return selectedPiece
            ?.availableMoves(chessboard)
            .some(([moveX, moveY]) => moveX === x && moveY === y)
    }

    const handlePieceClick = (x: number | null, y: number | null) => {
        return () => {
            console.log('Piece clicked')
            if (x === null || y === null) return
            const row = Math.floor(x)
            const col = Math.floor(y)
            if (row < 0 || row > 7 || col < 0 || col > 7) return

            if (selectedPiece == null && chessboard[col][row]?.color !== turn) return

            const canMovePieceToOccupiedTile =
                selectedPiece !== null &&
                selectedPiece.color === turn &&
                chessboard[col][row] !== null &&
                selectedPiece.color !== chessboard[col][row]?.color &&
                isValidMove(row, col)

            const illegalMoveToOccupiedTile =
                selectedPiece !== null &&
                selectedPiece.color === turn &&
                chessboard[col][row] !== null &&
                selectedPiece.color !== chessboard[col][row]?.color &&
                !isValidMove(row, col)

            if (canMovePieceToOccupiedTile) {
                if (selectedTile.x == null || selectedTile.y == null) return
                const newBoard = [...chessboard]
                newBoard[col][row] = selectedPiece
                newBoard[col][row]?.setPosition([row, col])
                newBoard[selectedTile.y][selectedTile.x] = null
                setChessboard(newBoard)
                setTurn(turn === PieceColor.WHITE ? PieceColor.BLACK : PieceColor.WHITE)
                setSelectedTile({ x: null, y: null })
                setSelectedPiece(null)
            } else if (illegalMoveToOccupiedTile) {
                setSelectedTile({ x: null, y: null })
                setSelectedPiece(null)
            }
            // Click same piece twice
            else if (
                selectedPiece !== null &&
                selectedPiece.position[0] === row &&
                selectedPiece.position[1] === col
            ) {
                setSelectedTile({ x: null, y: null })
                setSelectedPiece(null)
            } else {
                // Select the piece
                setSelectedTile({ x: row, y: col })
                setSelectedPiece(chessboard[col][row])

                const piece = chessboard[col][row]
                if (!piece) return
                const moves = piece.availableMoves(chessboard)
                console.log(moves)
                const attackedPieces = moves
                    .map(([x, y]) => chessboard[y][x])
                    .filter((p) => p !== null && p.color !== piece.color)
                setAttackedPieces(attackedPieces as Array<Piece>)
            }
        }
    }

    const handleReset = () => {
        setAttackedPieces([])
        setTurn(PieceColor.WHITE)
        setSelectedTile({ x: null, y: null })
        setSelectedPiece(null)
        setChessboard([...INITIAL_CHESS_BOARD])
        console.log(INITIAL_CHESS_BOARD)
    }

    return (
        <div className='flex flex-col items-center justify-center' style={{ height: '100vh' }}>
            <div className='flex items-center justify-center'>
                <Board
                    pieces={chessboard
                        .map((row) => row.filter((cell) => cell !== null) as Piece[])
                        .flat()}
                    selectedTile={selectedTile}
                    onTileClick={handleTileClick}
                    onPieceClick={handlePieceClick}
                    moves={selectedPiece !== null ? selectedPiece?.availableMoves(chessboard) : []}
                    attackedPieces={attackedPieces}
                />
            </div>
            <button
                className='fixed bottom-0 rounded bg-green-800 py-2 px-4 font-bold text-white hover:bg-green-900'
                onClick={handleReset}
            >
                New Game
            </button>
        </div>
    )
}
