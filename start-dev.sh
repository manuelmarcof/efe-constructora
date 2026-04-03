#!/bin/bash
export PATH="/usr/local/bin:$PATH"
cd "/Users/manuel.marco/Desktop/efe company/efe-constructora"
exec npx next dev -p ${PORT:-3000}
