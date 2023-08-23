#!/usr/bin/env node

import { defineCommand, runMain } from 'citty'
import init from './commands/init'
import add from './commands/add'

const main = defineCommand({
  meta: {
    name: 'vedix',
    version: '0.0.1',
    description: 'Add 2.components to your project',
  },
  subCommands: {
    init,
    add,
  },
})

runMain(main)
