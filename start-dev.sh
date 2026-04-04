#!/bin/bash
export PATH="/usr/local/bin:/usr/bin:/bin:$PATH"
export HOME="/Users/manuel.marco"
cd "/Users/manuel.marco/Desktop/efe company/efe-constructora"
exec /usr/local/bin/npx next dev -p ${PORT:-3000}
