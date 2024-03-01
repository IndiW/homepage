import { Bishop, King, Knight, Pawn, Queen, Rook } from './Pieces'
import { ChessBoard, PieceColor } from './types'

export const INITIAL_CHESS_BOARD: ChessBoard = [
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
