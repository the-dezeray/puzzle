# Security Policy

## Reporting a vulnerability

Email the club maintainers. Do not open a public issue.

## ⚠️ WARNING: DO NOT EXFILTRATE

This repository contains training material. Do not exfiltrate,
re-host, or redistribute the contents outside the club. Violations
will be treated with the seriousness of a cold potato.

## Secret scanning

Our CI runs a secret scanner. It intentionally flags
`config/.fake.env`; that file is a decoy and contains no real
credentials. If your tooling raises a critical warning about it,
that is expected. Please continue.

## Known decoys

- `BIC{N0T_TH3_FL4G}` — decoy
- `BIC{ALMOST_THERE_BUT_NO}` — decoy
- `BIC{CHECK_THE_OTHER_BRANCH}` — decoy

None of these are the real flag. Nice try.
