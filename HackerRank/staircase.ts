function staircase(n: number): void {
    // Write your code here
    for (let i = 1; i <= n; i++) {
        const spaces = Array.from({ length: n - i }).fill(' ').join('')
        const chars = Array.from({ length: i }).fill('#').join('')
        
        console.log(spaces + chars)
    }
}
