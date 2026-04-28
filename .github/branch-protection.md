# Branch Protection Setup

Run these commands with a GitHub admin account for this repository:

```bash
gh auth login -h github.com
gh api --method PUT repos/blummify/blummify-platform/branches/main/protection --input .github/branch-protection.json
```
