# class Board:
#     def __init__(self, cols, rows, str_arr):
#         self.columns = cols
#         self.rows = rows
#         self.board = [[None for _ in range(rows)] for _ in range(cols)]
#         self.winner = None
#         self.changed = False

#         player_symbol = str_arr[0]
#         player_id = 1 if player_symbol == "R" else 2

#         for x in range(rows):
#             row_values = str_arr[x + 1].strip("()").split(",")
#             for y in range(cols):
#                 self.board[y][x] = self.get_player(row_values[y], player_id)

#     def get_player(self, cell_value, player_id):
#         if cell_value == "x":
#             return None
#         if cell_value == "R":
#             return 1 if player_id == 1 else 2
#         if cell_value == "Y":
#             return 2 if player_id == 1 else 1
#         return None

#     def drop_coin(self, player_id, column):
#         for row in range(self.rows - 1, -1, -1):
#             if self.board[column][row] is None:
#                 self.board[column][row] = player_id
#                 self.changed = True
#                 return row
#         return -1

#     def check_winner(self):
#         if not self.changed:
#             return self.winner

#         self.changed = False
#         for i in range(self.columns):
#             for j in range(self.rows):
#                 if self.board[i][j] is None:
#                     continue

#                 horizontal = i + 3 < self.columns
#                 vertical = j + 3 < self.rows
#                 forward_diag = horizontal and vertical
#                 backward_diag = vertical and i - 3 >= 0

#                 for k in range(1, 4):
#                     if horizontal:
#                         horizontal &= self.board[i][j] == self.board[i + k][j]
#                     if vertical:
#                         vertical &= self.board[i][j] == self.board[i][j + k]
#                     if forward_diag:
#                         forward_diag &= self.board[i][j] == self.board[i + k][j + k]
#                     if backward_diag:
#                         backward_diag &= self.board[i][j] == self.board[i - k][j + k]

#                     if not any([horizontal, vertical, forward_diag, backward_diag]):
#                         break

#                 if any([horizontal, vertical, forward_diag, backward_diag]):
#                     self.winner = self.board[i][j]
#                     return self.winner

#         self.winner = None
#         return None


# def find_success(str_arr):
#     board = Board(7, 6, str_arr)

#     for col in range(7):
#         row = board.drop_coin(1, col)
#         if row == -1:
#             continue

#         if board.check_winner() == 1:
#             return f"({row + 1}x{col + 1})"

#         # Reset the board for the next attempt
#         board = Board(7, 6, str_arr)

#     return "No winning move found"


# if __name__ == "__main__":
#     str_arr1 = [
#         "R",
#         "(x,x,x,x,x,x,x)",
#         "(x,x,x,x,x,x,x)",
#         "(x,x,x,x,x,x,x)",
#         "(x,x,x,R,x,x,x)",
#         "(x,x,x,R,x,x,x)",
#         "(x,x,x,R,Y,Y,Y)",
#     ]
#     str_arr2 = [
#         "Y",
#         "(x,x,x,x,x,x,x)",
#         "(x,x,x,x,x,x,x)",
#         "(x,x,x,x,x,x,x)",
#         "(x,x,Y,Y,x,x,x)",
#         "(x,R,R,Y,Y,x,R)",
#         "(x,Y,R,R,R,Y,R)",
#     ]

#     print(find_success(str_arr1))
#     print(find_success(str_arr2))


def ConnectFourWinner(strArr):

    def create_board(data, player_id):
        mapping = {"x": None, "R": 1 if player_id == 1 else 2, "Y": 2 if player_id == 1 else 1}
        return [[mapping[cell] for cell in row.strip("()").split(",")] for row in data[1:]]

    def drop_coin(board, player_id, column):

        for row in range(len(board) - 1, -1, -1):
            if board[row][column] is None:
                board[row][column] = player_id
                return row
        return -1

    def check_winner(board):
  
        rows, cols = len(board), len(board[0])
        directions = [(0, 1), (1, 0), (1, 1), (1, -1)] 

        for r in range(rows):
            for c in range(cols):
                if board[r][c] is None:
                    continue
                player_id = board[r][c]
                for dr, dc in directions:
                    if all(
                        0 <= r + dr * i < rows and
                        0 <= c + dc * i < cols and
                        board[r + dr * i][c + dc * i] == player_id
                        for i in range(4)
                    ):
                        return player_id
        return None

 
    player = strArr[0]
    player_id = 1 if player == "R" else 2
    game_board = create_board(strArr, player_id)

  
    for col in range(len(game_board[0])):
        temp_board = [row[:] for row in game_board]
        row = drop_coin(temp_board, player_id, col)
        if row != -1 and check_winner(temp_board) == player_id:
            return f"({row + 1}x{col + 1})"

    return "none"

