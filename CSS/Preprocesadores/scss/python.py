def ConnectFourWinner(strArr):
    # Inicializamos las variables principales
    current_player = strArr[0]  # Jugador actual ('R' o 'Y')
    varOcg = [list(row[1:-1].split(',')) for row in strArr[1:]]  # Tablero de juego
    rows, cols = len(varOcg), len(varOcg[0])

    def check_direction(r, c, dr, dc):
        """Verifica si al colocar una ficha en (r, c) se forman cuatro consecutivos en la dirección (dr, dc)."""
        count = 0
        for i in range(4):  # Verificamos cuatro posiciones consecutivas en la dirección especificada
            nr, nc = r + i * dr, c + i * dc
            if 0 <= nr < rows and 0 <= nc < cols and varOcg[nr][nc] == current_player:
                count += 1
            else:
                break
        return count == 4

    # Iteramos por las celdas de la parte inferior hacia la parte superior de cada columna
    for col in range(cols):
        for row in range(rows - 1, -1, -1):  # Desde la fila más baja hacia arriba
            if varOcg[row][col] == 'x':  # Si la celda está vacía
                # Colocamos la ficha del jugador actual en la posición vacía
                varOcg[row][col] = current_player
                # Verificamos las cuatro direcciones posibles para ver si hay una victoria
                if (check_direction(row, col, 1, 0) or  # Vertical
                    check_direction(row, col, 0, 1) or  # Horizontal
                    check_direction(row, col, 1, 1) or  # Diagonal /
                    check_direction(row, col, 1, -1)):  # Diagonal \
                    return f"({row}x{col})"  # Retornamos la posición ganadora
                # Revertimos la celda si no se encontró una victoria
                varOcg[row][col] = 'x'
                break  # Ya que solo debe haber una ficha por columna

    # Si no se encuentra una jugada ganadora, devolvemos "none"
    return "none"

# Ejemplo con el input original
print(ConnectFourWinner(["R","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)","(x,x,x,R,x,x,x)","(x,x,x,R,x,x,x)","(x,x,x,R,Y,Y,Y)"]))


