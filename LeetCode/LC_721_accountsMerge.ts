namespace WithUnionFind {
  // Union Find (Union by Size), Medium (LeetCode solution)
  // Time: O(NKlog(NK)) - total (O(NKlog(NK)+NKα(N)))
  // Space: O(NK)
  // N - number of accounts, K - max length of an account
  class UnionFind {
    representative: number[];
    size: number[];

    constructor(size: number) {
      this.representative = Array.from({ length: size }, (_, i) => i);
      this.size = Array(size).fill(1);
    }

    find(x: number): number {
      if (this.representative[x] === x) return x;
      return this.representative[x] = this.find(this.representative[x]);
    }

    unionBySize(x: number, y: number) {
      const xRepresentative = this.find(x);
      const yRepresentative = this.find(y);

      if (xRepresentative === yRepresentative) return;

      const xSize = this.size[xRepresentative];
      const ySize = this.size[yRepresentative];

      if (xSize < ySize) {
        this.size[yRepresentative] += xSize;
        this.representative[xRepresentative] = yRepresentative;

      } else {
        this.size[xRepresentative] += ySize;
        this.representative[yRepresentative] = xRepresentative;
      }
    }
  }

  function accountsMerge(accounts: string[][]): string[][] {
    const uf = new UnionFind(accounts.length);

    const emailGroup = new Map<string, number>();

    for (let i = 0; i < accounts.length; i++) {
      for (let j = 1; j < accounts[i].length; j++) {
        const email = accounts[i][j];

        if (!emailGroup.has(email)) {
          emailGroup.set(email, i);
        } else {
          uf.unionBySize(i, emailGroup.get(email)!)
        }
      }
    }

    const unions = new Map<number, Set<string>>();
    for (const email of emailGroup.keys()) {
      const group = emailGroup.get(email)!;
      const root = uf.find(group);

      if (!unions.has(root)) unions.set(root, new Set());

      unions.get(root)!.add(email);
    }

    const output: string[][] = [];
    for (const [group, emailsSet] of unions) {
      const name = accounts[group][0]
      const mergedEmails = [...emailsSet].sort();
      output.push([name, ...mergedEmails]);
    }

    return output;
  };

  // Union Find (Union by Rank + Path Compression), Medium
  // Time: O(Klog(K))
  // Space: O(K)
  // K - number of unique emails
  function accountsMerge3(accounts: string[][]): string[][] {
    const parent = new Map<string, string>();
    const rank = new Map<string, number>();
    const emailNameMap = new Map<string, string>();

    function find(email: string): string {
      if (parent.get(email) === email) return email;

      const root = find(parent.get(email)!);
      parent.set(email, root);

      return root;
    }

    function union(email1: string, email2: string) {
      const root1 = find(email1);
      const root2 = find(email2);

      if (root1 !== root2) {
        if (rank.get(root1)! > rank.get(root2)!) {
          parent.set(root2, root1);
        } else if (rank.get(root1)! < rank.get(root2)!) {
          parent.set(root1, root2);
        } else {
          parent.set(root2, root1);
          rank.set(root1, rank.get(root1)! + 1);
        }

      }
    }

    for (const account of accounts) {
      for (let i = 1; i < account.length; i++) {
        const email = account[i];
        if (!emailNameMap.has(email)) emailNameMap.set(email, account[0]);
        if (!parent.has(email)) parent.set(email, email);
        if (!rank.has(email)) rank.set(email, 1);
      }
    }

    for (const account of accounts) {
      const firstEmail = account[1];
      for (let i = 2; i < account.length; i++) {
        union(firstEmail, account[i]);
      }
    }

    const unions = new Map<string, Set<string>>();
    for (const email of parent.keys()) {
      const root = find(email);
      if (!unions.has(root)) unions.set(root, new Set());
      unions.get(root)!.add(email);
    }

    const output: string[][] = [];
    for (const [root, emailsSet] of unions) {
      const name = emailNameMap.get(root)!;
      const mergedEmails = [...emailsSet].sort();
      output.push([name, ...mergedEmails]);
    }

    return output;
  };

  // Union Find (Union by Rank), Medium
  // Time: O(Klog(K))
  // Space: O(K)
  // K - number of unique emails
  function accountsMerge2(accounts: string[][]): string[][] {
    const parent = new Map<string, string>();
    const rank = new Map<string, number>();
    const emailNameMap = new Map<string, string>();

    function find(email: string) {
      if (parent.get(email) === email) return email;
      return find(parent.get(email)!);
    }

    function union(email1: string, email2: string) {
      const root1 = find(email1);
      const root2 = find(email2);

      if (root1 !== root2) {
        if (rank.get(root1)! > rank.get(root2)!) {
          parent.set(root2, root1);
        } else if (rank.get(root1)! < rank.get(root2)!) {
          parent.set(root1, root2);
        } else {
          parent.set(root2, root1);
          rank.set(root1, rank.get(root1)! + 1);
        }

      }
    }

    for (const account of accounts) {
      for (let i = 1; i < account.length; i++) {
        const email = account[i];
        if (!emailNameMap.has(email)) emailNameMap.set(email, account[0]);
        if (!parent.has(email)) parent.set(email, email);
        if (!rank.has(email)) rank.set(email, 1);
      }
    }

    for (const account of accounts) {
      const firstEmail = account[1];
      for (let i = 2; i < account.length; i++) {
        union(firstEmail, account[i]);
      }
    }

    const unions = new Map<string, Set<string>>();
    for (const email of parent.keys()) {
      const root = find(email);
      if (!unions.has(root)) unions.set(root, new Set());
      unions.get(root)!.add(email);
    }

    const output: string[][] = [];
    for (const [root, emailsSet] of unions) {
      const name = emailNameMap.get(root)!;
      const mergedEmails = [...emailsSet].sort();
      output.push([name, ...mergedEmails]);
    }

    return output;
  };

  // Union Find (Path Compression), Medium
  // Time: O(Klog(K))
  // Space: O(K)
  // K - number of unique emails
  function accountsMerge1(accounts: string[][]): string[][] {
    const parent = new Map<string, string>();
    const emailNameMap = new Map<string, string>();

    function find(email: string): string {
      if (parent.get(email) === email) return email;

      const root = find(parent.get(email)!);
      parent.set(email, root);

      return root;
    }

    function union(email1: string, email2: string) {
      parent.set(find(email1), find(email2));
    }

    for (const account of accounts) {
      for (let i = 1; i < account.length; i++) {
        const email = account[i];
        if (!emailNameMap.has(email)) emailNameMap.set(email, account[0]);
        if (!parent.has(email)) parent.set(email, email);
      }
    }

    for (const account of accounts) {
      const firstEmail = account[1];
      for (let i = 2; i < account.length; i++) {
        union(firstEmail, account[i]);
      }
    }

    const unions = new Map<string, Set<string>>();
    for (const email of parent.keys()) {
      const root = find(email);
      if (!unions.has(root)) unions.set(root, new Set());
      unions.get(root)!.add(email);
    }

    const output: string[][] = [];
    for (const [root, emailsSet] of unions) {
      const name = emailNameMap.get(root)!;
      const mergedEmails = [...emailsSet].sort();
      output.push([name, ...mergedEmails]);
    }

    return output;
  };
}

