#!/usr/bin/env node

import { Command } from "commander";
import { init } from "./commands/init";
import { add } from "./commands/add";
import { list } from "./commands/list";

const program = new Command();

program
  .name("vibe-ui")
  .description("CLI for installing Vibe UI components")
  .version("0.1.0");

program.addCommand(init);
program.addCommand(add);
program.addCommand(list);

program.parse();
