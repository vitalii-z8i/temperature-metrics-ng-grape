#!/bin/bash
`rackup -E test -P tmp/rackup.pid` &
echo "$(protractor frontend/e2e-tests/protractor.conf.js)"
`kill -kill $(<'tmp/rackup.pid')`