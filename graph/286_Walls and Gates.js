/**
 * You are given a m x n 2D grid initialized with these three possible values.
 * @param rooms
 */

// Simple BFS
var wallsAndGates = function(rooms) {
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const ROWS = rooms.length;
        const COLS = rooms[0].length;
        const INF = 2147483647;

        const bfs = (r, c) => {
            const q = []
            const visit = Array.from({ length: ROWS }, () =>
                Array(COLS).fill(false),
            );
            q.push([r,c])
            visit[r][c] = true;
            let steps = 0;

            while (q.length > 0) {
                let size = q.length;
                for (let i = 0; i < size; i++) {
                    const [row, col] = q.shift();
                    if (rooms[row][col] === 0) return steps;
                    for (let [dr, dc] of directions) {
                        const nr = row + dr,
                            nc = col + dc;
                        if (
                            nr >= 0 &&
                            nr < ROWS &&
                            nc >= 0 &&
                            nc < COLS &&
                            !visit[nr][nc] &&
                            rooms[nr][nc] !== -1
                        ) {
                            visit[nr][nc] = true;
                            q.push([nr, nc]);
                        }
                    }
                }
                steps++;
            }
            return INF;
        };

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                if(rooms[r][c] === INF){
                    rooms[r][c] = bfs(r, c);
                }
            }
        }
}

// Multiple source BFS
var wallsAndGates = function(rooms) {
    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    const ROWS = rooms.length;
    const COLS = rooms[0].length;
    const INF = 2147483647;

    const q = [];

    for(let r = 0; r < ROWS; r++) {
        for(let c = 0; c < COLS; c++) {
            if(rooms[r][c] === 0){
                q.push([r, c]);
            }
        }

    }
    while(q.length > 0) {
        const [row, col] = q.shift();
        for (let [dr, dc] of directions) {
            const nr = row + dr,
                nc = col + dc;
            if (
                nr >= 0 &&
                nr < ROWS &&
                nc >= 0 &&
                nc < COLS &&
                rooms[nr][nc] === INF
            ) {
                rooms[nr][nc] = rooms[row][col] + 1;
                q.push([nr, nc]);
            }
        }
    }
}