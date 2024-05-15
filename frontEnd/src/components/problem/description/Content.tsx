function Content({text}:{text:string}){
    text=`
    <p>You are given a 0-indexed 2D matrix grid of size n x n, where (r, c) represents:<br><br>A cell containing a thief if grid[r][c] = 1<br>An empty cell if grid[r][c] = 0<br>You are initially positioned at cell (0, 0). In one move, you can move to any adjacent cell in the grid, including cells containing thieves.<br><br>The safeness factor of a path on the grid is defined as the minimum manhattan distance from any cell in the path to any thief in the grid.<br><br>Return the maximum safeness factor of all paths leading to cell (n - 1, n - 1).<br><br>An adjacent cell of cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) and (r - 1, c) if it exists.<br><br>The Manhattan distance between two cells (a, b) and (x, y) is equal to |a - x| + |b - y|, where |val| denotes the absolute value of val.</p><br><br>
    <p><strong>Example 1 :</strong></p><br> <p><img src="https://assets.leetcode.com/uploads/2023/07/02/example1.png" alt="" width="300"></p> <p><strong><br></strong></p><p><strong>Input:</strong> grid: = [[1,0,0],[0,0,0],[0,0,1]]</p><p><strong>Output:&nbsp;</strong>0</p><p><strong></strong></p><p><strong>Explanation:&nbsp;</strong>All paths from (0, 0) to (n - 1, n - 1) go through the thieves in cells (0, 0) and (n - 1, n - 1).</p><br>
    <p><strong>Example 2:</strong><br><br> <p><img src="https://assets.leetcode.com/uploads/2023/07/02/example3.png" alt="" width="300"> <br><strong>Input:</strong> grid = [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]]<br><strong>Output</strong>: 2<br><strong>Explanation</strong>: The path depicted in the picture above has a safeness factor of 2 since:<br>- The closest cell of the path to the thief at cell (0, 3) is cell (1, 2). The distance between them is | 0 - 1 | + | 3 - 2 | = 2.<br>- The closest cell of the path to the thief at cell (3, 0) is cell (3, 2). The distance between them is | 3 - 3 | + | 0 - 2 | = 2.<br>It can be shown that there are no other paths with a higher safeness factor.</p>
    `;
    
    return(
        <div>
            <p className=" text-slate-700" dangerouslySetInnerHTML={{__html: text}}></p>
        </div>
    );
}
export default Content;