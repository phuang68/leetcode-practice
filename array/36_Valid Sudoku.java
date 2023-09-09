class Solution {
    public boolean isValidSudoku(char[][] board) {
        Set<Character> rowSet = null;
        Set<Character> columnSet = null;
        // Check row and column if there's duplicate number
        for (int i = 0; i < 9; i++) {
            rowSet = new HashSet<>();
            columnSet = new HashSet<>();
            for (int j = 0; j < 9; j++) {
                char r = board[i][j];
                char c = board[j][i];
                if(r != '.') {
                    if (rowSet.contains(r)) {
                        return false;
                    } else {
                        rowSet.add(r);
                    }
                }
                if(c != '.') {
                    if (columnSet.contains(c)) {
                        return false;
                    } else {
                        columnSet.add(c);
                    }
                }
            }
        }
        // Check blocks if there's duplicate number
        for (int i = 0; i < 9; i += 3) {
            for (int j = 0; j < 9; j += 3) {
                if (checkBlock(board, i, j)) return false;
            }
        }

        return true;
    }

    private static boolean checkBlock(char[][] board, int i, int j) {
        Set<Character> blockSet = new HashSet<>();
        for (int k = i; k < i + 3; k++) {
            for (int g = j; g < j + 3; g++) {
                char cell = board[k][g];
                if(cell == '.') continue;
                if(blockSet.contains(cell)) {
                    return true;
                }
                blockSet.add(cell);
            }
        }
        return false;
    }
}