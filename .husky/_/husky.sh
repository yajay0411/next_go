#!/bin/sh
# Husky v9 manual setup
if [ -z "$husky_skip_init" ]; then
  husky_skip_init=true
  debug () {
    [ "$HUSKY_DEBUG" = "1" ] && echo "husky: $1"
  }
  readonly hook_name="$(basename "$0")"
  debug "starting $hook_name hook"
fi