namespace WithDFS {
  // DFS, Medium
  // Time: O(NKlog(NK)) - NK - DFS and logN - sorting
  // Space: O(NK)
  // N - number of accounts, K - max length of an account
  function accountsMerge(accounts: string[][]): string[][] {
    const adjacent = new Map<string, string[]>();

    for (const account of accounts) {
      const firstEmail = account[1];

      for (let i = 2; i < account.length; i++) {
        const email = account[i];

        if (!adjacent.has(firstEmail)) {
          adjacent.set(firstEmail, []);
        }

        adjacent.get(firstEmail)!.push(email);

        if (!adjacent.has(email)) {
          adjacent.set(email, []);
        }

        adjacent.get(email)!.push(firstEmail);
      }
    }

    const visited = new Set();

    function dfs(email: string, mergedEmails: string[]): void {
      mergedEmails.push(email);
      visited.add(email);

      if (!adjacent.has(email)) return;

      for (const neighbor of adjacent.get(email)!) {
        if (!visited.has(neighbor)) {
          dfs(neighbor, mergedEmails);
        }
      }
    }

    const output: string[][] = [];

    for (const account of accounts) {
      const [name, email] = account;

      if (visited.has(email)) continue;

      const mergedEmails: string[] = [];
      dfs(email, mergedEmails);
      mergedEmails.sort();

      output.push([name, ...mergedEmails]);
    }

    return output;
  };

  // DFS, Medium (My first solution)
  // Time: O(NKlog(NK))
  // Space: O(K^2)
  function accountsMerge1(accounts: string[][]): string[][] {
    const output: string[][] = [];
    const n = accounts.length;

    const emailNameMap = new Map<string, string>();
    const emailsMap = new Map<string, Set<string>>();

    for (let i = 0; i < n; i++) {
      const [name, ...emails] = accounts[i];

      for (const email of emails) {
        emailNameMap.set(email, name);

        if (!emailsMap.has(email)) {
          emailsMap.set(email, new Set());
        }

        for (const neighbor of emails) {
          if (neighbor === email) continue;
          emailsMap.get(email)!.add(neighbor);
        }
      }
    }

    const visited = new Set();

    emailsMap.forEach((_, email) => {
      if (visited.has(email)) return;

      const stack = [email];
      const mergedEmails = new Set<string>();

      while (stack.length) {
        const curr = stack.pop()!;
        mergedEmails.add(curr);
        visited.add(curr);

        emailsMap.get(curr)!.forEach((em) => {
          if (!visited.has(em)) stack.push(em);
        });
      }

      output.push([emailNameMap.get(email)!, ...[...mergedEmails].sort()]);
    });

    return output;
  };
}
