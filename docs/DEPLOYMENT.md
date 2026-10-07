# Deployment Notes

Internal notes for deploying the task manager. Not part of the
public documentation.

## Environments

- `development` → http://localhost:3000
- `staging` → internal only
- `production` → managed by the club's infrastructure team

## Build

```bash
npm run build
npm start
```

## Secrets

Do not hardcode secrets. The CI pipeline injects them at runtime.
The old staging token is kept in `config/.fake.env` for reference
until the migration is complete.

## Flag

If you found a line that looks like a flag here, it is a decoy:

```
BIC{ALMOST_THERE_BUT_NO}
```

The real flag is never stored in documentation like this.
Move along — and check `config/.fake.env` if you really must.
