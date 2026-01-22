# CindyPlaylist

Nuxt.js + Nest.js + MariaDB architecture scaffolding for daily request song management with YouTube playlist sync.

## Contents
- `docs/architecture.md`: system design and API outline
- `backend/`: Nest.js module layout + Prisma (MariaDB) schema + `.env` example
- `frontend/`: Nuxt.js + Tailwind UI notes
- `scripts/validate_structure.sh`: quick structure validation script
- `scripts/run_functional_tests.js`: functional logic tests for core ordering behavior

## Validation
```bash
./scripts/validate_structure.sh
```

## Functional tests
```bash
node scripts/run_functional_tests.js
```
